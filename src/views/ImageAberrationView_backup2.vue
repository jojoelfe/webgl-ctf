<script setup lang="ts">

import { useParameterStore } from '@/stores/parameters';

import VueDrawingCanvas from 'vue-drawing-canvas';
import fft_glsl from '../glsl/image_aberration/fft.glsl';
import vert_glsl from '../glsl/image_aberration/vert.glsl';
import render_glsl from '../glsl/image_aberration/render.glsl';
import fft from 'glsl-fft';
import regl_fac from 'regl';
import glsl from 'glslify';
import { ref, watch } from 'vue';
import { onMounted } from "vue";

const params = useParameterStore();
const fft_canvas = ref(null);
const aberration_canvas = ref(null);
const ViewCanvasDrawing = ref(null);
const image = ref(null);

const common_render_parameters = {
  vert: vert_glsl,
  attributes: { xy: [-4, -4, 4, -4, 0, 4] },
  depth: { enable: false },
  count: 3
}

const render = regl(Object.assign({
  frag: render_glsls,
  uniforms: {
    src: regl.prop('input'),
  },
  framebuffer: regl.prop('output'),

}, common_render_parameters));

const apply = regl(Object.assign({
    frag: fft_glsl,
    uniforms: {
      resolution: regl.prop('resolution'),
      forward: regl.prop('forward'),
      subtransformSize: regl.prop('subtransformSize'),
      horizontal: regl.prop('horizontal'),
      normalization: regl.prop('normalization'),
      src: regl.prop('input'),
    },
    framebuffer: regl.prop('output'),
  });

params.$subscribe(() => {
  start(regl.value);
}

);

function start(regl) {
  const width = regl._gl.canvas.width;
  const height = regl._gl.canvas.height;
  console.log(width, height);
  const img = regl.texture({ data: document.querySelector("#VueDrawingCanvas").getContext('2d'), flipY: true });
  if (document.querySelector(".ctfvis > shader-doodle:nth-child(1)") == undefined || document.querySelector(".ctfvis > shader-doodle:nth-child(1)").surface == undefined) {
    console.log("Couldn't get ctf!");
    return;
  }
  const ctf = regl.texture({ data: document.querySelector(".ctfvis > shader-doodle:nth-child(1)").surface.dom.getContext('2d'), flipY: true });
  const type = (regl.hasExtension('oes_texture_float')) ? 'float' : 'half float';
  const fbos = [0, 1, 2].map(() => regl.framebuffer({ colorType: type, width: width, height: height }));


 

  
  // const render_real = regl({
  //   vert: `
  //     precision mediump float;
  //     attribute vec2 xy;
  //     void main () {
  //       gl_Position = vec4(xy, 0, 1);
  //     }
  //   `,
  //   frag:  `
  //     precision highp float;
  //     varying vec2 uv;
  //     uniform sampler2D src;
  //     
  //     void main () {
  //       vec4 col = texture2D(src, uv);
  //       float value = col.x;
  //       gl_FragColor = vec4(value * vec3(1.0,1.0,1.0) , 1.0);
  //     }
  //   `,
  //   uniforms: {
  //     resolution: regl.prop('resolution'),
  //     forward: regl.prop('forward'),
  //     subtransformSize: regl.prop('subtransformSize'),
  //     horizontal: regl.prop('horizontal'),
  //     normalization: regl.prop('normalization'),
  //     src: regl.prop('input'),
  //   },
  //   attributes: { xy: [-4, -4, 4, -4, 0, 4] },
  //   framebuffer: regl.prop('output'),
  //   depth: { enable: false },
  //   count: 3
  // });
  //
  const filter = regl({
    vert: `
      precision mediump float;
      varying vec2 uv;
      attribute vec2 xy;
      void main () {
        uv = 0.5 * xy + 0.5;
        gl_Position = vec4(xy, 0, 1);
      }
    `,
    frag: glsl(`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D src;
      uniform sampler2D ctf;
     
      void main () {
        vec4 col = texture2D(src, uv);
        float ctf = texture2D(ctf, uv).y - texture2D(ctf, uv).x;
        
        gl_FragColor = col * -1.0;
      }
    `),
    uniforms: {
      src: regl.prop('input'),
      ctf: regl.prop('ctf'),
    },
    attributes: { xy: [-4, -4, 4, -4, 0, 4] },
    framebuffer: regl.prop('output'),
    depth: { enable: false },
    count: 3
  });

  const forward = fft({
    width: width,
    height: height,
    input: img,
    ping: fbos[0],
    pong: fbos[1],
    output: fbos[0],
    forward: true
  });

  const inverse = fft({
    width: width,
    height: height,
    input: fbos[1],
    ping: fbos[1],
    pong: fbos[2],
    output: fbos[1],
    forward: false
  });

  apply(forward);

  function draw() {
    //radiusReadout.textContent = 100;
    //angleReadout.textContent = 100;
    //var theta = parseFloat(angleReadout) * Math.PI / 180.0;

    filter({
      input: fbos[0],
      output: fbos[1],
      resolution: [1 / width, 1 / height],
      ctf: ctf
    });

    apply(inverse);
    render({
      input: fbos[1],
    });
  }

  //radiusSlider.addEventListener('input', draw);
  //angleSlider.addEventListener('input', draw);
  draw();
}

const regl = ref(null);

onMounted(() => {
  console.log(reg_canvas.value);
  regl.value = regl_fac({
    pixelRatio: 1,
    canvas: reg_canvas.value,
    attributes: { antialias: false },
    //onDone: require('fail-nicely')(regl => start(regl, mist)),
    optionalExtensions: ['oes_texture_float'],
    extensions: ['oes_texture_half_float']
  });

  //console.log(fft_glsl);


});
watch(image, (currentValue, oldValue) => {
  start(regl.value);




});

</script>

<template>
  <main>
    <div>
      <VueDrawingCanvas ref="VueCanvasDrawing" v-model:image="image" width="512" height="512" :styles="{
        'border': 'solid 1px #000'
      }" />
    </div>


    <Ctf :shader="abs_amp_fragment" />
    <div>
      <canvas ref="reg_canvas" id="regltest" width="512" height="512"></canvas>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* Set ap to 2rem */
  grid-gap: 2rem;
  transform: scale(0.5);
}
</style>
