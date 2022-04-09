<script lang="ts">
import { Slider } from "@spectrum-web-components/slider";
console.log(Slider);
class MySlider extends Slider {
  public get ariaValueText(): string {
    return `${this.value - 100000}Å`;
  }
}

customElements.define("my-slider", MySlider);
</script>

<template>
  <my-slider
    style="width: 300px"
    max="200000"
    min="0"
    value="92000"
    step="100"
    v-on:input="$emit('input', $event.target.value - 100000)"
    >Defocus</my-slider
  >
</template>
