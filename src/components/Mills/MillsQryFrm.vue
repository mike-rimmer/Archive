<template>
  <div
    sm="12"
    class="queryform"
  >
    <div>
      <p style="font-weight:bold;">
        {{ formtitle }}
      </p>
    </div>
    <hr style="margin-bottom:1.5em; border:0; border-top: 1px solid black;">

    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <!-- <v-text-field
        v-model="globalSearchSelected"
        :append-icon="globalFilter"
        label="General Initial Search"
        placeholder="Enter Key words for your Search "
        @keypress.enter="performGlobalFilter"
      /> -->


      <v-autocomplete
        v-model="ownersSelected"
        :append-icon="ownersFilter"
        :items="owners"
        label="Vessel Owner"
        required
        dense
        color="black"
      />

      <v-autocomplete
        v-model="yearSelected"
        :append-icon="dateFilter"
        :items="years"
        label="Year Built"
        required
        dense
      />

      <v-autocomplete
        v-model="vesselSelected"
        :append-icon="vesselFilter"
        :items="ships"
        label="Vessel Name"
        required
        dense
      />
      <!-- <v-autocomplete
        v-model="yearSelected"
        :append-icon="dateFilter"
        :items="years"
        label="Year Built"
        required
        dense
      /> -->

      <v-autocomplete
        v-model="placeSelected"
        :append-icon="placeFilter"
        :items="place"
        label="Place Built"
        required
        dense
      />

      <v-autocomplete
        v-model="reasonSelected"
        :append-icon="reasonFilter"
        :items="reasonList"
        label="Reason Closed"
        required
        dense
      />
    </v-form>

    <!-- <BaseButton -->
    <div
      v-if="MillsFilter"
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
        @click="resetMillsSearchFilters"
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
      <span>Data is Loading...<br>...please wait...</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'MillsQryFrm',
  components: {
    // BaseButton
  },

  props: {

    formtitle: {
      type: String,
      required: true,
      default: 'Query Frm',
    },


  },

  data() {
    return {
      officialNumberSelected: '',
      millsSelected: '',
      ownersSelected: '',
      vesselSelected: '',
      yearSelected: '',
      placeSelected: '',
      reasonSelected: '',
      globalSearchSelected: '',
      valid: false,
      msg: 'Clearing Filters',
      picked: 'general',
      // multiple: true,
    }
  },

  computed: {
    ...mapState('Mills', [
      'MillsCart',
      'MillsCurrentFilter',
      'MillsGlobal',
      'MillsCartIsLoading',
      'MillsFilter',
      'MillsOwnerFilter',
      'MillsVesselFilter',
      'MillsDateFilter',
      'MillsProvinceFilter',
      'MillsReasonClosedFilter',
      'ClearingMillsFilters',
      'MillsAppliedFilters',
      'MillsFilterList',
    ]),

    showLatestFilter() {
      if (this.MillsAppliedFilters.length > 0) {
        let last = this.MillsAppliedFilters.length - 1
        return this.MillsAppliedFilters[last]
      } else {
        return 'Filters are Empty'
      }
    },

    ownersFilter() {
      return this.MillsOwnerFilter ? 'mdi-filter' : 'mdi-menu-down'
    },

    vesselFilter() {
      return this.MillsVesselFilter ? 'mdi-filter' : 'mdi-menu-down'
    },

    dateFilter() {
      return this.MillsDateFilter ? 'mdi-filter' : 'mdi-menu-down'
    },

    placeFilter() {
      return this.MillsProvinceFilter ? 'mdi-filter' : 'mdi-menu-down'
    },

    reasonFilter() {
      return this.MillsReasonClosedFilter ? 'mdi-filter' : 'mdi-menu-down'
    },

    globalFilter() {
      return this.MillsGlobal ? 'mdi-filter' : 'mdi-menu-down'
    },

    numberOfFilters() {
      return this.MillsAppliedFilters.length
    },

    filtersInSync() {
      return this.MillsFilterList.length == this.MillsAppliedFilters.length
    },

    filtersOn() {
      return this.MillsFilter
    },

    clearingFilters() {
      return this.ClearingMillsFilters
    },

    showClearAllFilterButton(){
      if(this.MillsFilterList.length> 1){
        return true
      }else{
        return false
      }
    },

    owners() {
      if(this.MillsCart.length>0){
      let tmp
      if (this.MillsFilter || this.MillsGlobal) {
        tmp = this.MillsCurrentFilter.map((ele) => {
       if (ele.owner != '' || ele.owners.trim() !== 'undefined')
          return ele.owners
        }).sort()
        return tmp
      } else {
        tmp = this.MillsCart.map((ele) => {
          if (ele.owner != '' || ele.owners.trim() !== 'undefined')
        return ele.owners
        }).sort()
        var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
         console.log("Mills Query Begin")
        console.log('Owners', tmp2.length)
        return tmp2
      }
    }else{return []}
    },

    years() {
       if(this.MillsCart.length>0){
      let tmp
      if (this.MillsFilter || this.MillsGlobal) {
        tmp = this.MillsCurrentFilter.map((ele) => {
         if (ele.dateBuilt != '' || ele.dateBuilt.trim() !== 'undefined')
          return ele.dateBuilt
        }).sort()
        return tmp
      } else {
        tmp = this.MillsCart.map((ele) => {
            if (ele.dateBuilt != '' || ele.dateBuilt.trim() !== 'undefined')
          return ele.dateBuilt
        }).sort()
        var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Date Built', tmp2.length)
        return tmp2
      }
      }else{return []}
    },

    ships() {
       if(this.MillsCart.length>0){
      let tmp
      if (this.MillsFilter || this.MillsGlobal) {
        tmp = this.MillsCurrentFilter.map((ele) => {
        if (ele.vesselName != '' || ele.vesselName.trim() !== 'undefined')
          return ele.vesselName
        }).sort()
        return tmp
      } else {
        tmp = this.MillsCart.map((ele) => {
       if (ele.vesselName != '' || ele.vesselName.trim() !== 'undefined')
          return ele.vesselName
        }).sort()
        var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Vessel Name', tmp2.length)
        return tmp2
      }
    }else{return []}
    },

    place() {
       if(this.MillsCart.length>0){
      let tmp
      if (this.MillsFilter || this.MillsGlobal) {
        tmp = this.MillsCurrentFilter.map((ele) => {
        if (ele.country !== '' ||  ele.country.trim() !== 'undefined')
          return ele.country
        }).sort()
        return tmp
      } else {
        tmp = this.MillsCart.map((ele) => {
          if (ele.country !== '' ||  ele.country.trim() !== 'undefined' )
              return ele.country
        }).sort()
        let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Places', tmp2.length)
        return tmp2
      }
      }else{return []}
    },


    reasonList() {
      if(this.MillsCart.length>0){
      let tmp
      if (this.MillsFilter || this.MillsGlobal) {
        tmp = this.MillsCurrentFilter.map((ele) => {
          if (ele.reasonClosed.trim() != '' || ele.reasonClosed.trim() !== 'undefined')
          return ele.reasonClosed
        }).sort()
        return tmp
      } else {
        tmp = this.MillsCart.map((ele) => {
          if (ele.reasonClosed.trim() != '' || typeof ele.reasonClosed != 'undefined')
            return ele.reasonClosed
        }).sort()
        let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Reason Closed', tmp2.length)
        console.log("Mills Query End")
        return tmp2
      }
      }else{return []}
    },


    loadingDataTable() {
      return this.MillsCartIsLoading
    },

  },

  watch: {
    ownersSelected(val, oldVal) {
      if (val != '' && val != oldVal)
        this.applyFilterToCartwithRegExp({
          key: 'owners',
          value: val,
          varfilter: 'ownersSelected',
        })
    },

    vesselSelected(val, oldVal) {
      if (val != '' && val != oldVal)
        this.applyFilterToCartwithRegExp({
          key: 'vesselName',
          value: val,
          varfilter: 'vesselSelected',
        })
    },

    yearSelected(val, oldVal) {

      if (val != '' && val != oldVal)
        this.applyFilterToCartwithRegExp({
          key: 'dateBuilt',
          value: val,
          varfilter: 'yearSelected',
        })
    },

    placeSelected(val, oldVal) {

      if (val != '' && val != oldVal)
        this.applyFilterToCartwithRegExp({
          key: 'whereBuilt',
          value: val,
          varfilter: 'placeSelected',
        })
    },

    reasonSelected(val, oldVal) {

      if (val != '' && val != oldVal)
        this.applyFilterToCartwithRegExp({
          key: 'reasonClosed',
          value: val,
          varfilter: 'reasonSelected',
        })
    },

    // globalSearchSelected(val, oldVal){

    // }
  },

  methods: {
    ...mapActions('Mills', [
      'clearMillsFilters',
      'setMillsFilteredCart',
      'removeMillsLastFilter',
      'setMillsCartIsLoading',
      'millsGlobalSearch',
    ]),

    applyFilterToCartwithRegExp(payload) {
      this.setMillsCartIsLoading(true)
      payload.value = new RegExp(payload.value, 'i')
      this.setMillsFilteredCart(payload)
      this.setMillsCartIsLoading(false)
    },

    resetMillsSearchFilters() {
      //  Remove the current selection from each of the picklists
      this.vesselSelected = ''
      this.yearSelected = ''
      this.placeSelected = ''
      this.reasonSelected = ''
      this.globalSearchSelected = ''
      this.clearMillsFilters(true)
    },

    removeLastFilter() {
      let last = this.MillsFilterList.length - 1
      let ele = this.MillsFilterList[last].varfilter
      switch (ele) {
        case 'ownersSelected':
          this.ownersSelected=''
          break;
        case 'reasonSelected':
          this.reasonSelected = ''
          break
        case 'placeSelected':
          this.placeSelected = ''
          break
        case 'yearSelected':
          this.yearSelected = ''
          break
        case 'vesselSelected':
          this.vesselSelected = ''
          break
      }
      this.removeMillsLastFilter()
    },

    performGlobalFilter() {
      this.millsGlobalSearch(this.globalSearchSelected)
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
  margin-top: 3em;
  padding: 1em;
  position: relative;
  /* background: var(--component-background-theme); */
  /* background-color:white; */
  /* backdrop-filter: blur(4px); */
  box-shadow: 5px 5px 5px rgba(20, 20, 20, 0.5);
  width: 100%;
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.v-autocomplete{
  color:black;
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
