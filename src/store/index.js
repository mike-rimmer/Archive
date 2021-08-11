import Vue from 'vue';
import Vuex from 'vuex';
import Mills from './Modules/Mills'
import Wallace from'./Modules/Wallace'
import Registry from './Modules/Registry'
import Owners from './Modules/Owners'
import CSL from './Modules/CSL'
import Snider from './Modules/Snider'
import Cart from './Modules/Cart'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    Mills,
    Wallace,
    Registry,
    Owners,
    CSL,
    Snider,
    Cart
    }
})
