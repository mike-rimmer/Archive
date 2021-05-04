import Vue from 'vue';
import Vuex from 'vuex';
import TmpStore from './Modules/TmpStore'
import CRL from './Modules/CRL'
import Famillies from './Modules/Famillies'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TmpStore,
    CRL,
    Famillies
  }
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // },
});
