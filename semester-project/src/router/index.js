import { createRouter, createWebHashHistory } from 'vue-router'
import Homeview from '../views/Home-view.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Homeview
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL), 
  routes,
});

export default router
