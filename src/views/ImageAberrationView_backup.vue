<script setup lang="ts">
import Ctf from "@/components/CtfCanvas.vue";
import fft from "ndarray-fft";
import zeros from "zeros"
import ops from "ndarray-ops";
import VueDrawingCanvas from 'vue-drawing-canvas';

import { ref, watch } from 'vue';
import { onMounted } from "vue";

const ViewCanvasDrawing = ref(null);
const image = ref(null);



</script>

<template>
  <main>
    <div>
      <VueDrawingCanvas ref="VueCanvasDrawing" v-model:image="image" width="512" height="512" :styles="{
        'border': 'solid 1px #000'
      }" />
    </div>


    <Ctf :shader="abs_amp_fragment" />
    <div>
      <canvas ref="fft_canvas" id="fft_canvas" width="512" height="512"></canvas>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  /* Set ap to 2rem */
  grid-gap: 2rem;
}

main:deep(div) {
  width: 300px;
  height: 300px;
}

div {
  width: 300px;
  height: 300px;
}

canvas {
  transform: scale(0.586) translate(-35%, -35%);

}
</style>
