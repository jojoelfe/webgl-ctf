<script setup lang="ts">
import VueSlider from "vue-3-slider-component";

import { useParameterStore } from '@/stores/parameters';
import ImageAberrationView from "./views/ImageAberrationView.vue";


const parameters = useParameterStore();

</script>

<template>
  <div class="main">
    <div class="wrapper">
      <div class="slider-container">
        <label>Defocus (Å)</label>
        <VueSlider
          v-model="parameters.defocus"         
        />
        <div class="slider-container">
        <label>Astigmatism (Å)</label>
        <vue-slider
          v-model="parameters.astigmatism"
          :min="0"
          :max="100000"
          :interval="100"
          :tooltip="'always'"
        ></vue-slider>
      </div>
      
      <div class="slider-container">
        <label>Astigmatism angle (°)</label>
        <vue-slider
          v-model="parameters.astigmatism_angle"
          :min="0"
          :max="180"
          :interval="1"
          :tooltip="'always'"
        ></vue-slider>
      </div>
      
      <div class="slider-container">
        <label>Pixel size (Å)</label>
        <vue-slider
          v-model="parameters.pixel_size"
          :min="0"
          :max="10"
          :interval="0.1"
          :tooltip="'always'"
        ></vue-slider>
      </div>
      
      <div class="slider-container">
        <label>Amplitude contrast</label>
        <vue-slider
          v-model="parameters.ac"
          :min="0"
          :max="1"
          :interval="0.01"
          :tooltip="'always'"
        ></vue-slider>
      </div>
      
      <div class="slider-container">
        <label>Spherical aberration (mm)</label>
        <vue-slider
          v-model="parameters.spherical_aberration"
          :min="0"
          :max="10.0"
          :interval="0.05"
          :tooltip="'always'"
        ></vue-slider>
      </div>
      
      <div class="slider-container">
        <label>Voltage (kV)</label>
        <vue-slider
          v-model="parameters.voltage"
          :min="0"
          :max="1000"
          :interval="10"
          :tooltip="'always'"
        ></vue-slider>
      </div>

      </div>

           
    </div>

    <ImageAberrationView />
  </div>

</template>

<style>
@import "@/assets/base.css";

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

@media (min-width: 1024px) {
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

.slider-container {
  margin-bottom: 20px;
  width: 300px;
}

.slider-container label {
  display: block;
  margin-bottom: 5px;
}
</style>
