import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Growth from '../views/Growth.vue';
import Forged from '../views/Forged.vue';
import TestPage from '../views/TestPage.vue'
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/growth',
    name: 'Growth',
    component: Growth,
  },
  {
    path: '/forged',
    name: 'Forged',
    component: Forged,
  },
  {
    path: '/test',
    name: 'Test',
    component: TestPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
