import { defineStore } from 'pinia'

export const useParameterStore = defineStore('parameters', {
  state: () => {
    return {  defocus: -8000,
        pixel_size: 1.0,
        ac: 0.07,
         spherical_aberration: 2.7,
        voltage: 300,
        astigmatism: 0,
        astigmatism_angle: 0,
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.pixel_size++
    },
  },
})