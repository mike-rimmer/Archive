<template>
  <div
    sm="12"
    class="queryform"
  >
    <div>
      <p style="font-weight:bold;">
        {{ title }}
      </p>
    </div>

    <hr style="margin-bottom:1.5em; border:0; border-top: 1px solid black;">

    <v-form
      ref="form"
      lazy-validation
    >
      <!-- <v-text-field
        v-model="globalSearchSelected"
        label="General Search"
        prepend-icon="mdi-book-search"
        placeholder="Enter Key words for your Search "
        @keypress.enter="performGlobalSearch"
      /> -->

      <v-autocomplete
        v-model="off_numSelected"
        :append-icon="numberFilter"
        :items="off_nums"
        label="Official Number"
        required
        dense
      />
      <v-autocomplete
        v-model="vesselSelected"
        :append-icon="vesselFilter"
        :items="vessels"
        label="Vessel Name"
        required
        dense
      />

      <v-autocomplete
        v-model="regSelected"
        :append-icon="regFilter"
        :items="registrations"
        label="Registration"
        required
        dense
      />

      <v-autocomplete
        v-model="regDateSelected"
        :append-icon="regDateFilter"
        :items="regDates"
        label="Registration Date"
        required
        dense
      />

      <v-autocomplete
        v-model="builderSelected"
        :append-icon="builderFilter"
        :items="builders"
        label="Builder"
        required
        dense
      />

      <v-autocomplete
        v-model="rigSelected"
        :append-icon="rigFilter"
        :items="rigs"
        label="Rig Type"
        required
        dense
      />
    </v-form>

    <!-- Filters Go Here -->
    <div
      v-if="RegistryFilter"
      style="display:flex; flex-direction:column; justify-content:space-around;  align-items:center; background-color:#A9D6D1; color:black; "
    >
      <v-btn
        class="my-4"
        @click="removeLastFilter"
      >
        Remove Last Filter
      </v-btn>

      <v-btn
        v-show="showClearAllFilterButton"
        class="my-4"
        @click="resetRegistrySearchFilters"
      >
        Clear All Filters
      </v-btn>
    </div>
    <div
      v-else
      style="display:flex; flex-direction:column;justify-content:center; background-color:#A9D6D1; color:black; align-items:center; padding:1em; border-radius:4px;"
    >
      <span>Un-Filtered</span>
      <span>Data</span>
    </div>

    <div
      v-show="loadingDataTable"
      style="display:flex; color:white; background-color:green; justify-content:center; align-items:center;"
    >
      <span>Data is Loading<br>...please wait...</span>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
// import APIServices from '@/services/ApiServices';
// import Bus from '@/services/Bus'
// import BaseButton from '@/components/BaseButton'

