import ApiServices from '../../services/ApiServices.js';
const state = () =>({
      // Wallace Related State flags
      WallaceCart: [],
      WallaceDetail:{},
      WallaceLandScape:[],
      WallacePortrait:[],
      LandScapeLoaded:false,
      PortraitLoaded:false,
      WallaceAppliedFilters: [],
      WallaceFilterList: [],
      WallaceCurrentFilter: [],
      WallaceGlobal: false,
      WallaceCartIsLoading: false,
      WallaceFilter: false,
      ClearingWallaceFilters: false,
      WallaceShipFilter: false,
      WallacePlaceRegistrationFilter: false,
      WallaceRigFilter: false,
      WallaceProvBuiltFilter: false,
      WallaceBuilderFilter: false,
      WallaceOwnersFilter: false,
})

const getters = {
  WallaceCartIsLoaded (state) {
    if (state.WallaceCurrentFilter.length > 0) {
      return true
    } else {
      return false
    }
  },

  WallacePopUpCardDetail(state){
    return state.WallaceDetail
  }
}

const mutations = {
    //****************/ Wallace mutations go here
    SET_WALLACE_FILTERED_CART(state, { key, value, varfilter }){

      switch (key) {
        case 'vname':
          state.WallaceShipFilter = true
          break;
        case 'registration':
          state.WallacePlaceRegistrationFilter = true
          break;
        case 'rig':
          state.WallaceRigFilter = true
          break;
        case 'buildprov':
          state.WallaceProvBuiltFilter = true
          break;
        case 'bildnme':
          state.WallaceBuilderFilter = true
          break;
        case 'own':
          state.WallaceOwnersFilter = true
          break;
        default:
      }

      let tmp = []
      if (state.WallaceFilter) {
        // Store the previous filtered array

        tmp = state.WallaceCurrentFilter.filter((ele) => {
          return ele[key].match(value)
        })
        state.WallaceCurrentFilter.length = 0
        state.WallaceCurrentFilter = [...tmp]
        state.WallaceFilterList.push({ key, value, varfilter })
        state.WallaceAppliedFilters.push([...tmp])
        // console.log()
      } else {
        // Will go this route only the first time through
        if (state.WallaceGlobal) {
          tmp = state.WallaceCurrentFilter.filter((ele) => {
            return ele[key].match(value)
          })
        } else {
          tmp = state.WallaceCart.filter((ele) => {
            if (ele[key] != null) {
              return ele[key].match(value)
            }
            else {
              return false
            }
          })
        }
        // state.MillsFilterList.push({ key, value, varfilter })
        state.WallaceCurrentFilter = [...tmp]
        state.WallaceAppliedFilters.push([...tmp])
        state.WallaceFilterList.push({ key, value, varfilter })
        state.WallaceFilter = true
        // state.Mills
        state.WallaceCartIsLoading = false
        // console.log()
      }
  },

  LOAD_WALLACE_CART: (state, payload) => {
    // const tmp = payload.map(
    //   ele => {
    //     if(ele.url===null){
    //       return{
    //       id:ele.id,
    //       vname:`${ele.vname}`,
    //       isimage:'',
    //       registration:ele.registration,
    //       rig:ele.rig,
    //       buildloc:ele.buildloc,
    //       bildnme:ele.bildnme,
    //       own:ele.own,
    //       url:ele.url
    //     }
    //     }else{
    //       return{
    //         id:ele.id,
    //         vname:`${ele.vname}`,
    //         isimage:'*',
    //         registration:ele.registration,
    //         rig:ele.rig,
    //         buildloc:ele.buildloc,
    //         bildnme:ele.bildnme,
    //         own:ele.own,
    //         url:ele.url
    //       }
    //     }
    //   }
    // )

    state.WallaceCart = [...payload]
    state.WallaceCartIsLoading = false
  },

  LOAD_WALLACE_PORTRAIT:( state, payload)=>{
    state.WallacePortrait.push(payload)
    state.PortraitLoaded = true
  },

  LOAD_WALLACE_LANDSCAPE:( state, payload)=>{
    state.WallaceLandScape.push(payload)
    state.LandScapeLoaded = true
  },


  SET_WALLACE_CART_IS_LOADING (state, payload) {
    state.WallaceCartIsLoading = payload
  },

  LOAD_WALLACE_DETAILS(state, payload){
     state.WallaceDetail=payload
  },

  LOAD_WALLACE_GLOBAL_SUMMARY (state, payload) {
    state.WallaceGlobal = true
    state.WallaceCurrentFilter.length = 1
    state.WallaceCurrentFilter = [...payload]
    state.WallaceGlobalCart = [...payload]
  },


  CLEAR_WALLACE_FILTERS: (state) => {
    state.ClearingWallaceFilters = true
    state.WallaceGlobal = false
    state.WallaceFilter = false,
    state.WallaceShipFilter= false,
    state.WallacePlaceRegistrationFilter= false,
    state.WallaceRigFilter= false,
    state.WallaceProvBuiltFilter= false,
    state.WallaceBuilderFilter= false,
    state.WallaceOwnersFilter= false,
    state.ClearingWallaceFilters = false
    // Set WallaceCurrentFilter to zero length
    state.WallaceAppliedFilters.length = 0
    state.WallaceCurrentFilter.length = 0
    state.WallaceFilterList.length = 0
  },

  REMOVE_DETAILED_RECORD(state){
    state.WallaceDetail = {}
  },

  REMOVE_WALLACE_LAST_FILTER: (state) => {
    var filter
    if (state.WallaceFilterList.length > 0) {
      filter = state.WallaceFilterList.pop()

      switch (filter.key) {
        case 'vname':
          state.WallaceShipFilter = false;
          break;

        case 'registration':
          state.WallacePlaceRegistrationFilter = false;
          break;

        case 'rig':
          state.WallaceRigFilter = false;
          break;

        case 'buildprov':
          state.WallaceProvBuiltFilter = false;
          break;

        case 'bildnme':
          state.WallaceBuilderFilter = false;
          break;

        case 'own':
          state.WallaceOwnersFilter = false;
          break;

        default:
      }
      //if (state.MillsFilterList.length == 0) {
      if (state.WallaceAppliedFilters.length > 1) {
        state.WallaceAppliedFilters.pop()
        state.WallaceCurrentFilter = state.WallaceAppliedFilters.pop();

      } else {
        if (state.WallaceGlobal) {
          state.WallaceAppliedFilters.pop();
          state.WallaceCurrentFilter = state.WallaceGlobalCart
          state.WallaceFilter = false;
        } else {
          state.WallaceAppliedFilters.pop();
          state.WallaceCurrentFilter = state.WallaceCart;
          state.WallaceFilter = false;
        }
      }
    }
  },


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
}

