<template>
    <Line :data="data" :options="options"/>
  </template>
  
  <script lang="ts">
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js'
  import { Line } from 'vue-chartjs'
  import { computed } from 'vue'
  import { useParameterStore } from '@/stores/parameters';


const params = useParameterStore();
// Create 100 values between 0 and 0.5
const x_values = Array.from(Array(1000).keys()).map(x => x / 2000)

// Create a computed dataset from x_values
const wavelength = computed(() => 12.2639 / Math.sqrt(1000.0 * params.voltage + 0.97845e-6 * Math.pow(1000.0 *
params.voltage, 2.0)))
const precomputed_amplitude_contrast_term = computed(() => Math.atan(params.ac/Math.sqrt(1.0-Math.pow(params.ac,2.0))))
const squared_spatial_frequency = computed(() => x_values.map(x => Math.pow(x/params.pixel_size, 2.0)))
const phase_shift = computed(() => squared_spatial_frequency.value.map(x => Math.PI * wavelength.value * x * ( - params.defocus - 0.5 * wavelength.value * wavelength.value *x * params.spherical_aberration * 1000.0 * 10000.0) + precomputed_amplitude_contrast_term.value))
 
const ctf_values = computed(() => phase_shift.value.map(x => - Math.sin( x)))
const powerspectrum_values = computed(() => ctf_values.value.map(x => Math.pow(x,2)))

const data = computed(() => ({
  labels: x_values,
  datasets: [
    {
      label: "CTF",
      backgroundColor: '#ff0000',
      borderColor: '#ff0000',
      data: ctf_values.value,
      pointRadius: 0,
      borderWidth: 2,
    },
    {
      label: "Powerspectrum",
      backgroundColor: '#0000ff',
      borderWidth: 2,
      borderColor: '#0000ff',
      data: powerspectrum_values.value,
      pointRadius: 0
    }
  ]
}))

const options = {
  responsive: true,
  maintainAspectRatio: false,
  devicePixelRatio: 2,
  type:'line',
  animation: false, // disables all animations
  // set limtit of y axis from -1 to 1
  scales: {
    y: {
      min: -1.02,
      max: 1.02
    }
  }

}


  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  
  export default {
    name: 'App',
    components: {
      Line
    },
    data() {
      return {
        data: data,
        options: options
      }
    }
  }
  </script>
  