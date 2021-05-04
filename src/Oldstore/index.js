import Vue from 'vue';
import Vuex from 'vuex';
import ApiServices from '../services/ApiServices.js';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackbar: [],
    OwnersCart: [],
    SnyderCart: [],
    CSLCart: [],

    // Mills Related State
    MillsGlobalCart: [],
    MillsCart: [],
    MillsCurrentFilter: [],
    MillsCartIsLoading: false,
    MillsAppliedFilters: [],
    MillsFilterList: [],
    MillsFilter: false,
    MillsGlobal: false,
    MillsVesselFilter: false,
    MillsDateFilter: false,
    MillsProvinceFilter: false,
    MillsReasonClosedFilter: false,
    ClearingMillsFilters: false,

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


    // Wallace Related State flags
    WallaceCart: [],
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
  },


  getters: {
    MillsCartIsLoaded (state) {
      if (state.MillsCurrentFilter.length > 0) {
        return true
      } else {
        return false
      }
    },
    RegistryCartIsLoaded (state) {
      if (state.RegistryCurrentFilter.length > 0) {
        return true
      } else {
        return false
      }
    },
    WallaceCartIsLoaded (state) {
      if (state.WallaceCurrentFilter.length > 0) {
        return true
      } else {
        return false
      }
    },


  },

  mutations: {
    // *********************MILLS MUTATIONS***********************
    LOAD_MILLS_CART: (state, payload) => {
      state.MillsCart = [...payload]
      state.MillsCartIsLoading = false
    },

    SET_MILLS_CART_IS_LOADING (state, payload) {
      state.MillsCartIsLoading = payload
    },


    CLEAR_MILLS_FILTERS: (state) => {
      state.ClearingMillsFilters = true
      state.MillsGlobal = false
      state.MillsFilter = false,
      state.MillsVesselFilter = false,
        state.MillsDateFilter = false,
        state.MillsProvinceFilter = false,
        state.MillsReasonClosedFilter = false,
        state.MillsCurrentFilter.length = 0
      state.ClearingMillsFilters = false
      // Set MillsCurrentFilter to zero length
      state.MillsCurrentFilter.length = 0
    },


    SET_MILLS_FILTERED_CART: (state, { key, value, varfilter }) => {
      switch (key) {
        case 'vesselName':
          state.MillsVesselFilter = true
          break;
        case 'dateBuilt':
          state.MillsDateFilter = true
          break;
        case 'whereBuilt':
          state.MillsProvinceFilter = true
          break;
        case 'reasonClosed':
          state.MillsReasonClosedFilter = true
          break;
        default:
      }

      let tmp = []
      if (state.MillsFilter) {
        // Store the previous filtered array

        tmp = state.MillsCurrentFilter.filter((ele) => {
          return ele[key].match(value)
        })
        state.MillsCurrentFilter.length = 0
        state.MillsCurrentFilter = [...tmp]
        state.MillsFilterList.push({ key, value, varfilter })
        state.MillsAppliedFilters.push([...tmp])
        // console.log()
      } else {
        // Will go this route only the first time through
        if (state.MillsGlobal) {
          tmp = state.MillsCurrentFilter.filter((ele) => {
            return ele[key].match(value)
          })
        } else {
          tmp = state.MillsCart.filter((ele) => {
            if (ele[key] != null) {
              return ele[key].match(value)
            }
            else {
              return false
            }
          })
        }
        // state.MillsFilterList.push({ key, value, varfilter })
        state.MillsCurrentFilter = [...tmp]
        state.MillsAppliedFilters.push([...tmp])
        state.MillsFilterList.push({ key, value, varfilter })
        state.MillsFilter = true
        state.Mills
        state.MillsCartIsLoading = false
        // console.log()
      }
    },

    LOAD_MILLS_GLOBAL_SUMMARY: (state, payload) => {
      state.MillsGlobal = true
      state.MillsCurrentFilter.length = 1
      state.MillsCurrentFilter = [...payload]
      state.MillsGlobalCart = [...payload]
    },


    REMOVE_MILLS_LAST_FILTER: (state) => {
      var filter
      if (state.MillsFilterList.length > 0) {
        filter = state.MillsFilterList.pop()

        switch (filter.key) {
          case 'vesselName':
            state.MillsVesselFilter = false;
            break;

          case 'dateBuilt':
            state.MillsDateFilter = false;
            break;

          case 'whereBuilt':
            state.MillsProvinceFilter = false;
            break;

          case 'reasonClosed':
            state.MillsReasonClosedFilter = false;
            break;

          default:
        }
        //if (state.MillsFilterList.length == 0) {
        if (state.MillsAppliedFilters.length > 1) {
          state.MillsCurrentFilter = state.MillsAppliedFilters.pop();

        } else {
          if (state.MillsGlobal) {
            state.MillsAppliedFilters.pop();
            state.MillsCurrentFilter = state.MillsGlobalCart
            state.MillsFilter = false;
          } else {
            state.MillsAppliedFilters.pop();
            state.MillsCurrentFilter = state.MillsCart;
            state.MillsFilter = false;
          }
        }
      }
    },


    // ********************REGISTRY MUTATIONS GO HERE

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
      state.RegistryCurrentFilter.length = 0
    },

    REMOVE_REGISTRY_LAST_FILTER: (state, payload) => {
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
    },


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
      state.WallaceCart = [...payload]
      state.WallaceCartIsLoading = false
    },

    SET_WALLACE_CART_IS_LOADING (state, payload) {
      state.WallaceCartIsLoading = payload
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
      state.WallaceCurrentFilter.length = 0
    },

    REMOVE_WALLACE_LAST_FILTER: (state, payload) => {
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
            // alert("Item already Selected")
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

    // *******************Mills Actions go Here*************************

    async loadMillsCart ({ commit }) {
      try {
        let response = await ApiServices.NewMillsGetAllSummaryRecords()
        commit('LOAD_MILLS_CART', response.data)
      }
      catch (err) {
        return alert(err.message)
      }
    },

    async millsGlobalSearch ({ commit }, payload) {
      try {
        payload = `'${payload}'`
        let response = await ApiServices.getMillsSummaryWithGlobal(payload)
        console.log("data")
        commit('LOAD_MILLS_GLOBAL_SUMMARY', response.data)
      }
      catch (err) {
        return alert(err)
      }
    },

    setMillsCartIsLoading ({ commit }, payload) {
      commit("SET_MILLS_CART_IS_LOADING", payload)
    },

    setMillsFilteredCart ({ commit }, payload) {

      commit('SET_MILLS_FILTERED_CART', payload)
    },


    setMillsFiltered: ({ commit }, payload) => {
      commit('SET_MILLS_FILTERED', payload)
    },


    clearMillsFilters: ({ commit }, payload) => {
      commit('CLEAR_MILLS_FILTERS', payload)
    },

    removeMillsLastFilter: ({ commit }) => {
      commit('REMOVE_MILLS_LAST_FILTER')
    },

    // *****************Registry Actions Go Here

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


    // ************Wallace Actions go here  *****************************

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

  },
});

