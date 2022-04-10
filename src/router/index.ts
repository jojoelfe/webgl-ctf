import { createRouter, createWebHistory } from "vue-router";
import Ctf from "../components/CtfCanvas.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "abs_amp",
      component: Ctf,
    },
    {
      path: "/amp",
      name: "amp",
      
      component: { extends: Ctf },
    },
    {
      path: "/imag",
      name: "imag",

      component: { extends: Ctf },
    },
    {
      path: "/phase",
      name: "phase",

      component: { extends: Ctf },
    },
  ],
});

export default router;
