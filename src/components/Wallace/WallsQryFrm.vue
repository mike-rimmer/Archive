<template>
  <div
    sm="12"
    class="queryform "
  >
    <div>
      <p style="font-weight:bold;">
        {{ qryformtitle }}
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
        v-model="registrationSelected"
        :append-icon="wallacePlaceRegistrationFilter"
        :items="registration"
        label="Province of Registration"
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

      <!--
      <v-text-field
        v-model="globalSearch"
        label="General Search"
        prepend-icon="mdi-book-search"
        placeholder="Enter Key words for your Search "
        @keypress.enter="performGlobalSearch"
      >
        {{ globalSearch }}
      </v-text-field> -->
    </v-form>

    <!-- <BaseButton -->
    <v-row
      v-show="WallaceFilter"
      class="justify-center"
    >
      <v-btn
        @click="resetWallaceSearchFilters"
      >
        Clear Filters
      </v-btn>
    </v-row>
    <v-row
      v-show="clearingFilters"
      class="justify-center white--text mt-2"
    >
      <p>
        {{ msg }}
      </p>
    </v-row>
    <v-row
      v-if="filtersOn"
      class="justify-center white--text mt-2"
    >
      <p>Filter(s) Active</p>
      <v-col>
        <v-btn @click="removeLastFilter">
          Remove Last Filter
        </v-btn>
      </v-col>
      <v-col>
        <!-- {{ numberOfFilters }} {{ filtersInSync }} -->
      </v-col>
    </v-row>
    <v-row
      v-else
      class="justify-center white--text mt-2"
    >
      <p>UnFiltered</p>
    </v-row>
    <v-row
      v-show="loadingDataTable"
      justify="center"
      class="justify-center white--text mt-2 px-4"
    >
      <p>Data is Loading...<br>please wait</p>
    </v-row>
    <!-- </BaseButton> -->
  </div>
</template>


<script>
// import staticData from '@/data/datasource'
import {mapState, mapActions} from "vuex"
// import Bus from '@/services/Bus'

