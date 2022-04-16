<script setup lang="ts" >
import "shader-doodle";

import { onMounted, ref } from 'vue';
import dft_x_shader from "../glsl/dft_x_shader.glsl?url";
import dft_y_shader from "../glsl/dft_y_shader.glsl?url";


const props = defineProps({
  input: String
})





</script>


<template>
  <div class="fftvis" ref="fftvis" style="display:flex;flex-direction: row;">

    <shader-doodle ref="dft_x" id="fftvis" width="512" height="512">
      <sd-texture :src="input" force-update></sd-texture>
      <component :is="'script'" :src="dft_x_shader" type="x-shader/x-fragment">
      </component>
    </shader-doodle>

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
