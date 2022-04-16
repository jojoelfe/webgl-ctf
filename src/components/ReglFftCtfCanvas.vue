<script setup lang="ts">

import fft_glsl from '../glsl/image_aberration/fft.glsl';
import vert_glsl from '../glsl/image_aberration/vert.glsl';
import render_glsl from '../glsl/image_aberration/render.glsl';
import preproc_glsl from '../glsl/image_aberration/preproc.glsl';
import ctf_glsl from '../glsl/image_aberration/ctf.glsl';
import fft from 'glsl-fft';
import regl_fac from 'regl';
import { ref, watch } from 'vue';
import { onMounted } from "vue";
import { useParameterStore } from '@/stores/parameters';

const params = useParameterStore();

const props = defineProps({
  src: Object,
  image: String
});

const canvas = ref(null);

const re = {};

function draw(regl) {
    const img = regl.texture({ data: props.src.getContext('2d'), flipY: true });
    re.preproc({
        input: img,
        output: re.fbos[0]
    })
    const forward = fft({
        width: re.width,
        height: re.height,
        input:re.fbos[0],
        ping: re.fbos[0],
        pong: re.fbos[1],
        output: re.fbos[0],
        forward: true
    });
    re.apply(forward);
    re.ctf({
        input: re.fbos[0],
        output: re.fbos[1],
        defocus: params.defocus,
        pixel_size: params.pixel_size,
        amplitude_contrast: params.ac,
        spherical_aberration: params.spherical_aberration,
        voltage: params.voltage,
        astigmatism: params.astigmatism,
        astigmatism_angle: params.astigmatism_angle
    });
    re.render({
        input: re.fbos[1],
    });
}

function start(regl) {
    re.width = regl._gl.canvas.width;
    re.height = regl._gl.canvas.height;
    const type = (regl.hasExtension('oes_texture_float')) ? 'float' : 'half float';
    re.fbos = [0, 1, 2].map(() => regl.framebuffer({ colorType: type, width: re.width, height: re.height }));
    
    re.common_render_parameters = {
        vert: vert_glsl,
        attributes: { xy: [-4, -4, 4, -4, 0, 4] },
        depth: { enable: false },
        count: 3
    }

    re.preproc = regl(Object.assign({
        frag: preproc_glsl,
        uniforms: {
            src: regl.prop('input'),
        },
        framebuffer: regl.prop('output')
    }, re.common_render_parameters));

    re.ctf = regl(Object.assign({
        frag: ctf_glsl,
        uniforms: {
            src: regl.prop('input'),
            defocus: regl.prop('defocus'),
            astigmatism: regl.prop('astigmatism'),
            astigmatism_angle: regl.prop('astigmatism_angle'),
            pixel_size: regl.prop('pixel_size'),
            ac: regl.prop('amplitude_contrast'),
            spherical_aberration_mm: regl.prop('spherical_aberration'),
            voltage: regl.prop('voltage')
        },
        framebuffer: regl.prop('output')
    }, re.common_render_parameters));

    re.render = regl(Object.assign({
        frag: render_glsl,
        uniforms: {
            src: regl.prop('input'),
        },
        framebuffer: regl.prop('output'),

    }, re.common_render_parameters));

    re.apply = regl(Object.assign({
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
    }, re.common_render_parameters));
}

const regl = ref(null);

onMounted(() => {
    re.regl = regl_fac({
        pixelRatio: 1,
        canvas: canvas.value,
        attributes: { antialias: false },
        //onDone: require('fail-nicely')(regl => start(regl, mist)),
        optionalExtensions: ['oes_texture_float'],
        extensions: ['oes_texture_half_float']
    });

    start(re.regl);


});

watch(() => props.image, (currentValue, oldValue) => {
    draw(re.regl);
});
params.$subscribe(() => {
  draw(re.regl);
});

</script>

<template>

    <div>
        <canvas ref="canvas" width="512" height="512"></canvas>
    </div>

</template>

<style scoped>

</style>
