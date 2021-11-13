
import ApiServices from '../../services/ApiServices.js';

const state =() => ({
  availableArtifacts:[],
  artifactSummary:[],
  availableArtifactsLoaded: false,
  availableArtifactSummary: false,
})

const getters ={

}

const mutations ={
  ADD_TO_AVAILABLE_ARTIFACTS: (state, payload) =>{
    state.availableArtifacts=payload.data
    state.availableArtifactsLoaded = true

  },

  ADD_TO_ARTIFACTS_SUMMARY: (state, payload) =>{
    state.artifactSummary=payload.data
    state.availableArtifactSummary = true

  },


}


const actions = {

  // getArtifactData(){
  //   getAvailableArtifacts()
  //   getArtifactSummary()
  // },


  async getAvailableArtifacts({commit}){
    try{
      let response = await ApiServices.getAvailableArtifacts()
      const payload ={data: response.data}
       commit('ADD_TO_AVAILABLE_ARTIFACTS', payload)
      }
      catch(err){
        return alert(err.message)
      }
  },

  async getArtifactSummary({commit}){
    try{
      let response = await ApiServices.getArtifactSummary()
      const payload ={data: response.data}
       commit('ADD_TO_ARTIFACTS_SUMMARY', payload)
      }
      catch(err){
        return alert(err.message)
      }
  },

}

export default{
  namespaced:true,
  state,
  getters,
  actions,
  mutations
}
