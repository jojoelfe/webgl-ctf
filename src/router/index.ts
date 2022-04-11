import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "abs_amp",
      component: () => import("../views/AbsAmpView.vue"),
    },
    {
      path: "/amp",
      name: "amp",
      
      component: () => import("../views/AmpView.vue"),
    },
    {
      path: "/imag",
      name: "imag",

      component: () => import("../views/ImagView.vue"),
    },
    {
      path: "/phase",
      name: "phase",

      component: () => import("../views/PhaseView.vue"),
    },
    {
      path: "/image_abb",
      name: "image_abb",

      component: () => import("../views/ImageAberrationView.vue"),
    },
  ],
});

export default router;
