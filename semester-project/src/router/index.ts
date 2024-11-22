import { createRouter, createWebHistory } from 'vue-router';

// Import your pages
import Home from '/src/views/Home.vue';
import About from '/src/components/Portfolio.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;