import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
  {
    path: "/",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/404",
    component: () => import("../pages/404.vue"),
  },
  {
    path: "/search",
    component: () => import("../pages/Search.vue"),
  },
  {
    path: "/facts/:id",
    component: () => import("../pages/Fact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
