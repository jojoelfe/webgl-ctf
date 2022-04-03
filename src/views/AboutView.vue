<template>
  <div class="ctfvis">
    <shader-doodle width="400px" height="400px" >
      <sd-uniform name="defocus" :x=defocus type="float" />
    </shader-doodle>
    <div class="slidecontainer">
  <input type="range" min="1000" max="10000" v-model=defocus step="10" class="slider" id="myRange">
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted } from '@vue/runtime-core';
import 'shader-doodle';
import fragment from '../glsl/shader.glsl';

export default {
  data() {
    return {
      defocus: 30000,
    };
  },
  methods: {
    doIt() {
      console.log(`Hello ${this.name}`);
    },
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
