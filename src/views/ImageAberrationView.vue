<script setup lang="ts">
import VueDrawingCanvas from 'vue-drawing-canvas';
import ReglFftCanvas from '../components/ReglFftCanvas.vue';
import ReglFftCtfCanvas from '../components/ReglFftCtfCanvas.vue';
import RealSpaceCtfCanvas from '@/components/RealSpaceCtfCanvas.vue';
import { ref, watch } from 'vue';
import { onMounted } from "vue";

const drawing_div = ref(null);
const drawing_canvas = ref(null);
const image = ref(null);

onMounted(() => {
  drawing_canvas.value = drawing_div.value.firstChild;
});

watch(image, function (newVal, oldVal) {
  console.log(drawing_canvas.value);
});

</script>

<template>
  <main>
    <div class="tile">
      <h4>Draw or <a>Upload image</a></h4>
      <div class="scale">
        <div ref="drawing_div">
          <VueDrawingCanvas v-model:image="image" width="512" height="512" :styles="{
            'border': 'solid 1px #000'
          }" />
        </div>
      </div>
    </div>
    <div class="tile">
      <h4>DFT</h4>
      <div class="scale">
        <ReglFftCanvas :src="drawing_canvas" :image="image">

        </ReglFftCanvas>
      </div>
    </div>
    <div class="tile">
      <h4>CTF(Image)</h4>
      <div class="scale">
        <RealSpaceCtfCanvas :src="drawing_canvas" :image="image">

        </RealSpaceCtfCanvas>
      </div>
    </div>
    <div class="tile">
      <h4>DFT*CTF</h4>
      <div class="scale">
        <ReglFftCtfCanvas :src="drawing_canvas" :image="image">

        </ReglFftCtfCanvas>
      </div>
    </div>

  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* Set ap to 2rem */
  grid-gap: 2rem;
}
.scale {
  transform: scale(0.5);
  margin: -130px;
}

.tile h4 {
  text-align: center;
}
</style>