const actions = {
  async loadWallaceCart ({ commit }) {
    commit('SET_WALLACE_CART_IS_LOADING', true)
    try {
      let response = await ApiServices. getWallsSummaryInitialLoad ()
      commit('LOAD_WALLACE_CART', response.data)
      commit('SET_WALLACE_CART_IS_LOADING', false)
    }
    catch (err) {
      return alert(err.message)
    }
  },

  async loadWallaceImagesPortrait ({ commit }) {
    // commit('SET_WALLACE_CART_IS_LOADING', true)
    try {
      let response = await ApiServices.getWallsImagesPortrait()
      commit('LOAD_WALLACE_PORTRAIT', response.data)
      // commit('SET_WALLACE_CART_IS_LOADING', false)
    }
    catch (err) {
      return alert(err.message)
    }
  },

  async loadWallaceImagesLandScape ({ commit }) {
    commit('SET_WALLACE_CART_IS_LOADING', true)
    try {
      let response = await ApiServices.getWallsImagesLandScape()
      commit('LOAD_WALLACE_LANDSCAPE', response.data)
      // commit('SET_WALLACE_CART_IS_LOADING', false)
    }
    catch (err) {
      return alert(err.message)
    }
  },

  async getWallsDetailFromServer({commit}, id){
    try{
      let response = await ApiServices.getWallsDetailByID(`'${id}'`)
       commit('LOAD_WALLACE_DETAILS', response.data)
      }
      catch(err){
        return alert(err.message)
      }

    },

  setWallaceCartIsLoading({commit}, payload){
    commit('SET_WALLACE_CART_IS_LOADING', payload)
  },

  setWallaceFilteredCart({commit}, payload){
    commit('SET_WALLACE_FILTERED_CART', payload)
  },

  removeWallaceLastFilter({commit}){
      commit('REMOVE_WALLACE_LAST_FILTER')
  },

  clearWallaceFilters({commit}, payload){
    commit('CLEAR_WALLACE_FILTERS', payload)
  },

  addItemToWallaceCart: ({ commit }, payload) => {
    commit("ADD_ITEM_TO_WALLACE_CART", payload)
  },

  removeItemFromWallaceCart: ({ commit }, payload) => {
    commit('REMOVE_ITEM_FROM_WALLACE_CART', payload)
  },

  removeDetailedRecord({commit}){
    commit('REMOVE_DETAILED_RECORD')
  }

}

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}
