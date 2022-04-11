<script setup lang="ts" >
import "shader-doodle";

import twilight_scale from "./twilightscale";

import { useParameterStore } from '@/stores/parameters';
import {  useRoute } from 'vue-router'
import { onMounted, ref } from 'vue';

const route = useRoute();
const paras = useParameterStore();
const ctfvis = ref(null);
const props = defineProps({
  shader: String
})



function set_shader() {
  let el = ctfvis.value;

  let glslScript = document.createElement("script");
  glslScript.id = "glsl-script";
  glslScript.textContent = props.shader;
  glslScript.setAttribute("type", "x-shader/x-fragment");
  el.firstChild.appendChild(glslScript);
}

onMounted(() => {
  set_shader();

  // Set pixels in twilight canvas according to twilight_scale
  let twilight = document.getElementById("twilight");
  let ctx = twilight.getContext("2d");

  let imgData = ctx.getImageData(0, 0, 1, 512);
  let data = imgData.data;
  for (let i = 0; i < 512; i++) {
    data[i * 4] = twilight_scale[i][0] * 255;
    data[i * 4 + 1] = twilight_scale[i][1] * 255;
    data[i * 4 + 2] = twilight_scale[i][2] * 255;
    data[i * 4 + 3] = 255;
  }
  ctx.putImageData(imgData, 0, 0);

});

</script>


<template>
  <div class="ctfvis" ref="ctfvis" style="display:flex;flex-direction: row;">
    <shader-doodle width="512" height="512">
      <sd-texture src="#twilight" name="u_twilight"></sd-texture>
       <sd-uniform name="defocus" :x="paras.defocus" type="float" />
      <sd-uniform name="pixel_size" :x="paras.pixel_size" type="float" />
      <sd-uniform name="ac" :x="paras.ac" type="float" />
      <sd-uniform name="spherical_aberration_mm" :x="paras.spherical_aberration" type="float" />
      <sd-uniform name="voltage" :x="paras.voltage" type="float" />
      <sd-uniform name="astigmatism" :x="paras.astigmatism" type="float" />
      <sd-uniform name="astigmatism_angle" :x="paras.astigmatism_angle"
      type="float" /> 
    </shader-doodle>
    <div v-show="$route.name === 'phase'" style="display:flex;flex-direction: row;">
      <canvas id="twilight" width="1" height="512" v-show="$route.name ===
      'phase'"></canvas>
      <div
        style="display:flex;flex-direction:column;
    justify-content:space-between; height:100%;"
      >
        <span>2π</span>
        <span>π</span>
        <span>0</span>
      </div>
    </div>
  </div>
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
#twilight {
  width: 30px;
  height: 512px;
  margin-left: 30px;
}
shader-doodle {
  max-width: 100%;
  max-height: 100%;
}
</style>
