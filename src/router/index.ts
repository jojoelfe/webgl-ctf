import { createRouter, createWebHistory } from "vue-router";
import Ctf from "../components/Ctf.vue";

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: {extends:Ctf},
    },
  ],
});

export default router;