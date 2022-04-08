<template>
  <div class="ctfvis">
    <shader-doodle width="512" height="512" >
      <sd-uniform name="defocus" :x=defocus type="float" />
      <sd-uniform name="pixel_size" :x=pixel_size type="float" />
      <sd-uniform name="ac" :x=ac type="float" />
      <sd-uniform name="spherical_aberration_mm" :x=spherical_aberration type="float" />
      <sd-uniform name="voltage" :x=voltage type="float" />

    </shader-doodle>
  </div>
</template>

<script lang="ts">
import { onMounted } from '@vue/runtime-core';
import 'shader-doodle';
import fragment from '../glsl/shader.glsl';

export default {
  props: {
    defocus: {
      type: Number,
      default: 8000
    },
    pixel_size: {
      type: Number,
      default: 2.0
    },
    ac: {
      type: Number,
      default: 0.07
    },
    spherical_aberration: {
      type: Number,
      default: 2.7
    },
    voltage: {
      type: Number,
      default: 300
    }
  },
  mounted() {
    let glslScript = document.createElement('script');
      console.log(fragment)
      glslScript.textContent = fragment;
      glslScript.setAttribute('type', 'x-shader/x-fragment');
      this.$el.firstChild.appendChild(glslScript);
  },
};


</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
