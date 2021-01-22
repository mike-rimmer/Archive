import Vue from 'vue';
import VueRouter from 'vue-router';
import Mills from '../views/Mills.vue';
import CRL from '../views/CRL.vue';
import SOL from '../views/SOL.vue';
import CSL from '../views/CSL.vue';
import Wallace from '../views/Wallace.vue';
import Forged from '../views/Forged.vue';
import Snyder from '../views/Snyder.vue'
import TestPage from '../views/TestPage.vue'
import Growth from '../views/Growth.vue'
import Home from '../views/Home.vue';
import Store from '../views/Store.vue';
import Cart from '../views/Cart.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Mills',
    component: Mills,
  },
  {
    path: '/CRL',
    name: 'CRL',
    component: CRL,
  },
  {
    path: '/CSL',
    name: 'CSL',
    component: CSL,
  },
  {
    path: '/SOL',
    name: 'SOL',
    component: SOL,
  },
  {
    path: '/forged',
    name: 'Forged',
    component: Forged,
  },
  {
    path: '/wallace',
    name: 'Wallace',
    component: Wallace,
  },
  {
    path: '/snyder',
    name: 'Snyder',
    component: Snyder,
  },
  {
    path: '/test',
    name: 'TestPage',
    component: TestPage,
  },
  {
    path: '/growth',
    name: 'growth',
    component: Growth,
  },

  // { path: '/', name: 'home', component: Home },
  // { path: '/store', name: 'store', component: Store },
  // { path: '/cart', name: 'cart', component: Cart },
  // { path: '/checkout', name: 'checkout', component: CheckOut },
  // { path: '/thankyou', name: 'thankyou', component: ThankYou },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
