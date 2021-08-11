import ApiServices from '../../services/ApiServices.js';

const state = () =>({
  // Mills Related State
   MillsGlobalCart: [],
   MillsCart: [],
   MillsCurrentFilter: [],
   MillsCartIsLoading: false,
   MillsAppliedFilters: [],
   MillsFilterList: [],
   MillsCurrentDetail:{},
   MillsGlobal: false,
   MillsOwnerFilter:false,
   MillsFilter: false,
   MillsVesselFilter: false,
   MillsDateFilter: false,
   MillsProvinceFilter: false,
   MillsReasonClosedFilter: false,
   ClearingMillsFilters: false,
})

const getters = {
  MillsCartIsLoaded: (state) => {
    if (state.MillsCurrentFilter.length > 0 || state.MillsCart.length >=1) {
      return true
    } else {
      return false
    }
  }
}

const mutations = {
      // *********************MILLS MUTATIONS***********************
      LOAD_MILLS_CART: (state, payload) => {
        state.MillsCart = [...payload]
        state.MillsCartIsLoading = false
        state.MillsCartIsLoaded = true
      },

      SET_MILLS_CART_IS_LOADING (state, payload) {
        state.MillsCartIsLoading = payload
      },

      LOAD_MILLS_DETAIL(state, payload){
        state.MillsCurrentDetail= payload
      },


      CLEAR_MILLS_FILTERS: (state) => {
        state.ClearingMillsFilters = true
        state.MillsGlobal = false
        state.MillsFilter = false,
        state.MillsOwnerFilter = false,
        state.MillsVesselFilter = false,
        state.MillsDateFilter = false,
        state.MillsProvinceFilter = false,
        state.MillsReasonClosedFilter = false,
        state.MillsCurrentFilter.length = 0
        state.ClearingMillsFilters = false
        // Set MillsCurrentFilter to zero length
        state.MillsCurrentFilter.length = 0
        state.MillsAppliedFilters.length = 0
        state.MillsFilterList.length = 0
      },


      SET_MILLS_FILTERED_CART: (state, { key, value, varfilter }) => {
        switch (key) {
          case 'owners':
            state.MillsOwnerFilter = true
            break;
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
            case 'owners':
              state.MillsOwnerFilter = false
              break;
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
            state.MillsAppliedFilters.pop()
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

  }

  const actions = {

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

    async getMillsDetailFromServer({commit},millsRecord){
      try{
        let response = await  ApiServices.getMillsDetailByMills(`'${millsRecord}'`)
        commit('LOAD_MILLS_DETAIL',   response.data)
      }
      catch(err){
        return alert(err)
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
    }
  }

  export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
  }
