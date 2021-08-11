import ApiServices from '../../services/ApiServices.js';
const state = () =>({
      // Owners Related State flags
      OwnersCart: [],
      OwnersAppliedFilters: [],
      OwnersFilterList: [],
      OwnersCurrentFilter: [],
      OwnersCurrentDetail:{},
      OwnersGlobal: false,
      OwnersCartIsLoading: false,
      OwnersFilter: false,
      ClearingOwnersFilters: false,
      OwnersOwnersFilter:false,
      OwnersMarnumFilter:false,
      OwnersPortIDFilter:false,
      OwnersOwnersIDFilter:false,
      OwnersSharesFilter:false,
      OwnersPurchasedFilter:false,
      OwnersSoldFilter:false,
      OwnersResidenceFilter:false,
})

const getters = {
  OwnersCartIsLoaded (state) {
    if (state.OwnersCurrentFilter.length > 0) {
      return false
    } else {
      return false
    }
  },
}

const mutations = {
    //****************/ Owners mutations go here
    SET_OWNERS_FILTERED_CART(state, { key, value, varfilter }){

      switch (key) {
        case 'owner':
          state.OwnersOwnersFilter = true
          break;
        case 'marnum':
          state.OwnersMarnumFilter = true
          break;
        case 'portnum':
          state.OwnersPortIDFilter = true
          break;
        case 'ownernum':
          state.OwnersOwnersIDFilter = true
          break;
        case 'shares':
          state.OwnersSharesFilter = true
          break;
        case 'datebought':
          state.OwnersPurchasedFilter = true
          break;
        case 'datesold':
          state.OwnersSoldFilter = true
          break;
        case 'residence':
          state.OwnersResidenceFilter = true
          break;
        default:
      }

      let tmp = []
      if (state.OwnersFilter) {
        // Store the previous filtered array

        tmp = state.OwnersCurrentFilter.filter((ele) => {
          return ele[key].match(value)
        })
        state.OwnersCurrentFilter.length = 0
        state.OwnersCurrentFilter = [...tmp]
        state.OwnersFilterList.push({ key, value, varfilter })
        state.OwnersAppliedFilters.push([...tmp])
        // console.log()
      } else {
        // Will go this route only the first time through
        if (state.OwnersGlobal) {
          tmp = state.OwnersCurrentFilter.filter((ele) => {
            return ele[key].match(value)
          })
        } else {
          tmp = state.OwnersCart.filter((ele) => {
            if (ele[key] != null) {
              return ele[key].match(value)
            }
            else {
              return false
            }
          })
        }
        // state.MillsFilterList.push({ key, value, varfilter })
        state.OwnersCurrentFilter = [...tmp]
        // console.log('OwnersCurrentFilter Length',state.OwnersCurrentFilter.length)
        state.OwnersAppliedFilters.push([...tmp])
        // console.log('OwnersAppliedFilter Length', state.OwnersAppliedFilters.length)
        state.OwnersFilterList.push({ key, value, varfilter })
        // console.log('OwnersFilterList Length', state.OwnersFilterList.length)
        state.OwnersFilter = true
        // state.Mills
        state.OwnersCartIsLoading = false
        // console.log()
      }
  },

  LOAD_OWNERS_DETAILS(state, payload){
    state.OwnersCurrentDetail = payload
  },

  LOAD_OWNERS_CART: (state, payload) => {
    state.OwnersCart = [...payload]
    state.OwnersCartIsLoading = false
  },

  SET_OWNERS_CART_IS_LOADING (state, payload) {
    state.OwnersCartIsLoading = payload
  },



  LOAD_OWNERS_GLOBAL_SUMMARY (state, payload) {
    state.OwnersGlobal = true
    state.OwnersCurrentFilter.length = 1
    state.OwnersCurrentFilter = [...payload]
    state.OwnersGlobalCart = [...payload]
  },


  CLEAR_OWNERS_FILTERS: (state) => {
    state.ClearingOwnersFilters = true
    state.OwnersCurrentFilter.length = 0
    state.OwnersGlobal = false
    state.OwnersFilter = false,
    state.OwnersOwnersFilter=false,
    state.OwnersMarnumFilter=false,
    state.OwnersPortIDFilter=false,
    state.OwnersOwnersIDFilter=false,
    state.OwnersSharesFilter=false,
    state.OwnersPurchasedFilter=false,
    state.OwnersSoldFilter=false,
    state.OwnersResidenceFilter=false
    state.OwnersAppliedFilters.length=0
    state.OwnersCurrentFilter.length=0
    state.OwnersFilterList.length=0
  },

  REMOVE_OWNERS_LAST_FILTER: (state) => {
    var filter
    if (state.OwnersFilterList.length > 0) {
      filter = state.OwnersFilterList.pop()

      switch (filter.key) {
        case 'owner':
          state.OwnersOwnersFilter=false
          break;

        case 'marnum':
          state.OwnersMarnumFilter=false
          break;

        case 'portnum':
          state.OwnersPortIDFilter=false
          break;

        case 'ownernum':
          state.OwnersOwnersIDFilter=false
          break;

        case 'shares':
          state.OwnersSharesFilter=false
          break;

        case 'datebought':
          state.OwnersPurchasedFilter=false
          break;

        case 'datesold':
          state.OwnersSoldFilter=false
          break;
        case 'residence':
          state.OwnersResidenceFilter=false
          break;

        default:
      }
      //if (state.MillsFilterList.length == 0) {
      if (state.OwnersAppliedFilters.length > 1) {
        // console.log('OwnersAppliedFilters Length', state.OwnersAppliedFilters.length)
        state.OwnersAppliedFilters.pop()
        state.OwnersCurrentFilter = state.OwnersAppliedFilters.pop();
        // console.log('Reducing OwnersAppliedFiltersBy1', state.OwnersAppliedFilters.length)
      } else {
        if (state.OwnersGlobal) {
          state.OwnersAppliedFilters.pop();
          state.OwnersCurrentFilter = state.OwnersGlobalCart
          state.OwnersFilter = false;
        } else {
          // console.log('If Not Global OwnersAppliedFilters Length', state.OwnersAppliedFilters.length)
          state.OwnersAppliedFilters.pop();
          // console.log('If Not Global Reducing OwnersAppliedFiltersBy1', state.OwnersAppliedFilters.length)

          state.OwnersCurrentFilter = state.OwnersCart;

          state.OwnersFilter = false;
        }
      }
    }
  },


  ADD_ITEM_TO_OWNERS_CART: (state, payload) => {
    // Determine if array exists
    var { RecordId } = payload
    if (state.OwnersCart.length > 0) {
      // Check if item already exits in array
      for (let i = 0; i < state.OwnersCart.length; i++) {
        if (state.OwnersCart[i].RecordId === RecordId) {
          alert("Item already Selected")
          return
        }
      }
    } else {
      state.OwnersCart.push(payload)
      return
    }
    state.OwnersCart.push(payload)
    return
  },


  REMOVE_ITEM_FROM_OWNERS_CART: (state, payload) => {
    var { RecordId } = payload
    state.OwnersCart = state.OwnersCart.filter(ele => {
      return ele.RecordId != RecordId
    })
  },
}

