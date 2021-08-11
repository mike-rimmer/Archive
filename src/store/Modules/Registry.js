import ApiServices from '../../services/ApiServices.js';

const state = () =>({
  // Registry Related State flags
  RegistryCart: [],
  RegistryCurrentFilter: [],
  RegistryCartIsLoading: false,
  RegistryAppliedFilters: [],
  RegistryFilterList: [],
  RegistryCurrentDetail : {},
  RegistryFilter: false,
  RegNumberFilter: false,
  RegVesselFilter: false,
  RegRegistrationFilter: false,
  RegRegistrationDateFilter: false,
  RegBuilderFilter: false,
  RegRigFilter: false,
  ClearingRegistryFilters: false,
  RegistryGlobal: false,
})

const getters = {
  RegistryCartIsLoaded (state) {
    if (state.RegistryCurrentFilter.length > 0) {
      return true
    } else {
      return false
    }
  },
}

const mutations = {
  LOAD_REGISTRY_CART: (state, payload) => {
    state.RegistryCart = [...payload]
    state.RegistryCartIsLoading = false
  },

  SET_REGISTRY_CART_IS_LOADING (state, payload) {
    state.RegistryCartIsLoading = payload
  },

  LOAD_REGISTRY_GLOBAL_SUMMARY (state, payload) {
    state.RegistryGlobal = true
    state.RegistryCurrentFilter.length = 1
    state.RegistryCurrentFilter = [...payload]
    state.RegistryGlobalCart = [...payload]
  },

  LOAD_REGISTRY_DETAILS(state, payload){
    state.RegistryCurrentDetail = payload
  },


  CLEAR_REGISTRY_FILTERS: (state) => {
    state.ClearingRegistryFilters = true
    state.RegistryGlobal = false
    state.RegistryFilter = false,
    state.RegNumberFilter = false,
    state.RegVesselFilter = false,
    state.RegRegistrationFilter = false,
    state.RegRegistrationDateFilter = false,
    state.RegBuilderFilter = false,
    state.RegRigFilter = false,
    state.ClearingRegistryFilters = false
    // Set RegistryCurrentFilter to zero length
    state.RegistryAppliedFilters.length = 0
    state.RegistryCurrentFilter.length = 0
    state.RegistryFilterList.length = 0
  },

  REMOVE_REGISTRY_LAST_FILTER: (state ) => {
    var filter
    if (state.RegistryFilterList.length > 0) {
      filter = state.RegistryFilterList.pop()

      switch (filter.key) {
        case 'officialnum':
          state.RegNumberFilter = false;
          break;

        case 'vessel':
          state.RegVesselFilter = false;
          break;

        case 'reg':
          state.RegRegistrationFilter = false;
          break;

        case 'regyear':
          state.RegRegistrationDateFilter = false;
          break;

        case 'builder':
          state.RegBuilderFilter = false;
          break;

        case 'rig':
          state.RegRigFilter = false;
          break;

        default:
      }
      //if (state.MillsFilterList.length == 0) {
      if (state.RegistryAppliedFilters.length > 1) {
        state.RegistryAppliedFilters.pop()
        state.RegistryCurrentFilter = state.RegistryAppliedFilters.pop();

      } else {
        if (state.RegistryGlobal) {
          state.RegistryAppliedFilters.pop();
          state.RegistryCurrentFilter = state.RegistryGlobalCart
          state.RegistryFilter = false;
        } else {
          state.RegistryAppliedFilters.pop();
          state.RegistryCurrentFilter = state.RegistryCart;
          state.RegistryFilter = false;
        }
      }
    }
  },


  SET_REGISTRY_FILTERED_CART: (state, { key, value, varfilter }) => {
    switch (key) {
      case 'officialnum':
        state.RegNumberFilter = true
        break;
      case 'vessel':
        state.RegVesselFilter = true
        break;
      case 'reg':
        state.RegRegistrationFilter = true
        break;
      case 'regyear':
        state.RegRegistrationDateFilter = true
        break;
      case 'builder':
        state.RegBuilderFilter = true
        break;
      case 'rig':
        state.RegRigFilter = true
        break;
      default:
    }

    let tmp = []
    if (state.RegistryFilter) {
      // Store the previous filtered array

      tmp = state.RegistryCurrentFilter.filter((ele) => {
        return ele[key].match(value)
      })
      state.RegistryCurrentFilter.length = 0
      state.RegistryCurrentFilter = [...tmp]
      state.RegistryFilterList.push({ key, value, varfilter })
      state.RegistryAppliedFilters.push([...tmp])
      // console.log()
    } else {
      // Will go this route only the first time through
      if (state.RegistryGlobal) {
        tmp = state.RegistryCurrentFilter.filter((ele) => {
          return ele[key].match(value)
        })
      } else {
        tmp = state.RegistryCart.filter((ele) => {
          if (ele[key] != null) {
            return ele[key].match(value)
          }
          else {
            return false
          }
        })
      }
      // state.MillsFilterList.push({ key, value, varfilter })
      state.RegistryCurrentFilter = [...tmp]
      state.RegistryAppliedFilters.push([...tmp])
      state.RegistryFilterList.push({ key, value, varfilter })
      state.RegistryFilter = true
      // state.Mills
      state.RegistryCartIsLoading = false
      // console.log()
    }
  }
}

const actions ={
  async loadRegistryCart ({ commit }) {
    commit('SET_REGISTRY_CART_IS_LOADING', true)
    try {
      let response = await ApiServices.getRegistrySummaryList()
      commit('LOAD_REGISTRY_CART', response.data)
      commit('SET_REGISTRY_CART_IS_LOADING', false)
    }
    catch (err) {
      return alert(err.message)
    }
  },

  async getRegistryDetailedRecordById({commit}, id){
  try{
    let response = await ApiServices.getRegistryDetailedRecordById(`'${id}'`)
    commit('LOAD_REGISTRY_DETAILS', response.data)
  }
  catch(err){
    return alert(err.message)
  }
  },

  async registryGlobalSearch ({ commit }, payload) {
    try {
      payload = `'${payload}'`
      let response = await ApiServices.getRegistrySummaryByGlobalSearch(payload)
      console.log("data")
      commit('LOAD_REGISTRY_GLOBAL_SUMMARY', response.data)
    }
    catch (err) {
      return alert(err)
    }
  },

  setRegistryFilteredCart ({ commit }, payload) {
    commit('SET_REGISTRY_FILTERED_CART', payload)
  },

  setRegistryCartIsLoading ({ commit }, payload) {
    commit("SET_REGISTRY_CART_IS_LOADING", payload)
  },

  clearRegistryFilters ({ commit }, payload) {
    commit('CLEAR_REGISTRY_FILTERS', payload)
  },

  removeRegistryLastFilter ({ commit }) {
    commit('REMOVE_REGISTRY_LAST_FILTER')
  },
}

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}
