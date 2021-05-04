 /* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
// import TestFilter from '../views/TestFilter.vue';
// import Snyder from '../views/Snyder.vue'
// import TestPage from '../views/TestPage.vue'
// import Store from '../views/Store.vue';
// import Cart from '../views/Cart.vue';
// import Construct from '../views/UnderConstruction.vue'
// import Home from '../views/Home.vue';
// import CSL from '../views/CSL.vue';
// import Menu from '../views/Menu.vue'
// import Registry from '../views/Registry.vue';
// import Owners from '../views/Owners.vue';
// import Wallace from '../views/Wallace.vue'
// import Mills from '../views/Mills.vue';
Vue.use(VueRouter)

function lazyLoad (view){
  // return () => import(/*webpackPrefetch : true*/`../views/${view}.vue`)
  // The above line is not required as apparantly all lazy load components are prefetched ... who knew???
  return () => import(`../views/${view}.vue`)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
   {
    path: '/',
    name: 'ShipListLandingPage',
    // component:Menu
    component : lazyLoad('ShipListLandingPage')
  },

  {
    path: '/collections',
    name: 'Collections',
    // component:Menu
    component : lazyLoad('Collections')
  },

  {
    path: '/collections/artifacts',
    name: 'Artifacts',
    // component:Menu
    component : lazyLoad('Artifacts')
  },
  {
    path: '/collections/Archives',
    name: 'Archives',
    // component:Menu
    component : lazyLoad('Archives')
  },
  {
    path: '/collections/photos',
    name: 'Photos',
    // component:Menu
    component : lazyLoad('Photos')
  },
  {
    path: '/about',
    name: 'About',
    // component:Menu
    component : lazyLoad('About')
  },
  {
    path: '/library',
    name: 'Library',
    // component:Menu
    component : lazyLoad('Library')
  },

  // {
  //   path: '/shipLists',
  //   name: 'ShipLists',
  //   // component:Menu
  //   component : lazyLoad('ShipLists')
  // },

  {
    path: '/shiplists/wallace',
    name:'Wallace',
    component: lazyLoad('Wallace')
  },

  {
    path: '/shiplists/snider',
    name:'Snider',
    component: lazyLoad('Snider')
  },

  {
    path: '/shiplists/crl',
    name: 'Registry',
    component: lazyLoad('Registry')
  },

  {
    path: '/shiplists/sol',
    name: 'Owners',
    component: lazyLoad('Owners')
  },

  {
    path: '/shiplists/mills',
    name: 'Mills',
    component: lazyLoad('Mills')
  },

  {
    path:'/shiplists/csl',
    name:'CSL',
    component:lazyLoad('CSL')
  },

  {
    path: '/shiplists/detail',
    name: 'CSLDetail',
    component:lazyLoad('CSLDetails')
  },

  {
    path: '/shiplists/images',
    name: 'WallaceImages',
    component:lazyLoad('WallaceImages')
  }


]


});

export default router;
