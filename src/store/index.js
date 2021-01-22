import Vue from 'vue';
import Vuex from 'vuex';
import TmpStore from './Modules/TmpStore'
import CRL from './Modules/CRL'
import Famillies from './Modules/Famillies'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackbar: [],
    MillsCart: [],
    WallaceCart: [],
    SOLCart: [],
    SnyderCart: [],
    CSLCart: [],
    CRLCart: [],
  },


  getters: {

  },

  mutations: {
    ADD_ITEM_TO_MILLS_CART: (state, payload) => {
      // Determine if array exists
      var { RecordId } = payload
      if (state.MillsCart.length > 0) {
        // Check if item already exits in array
        for (let i = 0; i < state.MillsCart.length; i++) {
          if (state.MillsCart[i].RecordId === RecordId) {
            alert("Item already Selected")
            return
          }
        }
      } else {
        state.MillsCart.push(payload)
        return
      }
      state.MillsCart.push(payload)
      return
    },

    REMOVE_ITEM_FROM_MILLS_CART: (state, payload) => {
      var { RecordId } = payload
      state.MillsCart = state.MillsCart.filter(ele => {
        return ele.RecordId != RecordId
      })
    },


    //****************/ Wallace mutations go here
    ADD_ITEM_TO_WALLACE_CART: (state, payload) => {
      // Determine if array exists
      var { RecordId } = payload
      if (state.WallaceCart.length > 0) {
        // Check if item already exits in array
        for (let i = 0; i < state.WallaceCart.length; i++) {
          if (state.WallaceCart[i].RecordId === RecordId) {
            alert("Item already Selected")
            return
          }
        }
      } else {
        state.WallaceCart.push(payload)
        return
      }
      state.WallaceCart.push(payload)
      return
    },


    REMOVE_ITEM_FROM_WALLACE_CART: (state, payload) => {
      var { RecordId } = payload
      state.WallaceCart = state.WallaceCart.filter(ele => {
        return ele.RecordId != RecordId
      })
    },
  },

  actions: {
    upDateSnackBar: () => {

    },

    addItemToMillsCart: ({ commit }, payload) => {
      commit("ADD_ITEM_TO_MILLS_CART", payload)
    },

    removeItemFromMillsCart: ({ commit }, payload) => {
      commit('REMOVE_ITEM_FROM_MILLS_CART', payload)
    },

    // ************Wallace Actions go here
    addItemToWallaceCart: ({ commit }, payload) => {
      commit("ADD_ITEM_TO_WALLACE_CART", payload)
    },

    removeItemFromWallaceCart: ({ commit }, payload) => {
      commit('REMOVE_ITEM_FROM_WALLACE_CART', payload)
    }

  }



})
