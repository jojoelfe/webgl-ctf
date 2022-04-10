<script setup lang="ts">
import Ctf from "@/components/CtfCanvas.vue";
import abs_amp_fragment from "../glsl/abs_amp.glsl";

</script>

<template>
  <main>
    <Ctf :shader="abs_amp_fragment" />
  </main>
</template>
