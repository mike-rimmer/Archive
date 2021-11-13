// This cart holds the records selected by the enduser for further investigation.

import ApiServices from '../../services/ApiServices.js';

const state =() => ({
  ResearchCart:[]
})

const getters ={

}

const mutations ={
  ADD_TO_RESEARCH_CART: (state, payload) =>{
    state.ResearchCart.push(payload)

  },

  REMOVE_ITEM_FROM_RESEARCH_CART: (state, payload)=>{
    state.ResearchCart.splice(payload,1)

  }
}

const actions = {
  // There will be six addDetail functions here from each of the SummaryDetailsModules
  async addDetailsFromWalls({commit}, id){
    try{
      let response = await ApiServices.getWallsDetailByID(`'${id}'`)
      const payload ={list:'Wallace List', data: response.data}
       commit('ADD_TO_RESEARCH_CART', payload)
      }
      catch(err){
        return alert(err.message)
      }
  },

  async addDetailsFromMills({commit}, millsRecord){
    try{
      let response = await  ApiServices.getMillsDetailByMills(`'${millsRecord}'`)
      const payload ={list:'Mills List', data: response.data}
      commit('ADD_TO_RESEARCH_CART',   payload)
    }
    catch(err){
      return alert(err)
    }
  },

  async addDetailsFromCSL({commit}, payload){
    let response = await ApiServices.getCSLDetailByID(payload)
    try{
      const data ={list:'CSL List', data: response.data}
      commit('ADD_TO_RESEARCH_CART', data)
    }
    catch (err) {
      return alert(err.message)
    }
  },

  async addDetailsFromRegistry({commit}, id){
    try{
      let response = await ApiServices.getRegistryDetailedRecordById(`'${id}'`)
      const payload ={list:'Canadian Registry', data: response.data}
      commit('ADD_TO_RESEARCH_CART', payload)
    }
    catch(err){
      return alert(err.message)
    }
  },

  async addDetailsFromSnider({commit}, payload){
    try{
      let response = await ApiServices.getSniderDetailsById(payload)
      const data ={list:'Snyders Index', data: response.data}
      commit('ADD_TO_RESEARCH_CART', data)
    }
    catch(err){
      return alert(err)
  }
  },

  async addDetailsFromOwners({commit}, id){
    try{
      let response = await  ApiServices.getOwnersDetailByID(`'${id}'`)
      const payload ={list:'From the Owners List', data: response.data}
      commit('ADD_TO_RESEARCH_CART', payload)
    }
    catch(err){
      return alert(err.message)
    }
  },

  removeItemFromResearchCart: ({ commit }, payload) => {
    commit('REMOVE_ITEM_FROM_RESEARCH_CART', payload)
  },


}

export default{
  namespaced:true,
  state,
  getters,
  actions,
  mutations
}
