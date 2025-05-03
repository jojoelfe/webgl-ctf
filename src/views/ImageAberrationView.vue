<script setup lang="ts">
import RealSpaceCtfCanvas from '@/components/RealSpaceCtfCanvas.vue';
import { ref, watch } from 'vue';
import { onMounted } from "vue";

const videoFeed = ref(null);
const canvas = ref(null);
const context = ref(null);
const image = ref(null);

onMounted(() => {
  // Access the video feed and canvas context
  context.value = canvas.value.getContext('2d');
  startCameraFeed();
});

async function startCameraFeed() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoFeed.value.srcObject = stream;
    videoFeed.value.play();
  } catch (error) {
    console.error('Error accessing camera:', error);
  }
}

function captureFrame() {
  if (context.value && videoFeed.value) {
    context.value.drawImage(videoFeed.value, 0, 0, canvas.value.width, canvas.value.height);
    image.value = canvas.value.toDataURL('image/png');
  }
}
</script>

<template>
  <main>
    <div class="tile">
      <h4>Camera Feed</h4>
      <video ref="videoFeed" width="512" height="512"></video>
    </div>
    <div class="tile">
      <h4>Canvas</h4>
      <canvas ref="canvas" width="512" height="512"></canvas>
    </div>
    <div class="tile">
      <h4>CTF(Image)</h4>
      <div class="scale">
        <RealSpaceCtfCanvas :src="canvas" :image="image">

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
  grid-gap: 2rem;
}

.scale {
  transform: scale(0.5);
  margin: -130px;
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
