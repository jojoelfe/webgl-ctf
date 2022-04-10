<script setup lang="ts">
import Ctf from "@/components/CtfCanvas.vue";
import phase_fragment from "../glsl/phase.glsl";

</script>

<template>
  <main>
    <Ctf :shader="phase_fragment" />
  </main>
</template>
