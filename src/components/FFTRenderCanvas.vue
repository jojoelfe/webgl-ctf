<script setup lang="ts" >
import "shader-doodle";

import { onMounted, ref } from 'vue';
import idft_x_shader from "../glsl/idft_x_shader.glsl?url";
import idft_y_shader from "../glsl/idft_y_shader.glsl?url";
import dft_x_shader from "../glsl/dft_x_shader.glsl?url";
import dft_y_shader from "../glsl/dft_y_shader.glsl?url";

const props = defineProps({
  input: String
})





</script>


<template>
  <div class="rendervis" ref="rendervis" style="display:flex;flex-direction: row;">

    <shader-doodle ref="render_d" width="512" height="512">
      <sd-node ref="idft_y" name="u_idft_y"  
         >
        <sd-node ref="dft_y" name="u_dft_y"  
        >
          <sd-node ref="dft_x" name="u_dft_x" 
        >
            <sd-texture :src="input" force-update  
        ></sd-texture>
            <component :is="'script'" :src="dft_x_shader" type="x-shader/x-fragment">
            </component>

          </sd-node>
          <component :is="'script'" :src="dft_y_shader" type="x-shader/x-fragment">
          </component>


        </sd-node>
        <component :is="'script'" :src="idft_y_shader" type="x-shader/x-fragment">
        </component>
      </sd-node>
      <component :is="'script'" :src="idft_x_shader" type="x-shader/x-fragment">
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
