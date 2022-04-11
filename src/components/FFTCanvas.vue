<script setup lang="ts" >
import "shader-doodle";

import { onMounted, ref } from 'vue';
import dft_x_shader from "../glsl/dft_x_shader.glsl";
import dft_y_shader from "../glsl/dft_y_shader.glsl";
import render_shader from "../glsl/render.glsl";

const fftvis = ref(null);
const dft_x = ref(null);
const dft_y = ref(null);
const render = ref(null);
const props = defineProps({
  input: String
})



function set_shader() {
  
  let glslScript = document.createElement("script");
  glslScript.id = "glsl-script";
  glslScript.textContent = dft_x_shader;
  glslScript.setAttribute("type", "x-shader/x-fragment");
  dft_x.value.appendChild(glslScript);

  let glslScripty = document.createElement("script");
  glslScripty.id = "glsl-script";
  glslScripty.textContent = dft_y_shader;
  glslScripty.setAttribute("type", "x-shader/x-fragment");
  dft_y.value.appendChild(glslScripty);

  let glslScriptr = document.createElement("script");
  glslScriptr.id = "glsl-script";
  glslScriptr.textContent = render_shader;
  glslScriptr.setAttribute("type", "x-shader/x-fragment");
  render.value.appendChild(glslScriptr);
}

onMounted(() => {
  set_shader();

});

</script>


<template>
  <div class="fftvis" ref="fftvis" style="display:flex;flex-direction: row;">
    <shader-doodle ref="render" width="512" height="512">
    <sd-node ref="dft_y" name="u_dft_y">
      <sd-node ref="dft_x" name="u_dft_x"  >
        <sd-texture :src="input" force-update ></sd-texture>
      </sd-node>
      </sd-node>
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
