<template>
  <div
    sm="12"
    class="queryform "
  >
    <div>
      <p style="font-weight:bold;">
        {{ qryformtitle.toUpperCase() }}
      </p>
    </div>
    <hr style="margin-bottom:1.5em; border:0; border-top: 1px solid black;">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-autocomplete
        v-model="shipSelected"
        :append-icon="wallaceShipFilter"
        label="Vessel"
        :items="ships"
        required
        dense
      />

      <v-autocomplete
        v-model="regSelected"
        :append-icon="wallaceRegistrationFilter"
        label="Province of Registration"
        :items="shipRegistration"
        required
        dense
      />


      <v-autocomplete
        v-model="rigSelected"
        :append-icon="wallaceRigFilter"
        :items="rigs"
        label="Rig Type"
        required
        dense
      />

      <v-autocomplete
        v-model="placeBuiltSelected"
        :append-icon="wallaceBuiltFilter"
        :items="place"
        label="Province Built"
        required
        dense
      />

      <v-autocomplete
        v-model="builderSelected"
        :append-icon="wallaceBuilderFilter"
        :items="builders"
        label="Ship Builders"
        required
        dense
      />



      <v-autocomplete
        v-model="ownerSelected"
        :append-icon="wallaceOwnerFilter"
        :items="owners"
        label="Owners"
        required
        dense
      />
    </v-form>
    <hr style="margin-bottom:1.5em; border:0; border-top: 1px solid black;">
    <!-- <BaseButton -->

    <div
      v-if="WallaceFilter"
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
        @click="resetWallaceSearchFilters"
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

    <!-- <div
      style="display:flex; flex-direction:column; color:white; background-color:blue; justify-content:center; align-items:center;"
    >
      <h1>Flags</h1>
      {{ regSelected }}
      <p>Clearing Filters {{ clearingFilters }}</p>
    </div> -->
  </div>
</template>


<script>
// import staticData from '@/data/datasource'
import { mapState, mapActions } from 'vuex'
// import Bus from '@/services/Bus'

