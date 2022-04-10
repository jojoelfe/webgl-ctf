<script setup lang="ts">
import Ctf from "@/components/CtfCanvas.vue";
import amp_fragment from "../glsl/amp.glsl";

</script>

<template>
  <main>
    <Ctf :shader="amp_fragment" />
  </main>
</template>