export default {
  name: 'RegistryQryFrm',
  components: {},
  props: {

    title: {
      type: String,
      required: true,
      default: 'Query Frm',
    },

  },
  data() {
    return {
      // title: 'Canadian Registry Filters',
      globalSearchSelected: '',

      off_numSelected: '',
      vesselSelected: '',
      regSelected: '',
      regDateSelected: '',
      builderSelected: '',
      rigSelected: '',
      msg: 'Clearing Registry Filters',
    }
  },

  computed: {
    ...mapState('Registry', [
      'RegistryCart',
      'RegistryGlobal',
      'RegistryCurrentFilter',
      'RegistryCartIsLoading',
      'RegistryFilter',
      'RegNumberFilter',
      'RegVesselFilter',
      'RegRegistrationFilter',
      'RegRegistrationDateFilter',
      'RegBuilderFilter',
      'RegRigFilter',
      'ClearingRegistryFilters',
      'RegistryAppliedFilters',
      'RegistryFilterList',
    ]),

    numberFilter() {
      return this.RegNumberFilter ? 'mdi-filter' : 'mdi-menu-down'
    },
    vesselFilter() {
      return this.RegVesselFilter ? 'mdi-filter' : 'mdi-menu-down'
    },

    regFilter() {
      return this.RegRegistrationFilter ? 'mdi-filter' : 'mdi-menu-down'
    },
    regDateFilter() {
      return this.RegRegistrationDateFilter ? 'mdi-filter' : 'mdi-menu-down'
    },
    builderFilter() {
      return this.RegBuilderFilter ? 'mdi-filter' : 'mdi-menu-down'
    },
    rigFilter() {
      return this.RegRigFilter ? 'mdi-filter' : 'mdi-menu-down'
    },

    filtersOn() {
      return this.RegistryFilter
    },

    showClearAllFilterButton(){
      if(this.RegistryFilterList.length>1){
        return true
      }else{
        return false
      }
    },

    off_nums() {
      if(this.RegistryCart.length > 0){

        let tmp
      if (this.RegistryFilter || this.RegistryGlobal) {
        tmp = this.RegistryCurrentFilter.map((ele) => {
          if (ele.officialnum != '' || ele.officialnum.trim() !== 'undefined') {
            return ele.officialnum
          }
        }).sort()
        return tmp
      } else {
        tmp = this.RegistryCart.map((ele) => {
          if (ele.officialnum != '' || ele.officialnum.trim() !== 'undefined')  {
            return ele.officialnum
          }
        }).sort()
        var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('OffNums', tmp2.length)
        return tmp2
      }
      }else{return []}
    },

    vessels() {
      if(this.RegistryCart.length > 0){
      let tmp
      if (this.RegistryFilter || this.RegistryGlobal) {
        tmp = this.RegistryCurrentFilter.map((ele) => {
          if (ele.vessel != '' || ele.vessel.trim() !== 'undefined') {
            return ele.vessel
          }
        }).sort()
        return tmp
      } else {
        tmp = this.RegistryCart.map((ele) => {
          if (ele.vessel != '' || ele.vessel.trim() !== 'undefined') {
            return ele.vessel
          }
        }).sort()
        var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('vessels', tmp2.length)
        return tmp2
      }
    }else{return []}},

    registrations() {
      if(this.RegistryCart.length > 0){
      let tmp
      if (this.RegistryFilter || this.RegistryGlobal) {
        tmp = this.RegistryCurrentFilter.map((ele) => {
          if (ele.reg != '' || ele.reg.trim() !== 'undefined') {
            return ele.reg
          }
        }).sort()
        return tmp
      } else {
        tmp = this.RegistryCart.map((ele) => {
          let tmp = ele.reg.trim()
          if (ele.reg != '' || ele.reg.trim() !== 'undefined') {
            return tmp
          }
        }).sort()
        var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Registrations', tmp2.length)
        return tmp2
      }
    }else{return []}},

    regDates() {
      if(this.RegistryCart.length > 0){
      let tmp
      if (this.RegistryFilter || this.RegistryGlobal) {
        tmp = this.RegistryCurrentFilter.map((ele) => {
          if (ele.regyear != '' || ele.regyear.trim() !== 'undefined') {
            return ele.regyear
          }
        }).sort()
        return tmp
      } else {
        tmp = this.RegistryCart.map((ele) => {
          if (ele.regyear != '' || ele.regyear.trim() !== 'undefined') {
            return ele.regyear
          }
        }).sort()
        var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('RegDates', tmp2.length)
        return tmp2
      }}else{return []}
    },

    builders() {
      if(this.RegistryCart.length > 0){
      var tmp
      if (this.RegistryFilter || this.RegistryGlobal) {
        const tmp = this.RegistryCurrentFilter.map((ele) => {
          if (ele.builder != '' || ele.builder.trim() !== 'undefined') {
            return ele.builder
          }
        }).sort()
        return tmp
      } else {
        tmp = this.RegistryCart.map((ele) => {
          if (ele.builder != '' || ele.builder.trim() !== 'undefined'){
            return ele.builder
          }
        }).sort()
        var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Builders', tmp2.length)
        return tmp2
      }}else{return []}
    },

    rigs() {
      if(this.RegistryCart.length > 0){
      var tmp
      if (this.RegistryFilter || this.RegistryGlobal) {
        const tmp = this.RegistryCurrentFilter.map((ele) => {
          if (ele.rig != '' || ele.rig.trim() !== 'undefined') {
            return ele.rig
          }
        }).sort()
        return tmp
      } else {
        tmp = this.RegistryCart.map((ele) => {
         if (ele.rig != '' || ele.rig.trim() !== 'undefined') {
            return ele.rig
          }
        }).sort()
        var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Rigs', tmp2.length)
        return tmp2
      }}else{return []}
    },

    clearingFilters() {
      return this.ClearingRegistryFilters
    },

    loadingDataTable() {
      return this.RegistryCartIsLoading
    },

    numberOfFilters() {
      return this.RegistryAppliedFilters.length
    },

    // regSelected:'',
    filtersInSync() {
      return (
        this.RegistryAppliedFilters.length == this.RegistryFilterList.length
      )
    },

    // radio() {
    //   Bus.$emit('switchforms', this.picked)
    //   return this.picked
    // },
  },

  watch: {
    off_numSelected(val, oldVal) {
      if (val != '' && val != oldVal)
        this.applyFilterToCartwithRegExp({
          key: 'officialnum',
          value: val,
          varfilter: 'officialNum',
        })
    },

    vesselSelected(val, oldVal) {
      if (val != '' && val != oldVal)
        this.applyFilterToCartwithRegExp({
          key: 'vessel',
          value: val,
          varfilter: 'vesselName',
        })
    },

    regSelected(val, oldVal) {
      if (val != '' && val != oldVal)
        this.applyFilterToCartwithRegExp({
          key: 'reg',
          value: val,
          varfilter: 'registration',
        })
    },

    regDateSelected(val, oldVal) {
      if (val != '' && val != oldVal)
        this.applyFilterToCartwithRegExp({
          key: 'regyear',
          value: val,
          varfilter: 'registrationDate',
        })
    },

    builderSelected(val, oldVal) {
      if (val != '' && val != oldVal)
        this.applyFilterToCartwithRegExp({
          key: 'builder',
          value: val,
          varfilter: 'builder',
        })
    },

    rigSelected(val, oldVal) {
      if (val != '' && val != oldVal)
        this.applyFilterToCartwithRegExp({
          key: 'rig',
          value: val,
          varfilter: 'rig',
        })
    },

    // allSelected(val, oldVal) {
    //   // console.log(`New Value: ${val} Old Value: ${oldVal}`)
    //   if (val!='' && val != oldVal){
    //    this.getRegistrySummaryList(val)
    //    this.searchVariable = 'all'
    //    }
    // },
  },

  methods: {
    ...mapActions('Registry', [
      'clearRegistryFilters',
      'setRegistryFilteredCart',
      'removeRegistryLastFilter',
      'setRegistryCartIsLoading',
      'registryGlobalSearch',
    ]),

    applyFilterToCartwithRegExp(payload) {
      this.setRegistryCartIsLoading(true)
      payload.value = new RegExp(payload.value, 'i')
      this.setRegistryFilteredCart(payload)
      this.setRegistryCartIsLoading(false)
    },

    resetRegistrySearchFilters() {
      this.off_numSelected = ''
      this.vesselSelected = ''
      this.regSelected = ''
      this.regDateSelected = ''
      this.builderSelected = ''
      this.rigSelected = ''
      this.clearRegistryFilters(true)
    },

    // resetSearch(){

    // },

    removeLastFilter() {
      let last = this.RegistryFilterList.length - 1
      let ele = this.RegistryFilterList[last].varfilter
      switch (ele) {
        case 'officialNum':
          this.off_numSelected = ''
          break
        case 'vesselName':
          this.vesselSelected = ''
          break
        case 'registration':
          this.regSelected = ''
          break
        case 'registrationDate':
          this.regDateSelected = ''
          break
        case 'builder':
          this.builderSelected = ''
          break
        case 'rig':
          this.rigSelected = ''
          break
      }
      this.removeRegistryLastFilter()
    },

    // getRegistrySummaryList(val){
    //   if(val=='Select None'){
    //   this.$emit('clearRegistrySummaryFrm')
    //   return
    //   }
    //   this.$emit('RegistrySearchAll', this.allSelected)
    //   this.searchVariable = 'searchAll'
    //   this.resetSearchVariables()
    // },

    performGlobalSearch() {
      // debugger
      this.registryGlobalSearch(this.globalSearchSelected)
    },

    resetSearchVariables() {
      // close the popupfrm showing record details
      this.$emit('hidePopUp')
      switch (this.searchVariable) {
        case '':
          this.allSelected = ''
          this.globalSearchSelected = ''
          break

        case 'all':
          // this.allSelected=''
          this.globalSearchSelected = ''
          break

        case 'general':
          this.allSelected = ''
          // this.globalSearchSelected = ''
          break

        default:
      }
    },
  },
}
</script>

<style scoped>
.queryform {
  max-height: 60vh;
  overflow-y: auto;
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 1em;
  padding: 1em;
  position: relative;
  /* background: var(--component-background-theme); */
  /* linear-gradient(
     to bottom right,
    rgba(247, 248, 247, 0),
    rgba(252, 255, 252, .9)
    ); */
  /* backdrop-filter: blur(4px); */
  box-shadow: 5px 5px 5px rgba(20, 20, 20, 0.5);
  width: 100%;
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.v-text-field >>> input {
  font-size: 0.9em;
}
.v-text-field >>> label {
  font-size: 0.9em;
}
.v-text-field >>> button {
  font-size: 0.9em;
}

p {
  font-size: 0.9em;
}

.radioBtn {
  display: flex;
  justify-content: flex-start;
}

.radioBtn label {
  margin-left: 0.5em;
}

.btn {
  margin-right: 1em;
}

.v-btn {
  font-size: 0.7em !important;
}

.clrbtn {
  padding: 0.2em 0.5em;
  text-align: center;
  border-top-style: solid 1px grey;
  border-bottom-style: solid 1px grey;
}
</style>