export default {
  name:'WallsQryFrm',
  props: {
    qryformtitle: {
      type: String,
      required: true,
      default: 'Query Frm',
    },
  },
  data() {
    return {
      idSelected: '',
      shipSelected: '',
      rigSelected: '',
      regSelected: '',
      placeBuiltSelected: '',
      builderSelected: '',
      globalSearch: '',
      ownerSelected: '',
      valid: false,
      msg: 'This is a msg',
    }
  },
  computed: {
    ...mapState('Wallace', [
      'WallaceCart',
      'WallaceAppliedFilters',
      'WallaceFilterList',
      'WallaceCurrentFilter',
      'WallaceGlobal',
      'WallaceCartIsLoading',
      'WallaceFilter',
      'ClearingWallaceFilters',
      'WallaceShipFilter',
      'WallacePlaceRegistrationFilter',
      'WallaceRigFilter',
      'WallaceProvBuiltFilter',
      'WallaceBuilderFilter',
      'WallaceOwnersFilter',
    ]),

    showLatestFilter() {
      if (this.WallaceAppliedFilters.length > 0) {
        let last = this.WallaceAppliedFilters.length - 1
        return this.WallaceAppliedFilters[last]
      } else {
        return 'Filters are Empty'
      }
    },

    showClearAllFilterButton(){

      if (this.WallaceFilterList.length > 1){
        return true
      }else{
        return false
      }
    },


    wallaceShipFilter() {
      return this.WallaceShipFilter ? 'mdi-filter' : 'mdi-menu-down'
    },

    wallaceRegistrationFilter() {
      return this.WallacePlaceRegistrationFilter
        ? 'mdi-filter'
        : 'mdi-menu-down'
    },

    wallaceRigFilter() {
      return this.WallaceRigFilter ? 'mdi-filter' : 'mdi-menu-down'
    },

    wallaceBuiltFilter() {
      return this.WallaceProvBuiltFilter ? 'mdi-filter' : 'mdi-menu-down'
    },

    wallaceBuilderFilter() {
      return this.WallaceBuilderFilter ? 'mdi-filter' : 'mdi-menu-down'
    },

    wallaceOwnerFilter() {
      return this.WallaceOwnersFilter ? 'mdi-filter' : 'mdi-menu-down'
    },

    //  globalFilter(){
    //    return this.WallaceGlobal ?  'mdi-filter'  : 'mdi-menu-down'
    //  },

    filtersOn() {
      return this.WallaceFilter
    },

    clearingFilters() {
      return this.ClearingWallaceFilters
    },

    ships() {
      if(this.WallaceCart.length >0){
      let tmp
      if (this.WallaceFilter || this.WallaceGlobal) {
        tmp = this.WallaceCurrentFilter.map((ele) => {
        if (ele.vname != '' || ele.vname.trim() !== 'undefined')
          return ele.vname
        }).sort()
        return tmp
      } else {
        tmp = this.WallaceCart.map((ele) => {
        if (ele.vname != '' || ele.vname.trim() !== 'undefined')
          return ele.vname
        }).sort()
        var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Vessel Name', tmp2.length)
        return tmp2
      }
    }else{return []}},

    shipRegistration() {
      if(this.WallaceCart.length >0){
      let tmp
      if (this.WallaceFilter || this.WallaceGlobal) {
        const tmp = this.WallaceCurrentFilter.map((ele) => {
          if (ele.prov != '' || ele.prov.trim() !== undefined) {
            return 'ele.prov'
          }
        }).sort()
        return tmp
      } else {
        tmp = this.WallaceCart.map((ele) => {return ele.prov}).sort()
        let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('prov', tmp2.length)
        return tmp2
      }
    }else{return []}},

    rigs() {
     if(this.WallaceCart.length >0){
      let tmp
      if (this.WallaceFilter || this.WallaceGlobal) {
        tmp = this.WallaceCurrentFilter.map((ele) => {
          if (ele.rig != '' || ele.rig.trim() !== undefined) {
            return ele.rig
          }
        }).sort()
        return tmp
      } else {
        tmp = this.WallaceCart.map((ele) => {
         if (ele.rig != '' || ele.rig.trim() !== undefined) {
            return ele.rig
          }
        }).sort()
        var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log("Rig", tmp2.length)
        return tmp2
      }
    }else{return []}},

    place() {
     if(this.WallaceCart.length >0){
      let tmp
      if (this.WallaceFilter || this.WallaceGlobal) {
        tmp = this.WallaceCurrentFilter.map((ele) => {
          if (ele.buildprov != '' || ele.buildprov.trim() !== 'undefined') {
            return ele.buildprov
          }
        }).sort()
        return tmp
      } else {
        tmp = this.WallaceCart.map((ele) => {
          if (ele.buildprov != '' || ele.buildprov.trim() !== 'undefined') {
            return ele.buildprov
          }
        }).sort()
        var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Build Prov', tmp2.length)
        return tmp2
      }
    }else{return []}},

    builders() {
    if(this.WallaceCart.length >0){
      let tmp
      if (this.WallaceFilter || this.WallaceGlobal) {
        tmp = this.WallaceCurrentFilter.map((ele) => {
          if (ele.buildnme != '' || ele.buildnme.trim() !== 'undefined') {
            return ele.bildnme
          }
        }).sort()
        return tmp
      } else {
        tmp = this.WallaceCart.map((ele) => {
          if (ele.buildnme != '' || ele.buildnme.trim() !== 'undefined') {
            return ele.bildnme
          }
        }).sort()
        let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Build Name', tmp2.length)
        return tmp2
      }
    }else{return []}},

    owners() {
    if(this.WallaceCart.length >0){
      let tmp
      if (this.WallaceFilter || this.WallaceGlobal) {
        tmp = this.WallaceCurrentFilter.map((ele) => {
          if (ele.own != '' || ele.own.trim() !== 'undefined') {
            return ele.own
          }
        }).sort()
        return tmp
      } else {
        tmp = this.WallaceCart.map((ele) => {
          if (ele.own != '' || ele.own.trim() !== 'undefined') {
            return ele.own
          }
        }).sort()
        var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Owners', tmp2.length)
        return tmp2
      }
    }else {return []}},

    loadingDataTable() {
      return this.WallaceCartIsLoading
    },

    numberOfFilters() {
      // return this.OwnersFilterList.length
      return this.WallaceAppliedFilters.length
    },

    filtersInSync() {
      return this.WallaceAppliedFilters.length === this.WallaceFilterLclsist.length
    },
  },

  watch: {
    shipSelected(val, oldval) {
      if (val != '' && val != oldval)
        // Note the key is the field name that represents each of the columns in the v-data-table
        this.applyFilterToCartwithRegExp({
          key: 'vname',
          value: val,
          varfilter: 'shipSelected',
        })
    },

    regSelected(val, oldval) {

      if (val != '' && val != oldval)
        this.applyFilterToCartwithRegExp({
          key: 'prov',
          value: val,
          varfilter: 'regSelected',
        })
    },

    rigSelected(val, oldval) {
      if (val != '' && val != oldval)
        this.applyFilterToCartwithRegExp({
          key: 'rig',
          value: val,
          varfilter: 'rigSelected',
        })
    },

    placeBuiltSelected(val, oldval) {
      if (val != '' && val != oldval)
        this.applyFilterToCartwithRegExp({
          key: 'buildprov',
          value: val,
          varfilter: 'placeBuiltSelected',
        })
    },

    builderSelected(val, oldval) {
      if (val != '' && val != oldval)
        this.applyFilterToCartwithRegExp({
          key: 'bildnme',
          value: val,
          varfilter: 'builderSelected',
        })
    },


    ownerSelected(val, oldval) {
      // console.log(`New Value: ${val} Old Value: ${oldval}`)
      if (val != '' && val != oldval)
        this.applyFilterToCartwithRegExp({
          key: 'own',
          value: val,
          varfilter: 'ownerSelected',
        })
    },
  },

  methods: {
    ...mapActions('Wallace', [
      'setWallaceCartIsLoading',
      'clearWallaceFilters',
      'setWallaceFilteredCart',
      'removeWallaceLastFilter',
      'WallaceGlobalSearch',
    ]),

    applyFilterToCartwithRegExp(payload) {
      this.setWallaceCartIsLoading(true)
      payload.value = new RegExp(payload.value, 'i')
      this.setWallaceFilteredCart(payload)
      this.setWallaceCartIsLoading(false)
    },

    resetWallaceSearchFilters() {
      //  Remove the current selection from each of the picklists
      this.shipSelected = ''
      this.regSelected = ''
      this.rigSelected = ''
      this.placeBuiltSelected = ''
      this.builderSelected = ''
      this.ownerSelected = ''
      this.clearWallaceFilters(true)
    },

    removeLastFilter() {
      let last = this.WallaceFilterList.length - 1
      let ele = this.WallaceFilterList[last].varfilter
      switch (ele) {
        case 'shipSelected':
          this.shipSelected = ''
          break
        case 'regSelected':
          this.regSelected = ''
          break
        case 'rigSelected':
          this.rigSelected = ''
          break
        case 'placeBuiltSelected':
          this.placeBuiltSelected = ''
          break
        case 'builderSelected':
          this.builderSelected = ''
          break
        case 'ownerSelected':
          this.ownerSelected = ''
          break
      }
      this.removeWallaceLastFilter()
    },

    performGlobalFilter() {
      this.millsGlobalSearch(this.globalSearchSelected)
    },
  },
}
</script>

<style scoped>
.queryform {
  /* max-height: 60vh;
  overflow-y: auto; */
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 1em;
  padding: 1em;
  position: relative;
  /* background: var(--component-background-theme);
  backdrop-filter: blur(4px); */
  box-shadow: 5px 5px 5px rgba(20, 20, 20, 0.5);
  width: 100%;
  margin-left: 0.5em;
  margin-right: 0.5em;
  color:black;
}

.v-text-field >>> input {
  font-size: 0.9em;
}
.v-text-field >>> label {
  font-size: 0.9em;
}
.v-text-field >>> button {
  font-size: 0.8em;
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
