<script setup lang="ts">
import VueDrawingCanvas from 'vue-drawing-canvas';
import ReglFftCanvas from '../components/ReglFftCanvas.vue';
import ReglFftCtfCanvas from '../components/ReglFftCtfCanvas.vue';
import RealSpaceCtfCanvas from '@/components/RealSpaceCtfCanvas.vue';
import { ref, watch } from 'vue';
import { onMounted } from "vue";
import Ctf from "@/components/CtfCanvas.vue";
import abs_amp_fragment from "../glsl/abs_amp.glsl";
import CtfChartVue from '@/components/CtfChart.vue';

const drawing_div = ref(null);
const drawing_canvas = ref(null);
const VueCanvasDrawing = ref(null);
const image = ref(null);
const backgroundImage = ref(null);

onMounted(() => {
  drawing_canvas.value = drawing_div.value.firstChild;
  setImage("http://localhost:3000/webgl-ctf/slicer000.png");
});

watch(image, function (newVal, oldVal) {
  console.log(drawing_canvas.value);
});

async function setImage(url) {
  let URL = window.URL;
  backgroundImage.value = url;
  await VueDrawingCanvas.value.redraw();
}

</script>

<template>
  <main>
    <div class="tile">
      <h4>1D CTF</h4>
      <div style="height:200px;">
      <CtfChartVue></CtfChartVue>
    </div>
    </div>
   
    <div class="tile">
      <h4>2D Powerspectrum</h4>
      <div class="scalemore">
        <div>
          <Ctf :shader="abs_amp_fragment" />
        </div>
      </div>
    </div>
    <div class="tile">
      <h4>Image</h4>
      <div class="scale">
        <div ref="drawing_div">
          <VueDrawingCanvas ref="VueCanvasDrawing" v-model:image="image" width="512" height="512" :background-image="backgroundImage" :styles="{
            'border': 'solid 1px #000'
          }" />
        </div>
      </div>
    </div>
    <div class="tile">
      <h4>CTF(Image)</h4>
      <div class="scale">
        <RealSpaceCtfCanvas :src="drawing_canvas" :image="image">

        </RealSpaceCtfCanvas>
      </div>
    </div>
    

  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* Set ap to 2rem */
  grid-gap: 1rem;
}

.scale {
  transform: scale(0.4);
  margin: -150px;
}

.scalemore {
  transform: scale(0.4);
  margin: -150px;
}

.tile h4 {
  text-align: center;
}

label {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  cursor: pointer;
}

label:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}

input {
  display: none
}
</style>
