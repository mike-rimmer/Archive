import ApiServices from '../../services/ApiServices.js';

const state = () =>({
  // CSL Related State
   CSLGlobalCart: [],
   CSLCart: [],
   CSLDetailCart:[],
   upDateDetailCart:false,
   CSLCurrentDetail:{},
   CSLActiveDetail:{},
   CSLShowDetail:false,
   CSLDetailCartIsLoaded: false,
   CSLCurrentFilter: [],
   CSLCartIsLoading: false,
   CSLAppliedFilters: [],
   CSLFilterList: [],
   CSLFilter: false,
   CSLGlobal: false,
   CSLReasonClosedFilter: false,
   ClearingCSLFilters: false,
   CSLNotisFilter: false,
   CSLOfficialNumFilter: false,
   CSLVesselFilter : false,
   CSLVesselTypeFilter: false,
   CSLYearBuiltFilter: false,
   CSLBuilderFilter: false,
   CSLBuildCountryFilter : false,
})
const getters = {
  CSLCartIsLoaded: (state) => {
   if (state.CSLCurrentFilter.length > 0 || state.CSLCart.length >=1) {
      return true
    } else {
      return false
    }
  },

  activeDetails(state){
    if (state.CSLActiveDetail.length > 0){
    return state.CSLActiveDetail[0].details
  }else{
    return {}
  }
  }

}

