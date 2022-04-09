<template>
  <div class="ctfvis">
    <shader-doodle width="512" height="512">
      <sd-uniform name="defocus" :x="defocus" type="float" />
      <sd-uniform name="pixel_size" :x="pixel_size" type="float" />
      <sd-uniform name="ac" :x="ac" type="float" />
      <sd-uniform
        name="spherical_aberration_mm"
        :x="spherical_aberration"
        type="float"
      />
      <sd-uniform name="voltage" :x="voltage" type="float" />
      <sd-uniform name="astigmatism" :x="astigmatism" type="float" />
      <sd-uniform
        name="astigmatism_angle"
        :x="astigmatism_angle"
        type="float"
      />
    </shader-doodle>
  </div>
</template>

<script lang="ts">
import "shader-doodle";
import abs_amp_fragment from "../glsl/abs_amp.glsl";
import amp_fragment from "../glsl/amp.glsl";

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
    if (this.$route.name == "amp") {
      this.switch_shader(amp_fragment, this.$el);
    } else {
      this.switch_shader(abs_amp_fragment, this.$el);
    }
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
