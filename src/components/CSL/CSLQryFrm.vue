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
      lazy-validation
    >
      <v-autocomplete
        v-model="notisSelected"
        :append-icon="notisFilter"
        :items="notis"
        label="MarMuseum No:"
        required
        dense
      />


      <v-autocomplete
        v-model="officialNumSelected"
        :append-icon="officialNumFilter"
        :items="officialNum"
        label="Official Number:"
        required
        dense
      />

      <v-autocomplete
        v-model="shipNameSelected"
        :append-icon="shipNameFilter"
        :items="shipName"
        label="Ship Name:"
        required
        dense
      />
      <v-autocomplete
        v-model="shipTypeSelected"
        :append-icon="shipTypeFilter"
        :items="shipType"
        label="Ship Type:"
        required
        dense
      />
      <v-autocomplete
        v-model="yearBuiltSelected"
        :append-icon="yearBuiltFilter"
        :items="yearBuilt"
        label="Year Built:"
        required
        dense
      />
      <v-autocomplete
        v-model="builderSelected"
        :append-icon="builderFilter"
        :items="builder"
        label="Builders Name:"
        required
        dense
      />

      <v-autocomplete
        v-model="countrySelected"
        :append-icon="countryFilter"
        :items="country"
        label="Country Built:"
        required
        dense
      />
    </v-form>

    <!-- <BaseButton -->
    <v-row
      v-show="CSLFilter"
      class="justify-center"
    >
      <v-btn
        @click="resetCSLSearchFilters"
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
        {{ numberOfFilters }} {{ filtersInSync }}
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
import {mapState, mapActions} from 'vuex'
export default {
name:'CSLQryFrm',


  props: {
    qryformtitle: {
      type: String,
      required: true,
      default: 'Query Frm',
    },

    },

  data() {
    return {
      CSLName:'Owners Registry ',
      notisSelected:'',
      officialNumSelected:'',
      shipNameSelected:'',
      shipTypeSelected:'',
      yearBuiltSelected:'',
      builderSelected:'',
      countrySelected:'',
      msg:'',

      // visible: false,
      // CSLSelected:'',
      // allSelected:'',
      // allRecords:[
      //   'Select All Records',
      //   'Select None'
      // ],
      // searchVariable: '',
      // globalSearch:'',
      // picked: 'general',
      // multiple: true,
    }
  },
  computed: {
    ...mapState('CSL',
    [
    'CSLCart',
    'CSLAppliedFilters',
    'CSLFilterList',
    'CSLCurrentFilter',
    'CSLGlobal',
    'CSLCartIsLoading',
    'CSLFilter',
    'ClearingCSLFilters',
    'CSLnotisFilter',
    'CSLofficialNumFilter',
    'CSLshipNameFilter ',
    'CSLshipTypeFilter',
    'CSLbuiltFilter',
    'CSLbuilderFilter',
    'CSLcountryFilter'
    ]),

      notisFilter(){
        return this.CSLnotisFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      officialNumFilter(){
        return this.CSLofficialNumFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      shipNameFilter(){
        return this.CSLshipNameFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      shipTypeFilter(){
        return this.CSLshipTypeFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      yearBuiltFilter(){
        return this.CSLbuiltFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      builderFilter(){
        return this.CSLbuilderFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      countryFilter(){
        return this.CSLcountryFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      filtersOn(){
        return this.CSLFilter
      },

      clearingFilters(){
        return this.ClearingCSLFilters
      },

      notis(){
        if(this.CSLFilter || this.CSLGlobal){
          const tmp = this.CSLCurrentFilter.map((ele)=>{
          if(ele.notis) return ele.notis
          }).sort()
        return tmp
        }else{
          return this.CSLCart.map((ele)=>{
            if(ele.notis) return ele.notis
        }).sort()
    }},

    officialNum(){
      if(this.CSLFilter || this.CSLGlobal){
        const tmp = this.CSLCurrentFilter.map((ele)=>{
              if(ele.num) return ele.num
         }).sort()
       return tmp
       }else{
        return this.CSLCart.map((ele)=>{
          if(ele.num) return ele.num
      }).sort()
   }},

    shipName(){
      if(this.CSLFilter || this.CSLGlobal){
        const tmp = this.CSLCurrentFilter.map((ele)=>{
           if(ele.name) return ele.name
         }).sort()
       return tmp
       }else{
        return this.CSLCart.map((ele)=>{
          if(ele.name) return ele.name
      }).sort()
   }},

    shipType(){
      if(this.CSLFilter || this.CSLGlobal){
        const tmp = this.CSLCurrentFilter.map((ele)=>{
        if(ele.type) return ele.type
         }).sort()
       return tmp
       }else{
        return this.CSLCart.map((ele)=>{
          if(ele.type) return ele.type
      }).sort()
   }},

    yearBuilt(){
      if(this.CSLFilter || this.CSLGlobal){
        const tmp = this.CSLCurrentFilter.map((ele)=>{
             if(ele.yearbuilt) return ele.yearbuilt
         }).sort()
       return tmp
       }else{
        return this.CSLCart.map((ele)=>{
            if(ele.yearbuilt) return ele.yearbuilt
      }).sort()
   }},

    builder(){
      if(this.CSLFilter || this.CSLGlobal){
        const tmp = this.CSLCurrentFilter.map((ele)=>{
          if(ele.builder) return ele.builder
         }).sort()
       return tmp
       }else{
        return this.CSLCart.map((ele)=>{
            if(ele.builder) return ele.builder
      }).sort()
   }},

    country(){
      if(this.CSLFilter || this.CSLGlobal){
        const tmp = this.CSLCurrentFilter.map((ele)=>{
                  if(ele.buildcntry) return ele.buildcntry
         }).sort()
       return tmp
       }else{
        return this.CSLCart.map((ele)=>{
            if(ele.buildcntry) return ele.buildcntry
      }).sort()
   }},

  loadingDataTable(){
    return this.CSLCartIsLoading
  },

   numberOfFilters(){
    // return this.OwnersFilterList.length
    return this.CSLAppliedFilters.length
  },

  filtersInSync(){
    return this.CSLAppliedFilters.length === this.CSLFilterList.length
  }

  },

  watch: {

    notisSelected(val, oldVal) {
      // Note the key is the field name that represents each of the columns in the v-data-table
      if (val!='' && val != oldVal)
       this.applyFilterToCartwithRegExp({ key:"notis", value:val, varfilter:'notisSelected' })
    },
     officialNumSelected(val,oldVal){
      if (val!='' && val != oldVal)
      this.applyFilterToCartwithRegExp({ key:"num", value:val, varfilter:'officialNumSelected' })
     },
     shipNameSelected(val, oldVal){
      if (val!='' && val != oldVal)
       this.applyFilterToCartwithRegExp({ key:"name", value:val, varfilter:'shipNameSelected' })
     },
     shipTypeSelected(val, oldVal){
        if (val!='' && val != oldVal)
       this.applyFilterToCartwithRegExp({ key:"type", value:val, varfilter:'shipTypeSelected' })
     },
      yearBuiltSelected(val, oldVal){
        if (val!='' && val != oldVal)
       this.applyFilterToCartwithRegExp({ key:"yearbuilt", value:val, varfilter:'officialNumSelected' })
     },
     builderSelected(val, oldVal){
        if (val!='' && val != oldVal)
       this.applyFilterToCartwithRegExp({ key:"builder", value:val, varfilter:'officialNumSelected' })
     },
     countrySelected(val, oldVal){
        if (val!='' && val != oldVal)
       this.applyFilterToCartwithRegExp({ key:"buildcntry", value:val, varfilter:'officialNumSelected' })
     }

  },

  mounted() {
    // Bus.$on('shipsloaded', () => {
    //   this.shipsloading = false
    // })
  },

  methods: {
    ...mapActions('CSL',['setCSLCartIsLoading', 'clearCSLFilters', 'setCSLFilteredCart', 'removeCSLLastFilter', 'CSLGlobalSearch']),

    applyFilterToCartwithRegExp(payload){
      this.setCSLCartIsLoading(true)
      payload.value = new RegExp(payload.value, 'i')
      this.setCSLFilteredCart(payload)
      this.setCSLCartIsLoading(false)
    },

    resetCSLSearchFilters(){
      this.notisSelected='',
      this.officialNumSelected='',
      this.shipNameSelected='',
      this.shipTypeSelected='',
      this.yearBuiltSelected='',
      this.builderSelected='',
      this.countrySelected='',
      this.clearCSLFilters(true)
    },


    removeLastFilter(){
      let last = this.CSLFilterList.length-1
      let ele = this.CSLFilterList[last].varfilter
      switch(ele){
        case 'notisSelected':
          this.notisSelected = ''
          break;
        case 'officialNumSelected':
          this.officialNumSelected=''
          break;
        case 'shipNameSelected':
          this.shipNameSelected =''
          break;
        case 'shipTypeSelected':
          this.shipTypeSelected =''
          break;
        case 'yearBuiltSelected':
          this.yearBuiltSelected =''
          break;
        case 'builderSelected':
          this.builderSelected =''
          break;
        case 'countrySelected':
          this.countrySelected =''
          break;
      }
      this.removeCSLLastFilter()

    },



    // resetSearch(){
    //   this.$emit('clearCSLSummaryFrm')
    //   this.searchVariable=''
    //   this.resetSearchVariables()
    // },

    // getCSLSummaryList(val){
    //   if(val=='Select None'){
    //   this.$emit('clearCSLSummaryFrm')
    //   return
    //   }
    //   this.$emit('CSLsearchAll', this.allSelected)
    //   this.searchVariable = 'searchAll'
    //   this.resetSearchVariables()
    // },


    //   performGlobalSearch(){
    //   // alert(` Search Criteria ${this.globalSearch}`)
    //   this.$emit('CSLglobalSearch', this.globalSearch)
    //   this.searchVariable = 'general'
    //   this.resetSearchVariables()
    // },



    // resetSearchVariables() {
    //   // close the popupfrm showing record details
    //   this.$emit('hidePopUp')
    //   switch (this.searchVariable) {
    //     case '':
    //       this.allSelected =''
    //       this.globalSearch = ''
    //       break

    //     case 'searchAll':
    //       // this.CSLSelected =''
    //       this.globalSearch = ''
    //       break

    //     case 'general':
    //      this.CSLSelected =''
    //       // this.globalSearch = ''
    //       break

    //     default:
    //   }
    // },
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
  /* background:var(--component-background-theme);
  backdrop-filter:blur(4px); */
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
