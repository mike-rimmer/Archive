import ApiServices from '../../services/ApiServices.js';

const state = () =>({
  // Snider Related State
   SniderGlobalCart: [],
   SniderCart: [],
   SniderDetailCart:[],
   SniderCurrentDetail:{},
   SniderShowDetail:false,
   SniderDetailCartIsLoaded: false,
   SniderCurrentFilter: [],
   SniderCartIsLoading: false,
   SniderAppliedFilters: [],
   SniderFilterList: [],
   SniderFilter: false,
   SniderGlobal: false,
   SniderReasonClosedFilter: false,
   ClearingSniderFilters: false,
   SniderArticleFilter: false,
   SniderShipFilter: false,
   SniderShipTypeFilter: false,
   SniderPlaceBuiltFilter: false,
   SniderPeopleFilter: false
})

const getters = {
  SniderCartIsLoaded: (state) => {
    if (state.SniderCurrentFilter.length > 0 || state.SniderCart.length >=1) {
      return true
    } else {
      return false
    }
  }
}

const mutations = {
      // *********************MILLS MUTATIONS***********************
      LOAD_SNIDERS_CART: (state, payload) => {
        state.SniderCart = [...payload]
        state.SniderCartIsLoading = false
        state.SniderCartIsLoaded = true
      },

      LOAD_SNIDERS_DETAIL_CART: (state, payload) => {
        state.SniderCurrentDetail = payload
        state.SniderDetailCart.push(state.SniderCurrentDetail)
        state.SniderDetailCartIsLoaded = true
        state.SniderShowDetail = true
      },

      SET_SNIDERS_CART_IS_LOADING (state, payload) {
        state.SniderCartIsLoading = payload
      },


      CLEAR_SNIDERS_FILTERS: (state) => {
        state.ClearingSniderFilters = true
        state.SniderGlobal = false
        state.SniderFilter = false,
        state.SniderArticleFilter = false,
        state.SniderShipFilter = false,
        state.SniderShipTypeFilter = false,
        state.SniderPlaceBuiltFilter = false,
        state.SniderPeopleFilter = false
        state.SniderCurrentFilter.length = 0
        state.ClearingSniderFilters = false
        // Set SniderCurrentFilter to zero length
        state.SniderCurrentFilter.length = 0
        state.SniderAppliedFilters.length = 0
        state.SniderFilterList.length = 0
      },


      SET_SNIDERS_FILTERED_CART: (state, { key, value, varfilter }) => {
        switch (key) {
          case 'articletitle':
            state.SniderArticleFilter = true
            break;
          case 'shipname':
            state.SniderShipFilter = true
            break;
          case 'shiptype':
            state.SniderShipTypeFilter = true
            break;
          case 'places':
            state.SniderPlaceBuiltFilter = true
            break;
          case 'people':
            state.SniderPeopleFilter = true
            break;
          default:
        }

        let tmp = []
        if (state.SniderFilter) {
          // Store the previous filtered array

          tmp = state.SniderCurrentFilter.filter((ele) => {
            return ele[key].match(value)
          })
          state.SniderCurrentFilter.length = 0
          state.SniderCurrentFilter = [...tmp]
          state.SniderFilterList.push({ key, value, varfilter })
          state.SniderAppliedFilters.push([...tmp])
          // console.log()
        } else {
          // Will go this route only the first time through
          if (state.SniderGlobal) {
            tmp = state.SniderCurrentFilter.filter((ele) => {
              return ele[key].match(value)
            })
          } else {
            tmp = state.SniderCart.filter((ele) => {
              if (ele[key] != null) {
                return ele[key].match(value)
              }
              else {
                return false
              }
            })
          }
          // state.SniderFilterList.push({ key, value, varfilter })
          state.SniderCurrentFilter = [...tmp]
          state.SniderAppliedFilters.push([...tmp])
          state.SniderFilterList.push({ key, value, varfilter })
          state.SniderFilter = true
          state.Snider
          state.SniderCartIsLoading = false
          // console.log()
        }
      },



      LOAD_SNIDERS_GLOBAL_SUMMARY: (state, payload) => {
        state.SniderGlobal = true
        state.SniderCurrentFilter.length = 1
        state.SniderCurrentFilter = [...payload]
        state.SniderGlobalCart = [...payload]
      },


      REMOVE_SNIDERS_LAST_FILTER: (state) => {
        var filter
        if (state.SniderFilterList.length > 0) {
          filter = state.SniderFilterList.pop()

          switch (filter.key) {
            case 'articletitle':
              state.SniderArticleFilter = false;
              break;

            case 'shipname':
              state.SniderShipFilter = false;
              break;

            case 'shiptype':
              state.SniderShipTypeFilter = false;
              break;

            case 'places':
              state.SniderPlaceBuiltFilter = false;
              break;

            case 'people':
              state.SniderPeopleFilter = false;
              break;

            default:
          }
          //if (state.SniderFilterList.length == 0) {
          if (state.SniderAppliedFilters.length > 1) {
            state.SniderAppliedFilters.pop()
            state.SniderCurrentFilter = state.SniderAppliedFilters.pop();
          } else {
            if (state.SniderGlobal) {
              state.SniderAppliedFilters.pop();
              state.SniderCurrentFilter = state.SniderGlobalCart
              state.SniderFilter = false;
            } else {
              state.SniderAppliedFilters.pop();
              state.SniderCurrentFilter = state.SniderCart;
              state.SniderFilter = false;
            }
          }
        }
      },

  }

  const actions = {

    // *******************Snider Actions go Here*************************

    async loadSniderCart ({ commit }) {
      try {
        let response = await ApiServices.getSniderSummaryList()
        commit('LOAD_SNIDERS_CART', response.data)
      }
      catch (err) {
        return alert(err.message)
      }
    },

    async loadSniderDetail({commit}, payload){
      try{
        let response = await ApiServices.getSniderDetailsById(payload)
        commit('LOAD_SNIDERS_DETAIL_CART', response.data)
      }
      catch(err){
        return alert(err)
    }
  },

    async sniderGlobalSearch ({ commit }, payload) {
      try {
        payload = `'${payload}'`
        let response = await ApiServices.getSniderSummaryWithGlobal(payload)
        console.log("data")
        commit('LOAD_SNIDERS_GLOBAL_SUMMARY', response.data)
      }
      catch (err) {
        return alert(err)
      }
    },


    setSniderCartIsLoading ({ commit }, payload) {
      commit("SET_SNIDERS_CART_IS_LOADING", payload)
    },

    setSniderFilteredCart ({ commit }, payload) {

      commit('SET_SNIDERS_FILTERED_CART', payload)
    },


    setSniderFiltered: ({ commit }, payload) => {
      commit('SET_SNIDERS_FILTERED', payload)
    },


    clearSniderFilters: ({ commit }, payload) => {
      commit('CLEAR_SNIDERS_FILTERS', payload)
    },

    removeSniderLastFilter: ({ commit }) => {
      commit('REMOVE_SNIDERS_LAST_FILTER')
    }
  }

  export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
  }
