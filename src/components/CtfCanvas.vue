<template>
  <div class="ctfvis" style="display:flex;flex-direction: row;">
    <shader-doodle width="512" height="512">
      <sd-texture src="#twilight" name="u_twilight"></sd-texture>
      <sd-uniform name="defocus" :x="defocus" type="float" />
      <sd-uniform name="pixel_size" :x="pixel_size" type="float" />
      <sd-uniform name="ac" :x="ac" type="float" />
      <sd-uniform name="spherical_aberration_mm" :x="spherical_aberration" type="float" />
      <sd-uniform name="voltage" :x="voltage" type="float" />
      <sd-uniform name="astigmatism" :x="astigmatism" type="float" />
      <sd-uniform name="astigmatism_angle" :x="astigmatism_angle" type="float" />
    </shader-doodle>
    <div v-show="$route.name === 'phase'" style="display:flex;flex-direction: row;">
    <canvas id="twilight" width="1" height="512" v-show="$route.name ===
    'phase'"></canvas>
    <div style="display:flex;flex-direction:column;
    justify-content:space-between; height:100%;">
      <span>2π</span>
      <span>π</span>
      <span>0</span>
       </div>
    </div>
  </div>
</template>

<script lang="ts">
import "shader-doodle";
import abs_amp_fragment from "../glsl/abs_amp.glsl";
import amp_fragment from "../glsl/amp.glsl";
import imag_fragment from "../glsl/imag.glsl";
import twilight_scale from "./twilightscale";
import phase_fragment from "../glsl/phase.glsl";

export default {
  props: {
    defocus: {
      type: Number,
      default: 8000,
    },
    pixel_size: {
      type: Number,
      default: 2.0,
    },
    ac: {
      type: Number,
      default: 0.07,
    },
    spherical_aberration: {
      type: Number,
      default: 2.7,
    },
    voltage: {
      type: Number,
      default: 300,
    },
    astigmatism: {
      type: Number,
      default: 0,
    },
    astigmatism_angle: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    switch_shader: (shader, el) => {
      if (document.getElementById("glsl-script") !== null) {
        document.getElementById("glsl-script").remove();
      }
      let glslScript = document.createElement("script");
      glslScript.id = "glsl-script";
      glslScript.textContent = shader;
      glslScript.setAttribute("type", "x-shader/x-fragment");
      el.firstChild.appendChild(glslScript);
    },
  },
  mounted() {
    console.log(this.$route.name);
    if (this.$route.name === "amp") {
      this.switch_shader(amp_fragment, this.$el);
    } else if (this.$route.name === "imag") {
      this.switch_shader(imag_fragment, this.$el);
    } else if (this.$route.name === "phase") {
      this.switch_shader(phase_fragment, this.$el);
    } else {
      this.switch_shader(abs_amp_fragment, this.$el);
    }

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
    console.log(twilight_scale);
    ctx.putImageData(imgData, 0, 0);

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
#twilight {
  width: 30px;
  height: 512px;
  margin-left: 30px;
}
</style>
