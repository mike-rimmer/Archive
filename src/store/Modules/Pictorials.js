
// https://markus.oberlehner.net/blog/should-i-store-this-data-in-vuex/
//consider using swrv found at https://github.com/Kong/swrv#readme
// Cache Shell and Service Workers https://vueschool.io/articles/vuejs-tutorials/vue-js-performance-mastering-cache/
import ApiServices from "@/services/ApiServices";

const state =() =>({
  availablePictorials:[],
  availablePictorialsLoaded:false,
})

const getters ={

}

const mutations ={
  ADD_PICTORIAL_WITH_URL: (state, payload) =>{
    state.availablePictorials=payload.data
    state.availablePictorialsLoaded = true

  }

}

const actions = {
  async getAvailablePictorials({commit}){
    try{
      let response = await ApiServices.getAvailablePictorials()
      const payload ={data: response.data}
       commit('ADD_PICTORIAL_WITH_URL', payload)
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
