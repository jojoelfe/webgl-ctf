<script setup lang="ts">
import "@spectrum-web-components/slider/sp-slider.js";
import "@spectrum-web-components/radio/sp-radio.js";
import "@spectrum-web-components/radio/sp-radio-group.js";
import slider from "@/components/Slider.vue";
import { RouterView, RouterLink } from "vue-router";
import { ref } from "vue";
import { useParameterStore } from '@/stores/parameters';


const parameters = useParameterStore();


function set_defocus(event) {
  if (!isNaN(event)) {
    console.log(event);
    parameters.defocus = event;
  }
}
</script>

<template>
  <h1>The Contrast Transfer Function</h1>
  <div class="main">
    <div class="wrapper">
      
      <slider v-on:input="set_defocus" />
      <sp-slider
        style="width: 250px"
        max="100000"
        step="100"
        value="0.0"
        v-on:change="parameters.astigmatism = $event.target.value"
        v-on:input="parameters.astigmatism = $event.target.value"
        format-options='{
        "style": "unit",
        "unit": "Å"
    }'
        >Astigmatism</sp-slider
      >
      <sp-slider
        style="width: 250px"
        max="180"
        step="1"
        value="0"
        v-on:change="parameters.astigmatism_angle = $event.target.value"
        v-on:input="parameters.astigmatism_angle = $event.target.value"
        format-options='{
        "style": "unit",
        "unit": "°"
    }'
        >Astigmatism angle</sp-slider
      >
      <sp-slider
        style="width: 250px"
        max="10"
        step="0.1"
        value="1.0"
        v-on:change="parameters.pixel_size = $event.target.value"
        v-on:input="parameters.pixel_size = $event.target.value"
        format-options='{
        "style": "unit",
        "unit": "Å"
    }'
        >Pixel size</sp-slider
      >
      <sp-slider
        style="width: 250px"
        max="1"
        step="0.01"
        value="0.07"
        v-on:change="parameters.ac = $event.target.value"
        v-on:input="parameters.ac = $event.target.value"
        format-options='{
        "style": "unit",
        "unit": ""
    }'
        >Amplitude contrast</sp-slider
      >
      <sp-slider
        style="width: 250px"
        max="10.0"
        step="0.05"
        value="2.7"
        v-on:change="parameters.spherical_aberration = $event.target.value"
        v-on:input="parameters.spherical_aberration = $event.target.value"
        format-options='{
        "style": "unit",
        "unit": "mm"
    }'
        >Spherical aberration</sp-slider
      >
      <sp-slider
        style="width: 250px"
        max="1000"
        step="10"
        value="300"
        v-on:change="parameters.voltage = $event.target.value"
        v-on:input="parameters.voltage = $event.target.value"

        format-options='{
        "style": "unit",
        "unit": "kV"
    }'
        >Voltage</sp-slider
      >
      
    </div>

    <RouterView />
  </div>
  
</template>

<style>
@import "@/assets/base.css";
@import "@spectrum-web-components/styles/all-medium-light.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  font-weight: normal;
  min-height: 100vh;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
}

footer {
  margin-top: auto;
}

.wrapper {
  margin-left: 2rem;
  margin-right: 2rem;
}

header {
  line-height: 1.5;
  max-height: 10vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 800px) {
  body {
    display: flex;
    place-items: center;
  }

  .main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  #app {
    display: flex;
    place-items: center;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
