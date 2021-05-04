import ApiServices from '../../services/ApiServices.js';

const state = () =>({
  // Registry Related State flags
  RegistryCart: [],
  RegistryCurrentFilter: [],
  RegistryCartIsLoading: false,
  RegistryAppliedFilters: [],
  RegistryFilterList: [],
  RegistryFilter: false,
  regNumberFilter: false,
  regVesselFilter: false,
  regRegistrationFilter: false,
  regRegistrationDateFilter: false,
  regBuilderFilter: false,
  regRigFilter: false,
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


  CLEAR_REGISTRY_FILTERS: (state) => {
    state.ClearingRegistryFilters = true
    state.RegistryGlobal = false
    state.RegistryFilter = false,
      state.regNumberFilter = false,
      state.regVesselFilter = false,
      state.regRegistrationFilter = false,
      state.regRegistrationDateFilter = false,
      state.regBuilderFilter = false,
      state.regRigFilter = false,
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
          state.regNumberFilter = false;
          break;

        case 'vessel':
          state.regVesselFilter = false;
          break;

        case 'reg':
          state.regRegistrationFilter = false;
          break;

        case 'regdate':
          state.regRegistrationDateFilter = false;
          break;

        case 'builder':
          state.regBuilderFilter = false;
          break;

        case 'rig':
          state.regRigFilter = false;
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
        state.regNumberFilter = true
        break;
      case 'vessel':
        state.regVesselFilter = true
        break;
      case 'reg':
        state.regRegistrationFilter = true
        break;
      case 'regyear':
        state.regRegistrationDateFilter = true
        break;
      case 'builder':
        state.regBuilderFilter = true
        break;
      case 'rig':
        state.regRigFilter = true
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
