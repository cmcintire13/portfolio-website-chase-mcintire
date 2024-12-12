import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home-page.vue";
import Portfolio from "@/components/Portfolio-page.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/portfolio", name: "Portfolio", component: Portfolio },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;