export default {

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
      rigSelected:'',
      registrationSelected: '',
      placeBuiltSelected: '',
      builderSelected:'',
      globalSearch:'',
      ownerSelected: '',
      valid: false,
      msg:'',
    }
  },
  computed: {
    ...mapState('Wallace',
    [
    'WallaceCart', 'WallaceAppliedFilters', 'WallaceFilterList', 'WallaceCurrentFilter',
    'WallaceGlobal',
    'WallaceCartIsLoading',
    'WallaceFilter',
    'ClearingWallaceFilters',
    'WallaceShipFilter',
    'WallacePlaceRegistrationFilter',
    'WallaceRigFilter',
    'WallaceProvBuiltFilter',
    'WallaceBuilderFilter',
    'WallaceOwnersFilter'
     ]),

     showLatestFilter(){
      if(this.WallaceAppliedFilters.length > 0){
        let last = this.WallaceAppliedFilters.length-1
        return this.WallaceAppliedFilters[last]
      }else{
        return "Filters are Empty"
      }
    },

    // WallaceShipFilter
// WallaceOwnersFilter
// WallaceBuilderFilter
// WallaceCountryFilter
// WallaceRegistrationFilter

    wallaceShipFilter(){
       return this.WallaceShipFilter ?  'mdi-filter' : 'mdi-menu-down'
     },

    wallacePlaceRegistrationFilter(){
       return this.WallacePlaceRegistrationFilter ?  'mdi-filter' : 'mdi-menu-down'
    },

    wallaceRigFilter(){
       return this.WallaceRigFilter ?  'mdi-filter' : 'mdi-menu-down'
    },

   wallaceBuiltFilter(){
     return this.WallaceProvBuiltFilter ?  'mdi-filter' : 'mdi-menu-down'
   },

  wallaceBuilderFilter(){
    return this.WallaceBuilderFilter ? 'mdi-filter' : 'mdi-menu-down'
  },

   wallaceOwnerFilter(){
     return this.WallaceOwnersFilter ?  'mdi-filter' : 'mdi-menu-down'
   },

  //  globalFilter(){
  //    return this.WallaceGlobal ?  'mdi-filter'  : 'mdi-menu-down'
  //  },


   filtersOn(){
     return this.WallaceFilter
   },

   clearingFilters(){
     return this.ClearingWallaceFilters
   },

   ships(){
       if(this.WallaceFilter || this.WallaceGlobal){
        const tmp = this.WallaceCurrentFilter.map((ele)=>{
          if(ele.vname) return ele.vname
         }).sort()
       return tmp
       }else{
        return this.WallaceCart.map((ele)=>{
              if(ele.vname) return ele.vname
      }).sort()
   }
   },

   registration(){
       if(this.WallaceFilter || this.WallaceGlobal){
         const tmp = this.WallaceCurrentFilter.map((ele)=>{
         if(ele.prov !='' && ele.prov != undefined){
          return "ele.prov"
         }
         }).sort()
         return tmp
       }else{
           return this.WallaceCart.map((ele)=>{
             if(ele.prov !='' && ele.prov !=undefined){
               return ele.prov
             }
            }).sort()
         }
         },

   rigs(){
       if(this.WallaceFilter || this.WallaceGlobal){
         const tmp = this.WallaceCurrentFilter.map((ele)=>{
         if(ele.rig.trim() !=''){
          return ele.rig
         }
         }).sort()
         return tmp
       }else{
        return this.WallaceCart.map((ele)=>{
        if(ele.rig.trim() != ''){
        return ele.rig
      }
      }).sort()
   }
   },

  place(){
     if(this.WallaceFilter || this.WallaceGlobal){
        const tmp = this.WallaceCurrentFilter.map((ele)=>{
         if(ele.buildprov.trim() !='' && ele.buildprov !== 'undefined'){
          return ele.buildprov
         }
         }).sort()
         return tmp
       }else{
      return this.WallaceCart.map((ele)=>{
        if(ele.buildprov.trim() != '' && ele.buildprov !== 'undefined'){
          return ele.buildprov
        }
      }).sort()
  }
  },

  builders(){
      if(this.WallaceFilter || this.WallaceGlobal){
         const tmp = this.WallaceCurrentFilter.map((ele)=>{
         if(ele.bildnme.trim() !=''){
          return ele.bildnme
         }
         }).sort()
         return tmp
       }else{
      return this.WallaceCart.map((ele)=>{
      if(ele.bildnme.trim() != ''){
        return ele.bildnme
      }
      }).sort()
  }
  },

  owners(){
      if(this.WallaceFilter || this.WallaceGlobal){
         const tmp = this.WallaceCurrentFilter.map((ele)=>{
         if(ele.own.trim() !='' && ele.own  != 'undefined'){
          return ele.own
         }
         }).sort()
         return tmp
       }else{
        return this.WallaceCart.map((ele)=>{
          if(ele.own.trim() != '' && ele.own != 'undefined'){
            return ele.own
          }
          }).sort()

        }
        },



  loadingDataTable(){
    return this.WallaceCartIsLoading
  },

   numberOfFilters(){
    // return this.OwnersFilterList.length
    return this.WallaceAppliedFilters.length
  },

  filtersInSync(){
    return this.WallaceAppliedFilters.length === this.WallaceFilterList.length
  }


  },

  watch: {
    shipSelected(val, oldval) {
       if (val!='' && val != oldval)
      // Note the key is the field name that represents each of the columns in the v-data-table
      this.applyFilterToCartwithRegExp({ key:"vname", value:val, varfilter:'shipSelected' })
    },

    registrationSelected(val, oldval) {
      console.log(`New Value: ${val} Old Value: ${oldval}`)
      if (val!='' && val != oldval)
       this.applyFilterToCartwithRegExp({ key:"registration", value:val, varfilter:'registrationSelected' })
    },

    rigSelected(val, oldval) {
      // console.log(`New Value: ${val} Old Value: ${oldval}`)
      if (val!='' && val != oldval)
      this.applyFilterToCartwithRegExp({ key:"rig", value:val, varfilter:'rigSelected' })
    },

    placeBuiltSelected(val, oldval) {
      // console.log(`New Value: ${val} Old Value: ${oldval}`)
      if (val!='' && val != oldval)
      this.applyFilterToCartwithRegExp({ key:"buildprov", value:val, varfilter:'placeBuiltSelected' })
    },


    builderSelected(val, oldval) {
      // console.log(`New Value: ${val} Old Value: ${oldval}`)
      if (val!='' && val != oldval)
      this.applyFilterToCartwithRegExp({ key:"bildnme", value:val, varfilter:'builderSelected' })
    },

    // globalSearch(val, oldval) {
    //   console.log(`New Value: ${val} Old Value: ${oldval}`)
    //   if (val!='' && val != oldval) this.getWallsSummaryByGenSearch(val)
    // },

    ownerSelected(val, oldval) {
      // console.log(`New Value: ${val} Old Value: ${oldval}`)
      if (val!='' && val != oldval)
      this.applyFilterToCartwithRegExp({ key:"own", value:val, varfilter:'ownerSelected' })
    },
  },



  methods: {
    ...mapActions('Wallace',
      ['setWallaceCartIsLoading', 'clearWallaceFilters', 'setWallaceFilteredCart', 'removeWallaceLastFilter', 'WallaceGlobalSearch']),

    applyFilterToCartwithRegExp(payload){
      this.setWallaceCartIsLoading(true)
      payload.value = new RegExp(payload.value, 'i')
      this.setWallaceFilteredCart(payload)
      this.setWallaceCartIsLoading(false)
    },

      resetWallaceSearchFilters(){
    //  Remove the current selection from each of the picklists
     this.shipSelected = ''
     this.registedSelected =''
     this.rigFilter =''
     this.placeBuiltSelected=''
     this.builderSelected=''
     this.ownerSelected =''
     this.clearWallaceFilters(true)
    },

    removeLastFilter(){
      let last = this.WallaceFilterList.length-1
      let ele = this.WallaceFilterList[last].varfilter
      switch(ele){
        case 'shipSelected':
          this.shipSelected = ''
          break;
        case 'registrationSelected':
          this.registrationSelected=''
          break;
        case 'rigSelected':
          this.rigSelected =''
          break;
        case 'placeBuiltSelected':
          this.placeBuiltSelected =''
          break;
        case 'builderSelected':
          this.builderSelected =''
          break;
        case 'ownerSelected':
          this.ownerSelected =''
          break;
      }
      this.removeWallaceLastFilter()

    },

    performGlobalFilter(){
      this.millsGlobalSearch(this.globalSearchSelected)
    }
    },

}
</script>

<style scoped>
.queryform {
  max-height:60vh;
  overflow-y: auto;
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 1em;
  padding: 1em;
  position: relative;
  background:var(--component-background-theme);
  backdrop-filter:blur(4px);
  box-shadow: 5px 5px 5px rgba(20, 20, 20, 0.5);
  width:100%;
  margin-left:.5em;
  margin-right:.5em;

}

.v-text-field >>> input {
  font-size:.9em;
}
.v-text-field >>> label {
  font-size:.9em;
}
.v-text-field >>> button {
  font-size:.8em;
}

p{
  font-size:.9em;
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

.v-btn{
  font-size:.7em !important;
}

.clrbtn {
  padding: 0.2em 0.5em;
  text-align: center;
  border-top-style: solid 1px grey;
  border-bottom-style: solid 1px grey;
}
</style>