const actions = {
  async loadOwnersCart ({ commit }) {
    commit('SET_OWNERS_CART_IS_LOADING', true)
    try {
      let response = await ApiServices. getOwnersSummaryList()
      commit('LOAD_OWNERS_CART', response.data)
      commit('SET_OWNERS_CART_IS_LOADING', false)
    }
    catch (err) {
      return alert(err.message)
    }
  },

  setOwnersCartIsLoading({commit}, payload){
    commit('SET_OWNERS_CART_IS_LOADING', payload)
  },

  setOwnersFilteredCart({commit}, payload){
    commit('SET_OWNERS_FILTERED_CART', payload)
  },

  removeOwnersLastFilter({commit}){
      commit('REMOVE_OWNERS_LAST_FILTER')
  },

  clearOwnersFilters({commit}){
    commit('CLEAR_OWNERS_FILTERS')
  },

  addItemToOwnersCart: ({ commit }, payload) => {
    commit("ADD_ITEM_TO_OWNERS_CART", payload)
  },

  async getOwnersDetailByID({commit},id){
    try{
      let response = await  ApiServices.getOwnersDetailByID(`'${id}'`)
      commit('LOAD_OWNERS_DETAILS', response.data)
    }
    catch(err){
      return alert(err.message)
    }

  },

  removeItemFromOwnersCart: ({ commit }, payload) => {
    commit('REMOVE_ITEM_FROM_OWNERS_CART', payload)
  },

}

export default {
  namespaced:true,
  state,
  getters,
  mutations,
  actions
}