const mutations = {
      // *********************MILLS MUTATIONS***********************
      LOAD_CSL_CART: (state, payload) => {
        state.CSLCart = [...payload]
        state.CSLCartIsLoading = false
        state.CSLCartIsLoaded = true
      },

      LOAD_CSL_CURRENT_DETAIL:(state, payload) =>{
        state.CSLCurrentDetail = payload
        state.CSLShowDetail = true
        // if (state.upDateDetailCart){
        //   state.CSLDetailCart.push(payload)
        //   state.CSLDetailCartIsLoaded = true
        // }
      },

      UPDATE_DETAIL_CART: (state, payload) => {
        state.upDateDetailCart = payload
      },

      LOAD_CSL_DETAIL_TO_CART:(state, payload) =>{
        // state.CSLCurrentDetail = payload
        state.CSLDetailCart.push(payload)
        state.CSLDetailCartIsLoaded = true
        state.CSLShowDetail = true
      },


      SET_CSL_CART_IS_LOADING (state, payload) {
        state.CSLCartIsLoading = payload
      },

      REMOVE_CSL_DETAIL_RECORD(state, payload){
        const index = state.CSLDetailCart.findIndex(( ele ) => ele.Notis == payload)
        if (index != -1){
          state.CSLDetailCart.splice(index, 1)
          state.CSLActiveDetail.length=0
         } //?

        if(state.CSLDetailCart.length == 0){
          state.CSLDetailCartIsLoaded = true
          state.CSLShowDetail = true
        }

      },


      CLEAR_CSL_FILTERS: (state) => {
        state.ClearingCSLFilters = true
        state.CSLGlobal = false
        state.CSLFilter = false,
        state.CSLNotisFilter = false,
        state.CSLOfficialNumFilter = false,
        state.CSLVesselFilter = false,
        state.CSLVesselTypeFilter = false,
        state.CSLYearBuiltFilter = false,
        state.CSLBuilderFilter = false,
        state.CSLBuildCountryFilter = false,
        state.CSLCurrentFilter.length = 0
        state.CSLAppliedFilters.length = 0
        state.CSLFilterList.length = 0
        state.ClearingCSLFilters = false
      },


      SET_CSL_FILTERED_CART: (state, { key, value, varfilter }) => {
        switch (key) {
          case 'Notis':
            state.CSLNotisFilter = true
            break;
          case 'num':
          state.CSLOfficialNumFilter = true
          break;
          case 'name':
            state.CSLVesselFilter = true
            break;
          case 'type':
            state.CSLVesselTypeFilter = true
            break;
          case 'yearbuilt':
            state.CSLYearBuiltFilter = true
            break;
          case 'builder':
            state.CSLBuilderFilter = true
            break;
          case 'buildcntry':
            state.CSLBuildCountryFilter = true
            break;
          default:
        }

        let tmp = []
        if (state.CSLFilter) {
          // Store the previous filtered array

          tmp = state.CSLCurrentFilter.filter((ele) => {
            return ele[key].match(value)
          })
          state.CSLCurrentFilter.length = 0
          state.CSLCurrentFilter = [...tmp]
          state.CSLFilterList.push({ key, value, varfilter })
          state.CSLAppliedFilters.push([...tmp])
          // console.log()
        } else {
          // Will go this route only the first time through
          if (state.CSLGlobal) {
            tmp = state.CSLCurrentFilter.filter((ele) => {
              return ele[key].match(value)
            })
          } else {
            tmp = state.CSLCart.filter((ele) => {
              if (ele[key] != null) {
                return ele[key].match(value)
              }
              else {
                return false
              }
            })
          }
          // state.CSLFilterList.push({ key, value, varfilter })
          state.CSLCurrentFilter = [...tmp]
          state.CSLAppliedFilters.push([...tmp])
          state.CSLFilterList.push({ key, value, varfilter })
          state.CSLFilter = true
          state.CSLCartIsLoading = false
          // console.log()
        }
      },

      LOAD_CSL_GLOBAL_SUMMARY: (state, payload) => {
        state.CSLGlobal = true
        state.CSLCurrentFilter.length = 1
        state.CSLCurrentFilter = [...payload]
        state.CSLGlobalCart = [...payload]
      },

      SET_CSL_ACTIVE_DETAIL: (state, id)=>{
        state.CSLActiveDetail = state.CSLDetailCart.filter((ele)=>{
          return ele.details.Notis == id
        })

      },

      REMOVE_CSL_LAST_FILTER: (state) => {
        var filter
        if (state.CSLFilterList.length > 0) {
          filter = state.CSLFilterList.pop()

          switch (filter.key) {
            case 'Notis':
              state.CSLNotisFilter = false
              break;
            case 'num':
            state.CSLOfficialNumFilter = false
            break;
            case 'name':
              state.CSLVesselFilter = false
              break;
            case 'type':
              state.CSLVesselTypeFilter = false
              break;
            case 'yearbuilt':
              state.CSLYearBuiltFilter = false
              break;
            case 'builder':
              state.CSLBuilderFilter = false
              break;
            case 'buildcntry':
              state.CSLBuildCountryFilter = false
              break;
            default:
          }
          //if (state.CSLFilterList.length == 0) {
          if (state.CSLAppliedFilters.length > 1) {
            state.CSLAppliedFilters.pop()
            state.CSLCurrentFilter = state.CSLAppliedFilters.pop();
          } else {
            if (state.CSLGlobal) {
              state.CSLAppliedFilters.pop();
              state.CSLCurrentFilter = state.CSLGlobalCart
              state.CSLFilter = false;
            } else {
              state.CSLAppliedFilters.pop();
              state.CSLCurrentFilter = state.CSLCart;
              state.CSLFilter = false;
            }
          }
        }
      },

  }





  const actions = {

    // *******************CSL Actions go Here*************************

    async loadCSLCart ({ commit }) {
       try {
        let response = await ApiServices.getCSLSummaryList()
        commit('LOAD_CSL_CART', response.data)
      }
      catch (err) {
        return alert(err.message)
      }
    },

    async loadCSLCurrentDetail({commit}, id){
      let response = await ApiServices.getCSLDetailByID(id)
      try{
        commit('LOAD_CSL_CURRENT_DETAIL', response.data)
      }
      catch (err) {
        return alert(err.message)
      }
    },

   async loadCSLCurrentDetailandUpDateDetailCart({commit}, payload){
     const {id, list} =  payload
      try{
        let response = await ApiServices.getCSLDetailByID(id)
        commit('UPDATE_DETAIL_CART', true)
      const record ={details:response.data, list:list}
      // const newpayload = response.data
        commit('LOAD_CSL_DETAIL_TO_CART', record)
      }
      catch (err) {
        return alert(err.message)
      }
    },

    loadCSLDetailToCart({commit}, payload){
        commit('LOAD_CSL_DETAIL_TO_CART', payload)
      },


    async CSLGlobalSearch ({ commit }, payload) {
      try {
        payload = `'${payload}'`
        let response = await ApiServices.getCSLSummaryWithGlobal(payload)
        console.log("data")
        commit('LOAD_CSL_GLOBAL_SUMMARY', response.data)
      }
      catch (err) {
        return alert(err)
      }
    },

    setCSLCartIsLoading ({ commit }, payload) {
      commit("SET_CSL_CART_IS_LOADING", payload)
    },

    setCSLFilteredCart ({ commit }, payload) {
      // alert()
      commit('SET_CSL_FILTERED_CART', payload)
    },


    setCSLFiltered: ({ commit }, payload) => {
      commit('SET_CSL_FILTERED', payload)
    },


    clearCSLFilters: ({ commit }, payload) => {
      commit('CLEAR_CSL_FILTERS', payload)
    },

    removeCSLLastFilter: ({ commit }) => {
      commit('REMOVE_CSL_LAST_FILTER')
    },


    deleteRecord: ({commit}, payload) => {
      commit('REMOVE_CSL_DETAIL_RECORD', payload)
    },

    CSL_ActiveDetail: ({commit}, id) =>{
      commit('SET_CSL_ACTIVE_DETAIL', id)
    }
  }

  export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
  }
