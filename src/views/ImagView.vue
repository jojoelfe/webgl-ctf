<script setup lang="ts">
import Ctf from "@/components/CtfCanvas.vue";
import imag_fragment from "../glsl/imag.glsl";

</script>

<template>
  <main>
    <Ctf :shader="imag_fragment" />
  </main>
</template>
