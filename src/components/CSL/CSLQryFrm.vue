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
        :items="Notis"
        label="Notis No:"
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
    <div
      v-if="showCSLFilter"
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
        @click="resetCSLSearchFilters"
      >
        Clear All Filters
      </v-btn>
    </div>

    <div
      v-else
      style="display:flex; flex-direction:column;justify-content:center; background-color:#A9D6D1; color:black; align-items:center; padding:1em; border-radius:4px;"
    >
      <span>UnFiltered</span>
    </div>

    <div
      v-show="loadingDataTable"
      style="display:flex; color:white; background-color:green; justify-content:center; align-items:center;"
    >
      <p>Data is Loading...<br>please wait</p>
    </div>
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
    'CSLNotisFilter',
    'CSLOfficialNumFilter',
    'CSLVesselFilter',
    'CSLVesselTypeFilter',
    'CSLYearBuiltFilter',
    'CSLBuilderFilter',
    'CSLBuildCountryFilter',
    ]),

      notisFilter(){
        return this.CSLNotisFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      officialNumFilter(){
        return this.CSLOfficialNumFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      shipNameFilter(){
        return this.CSLVesselFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      shipTypeFilter(){
        return this.CSLVesselTypeFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      yearBuiltFilter(){
        return this.CSLYearBuiltFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      builderFilter(){
        return this.CSLBuilderFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      countryFilter(){
        return this.CSLBuildCountryFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      filtersOn(){
        return this.CSLFilter
      },

      clearingFilters(){
        return this.ClearingCSLFilters
      },

      showCSLFilter(){
         return this.CSLFilter
      },

      showClearAllFilterButton(){
        if(this.CSLFilterList.length > 1){
          return true
        }else{
          return false
        }
      },

      Notis(){
        if(this.CSLCart.length > 0){
         let tmp
          if(this.CSLFilter || this.CSLGlobal){
            tmp = this.CSLCurrentFilter.map((ele)=>{
            return ele.Notis
            }).sort()
          return tmp
          }else{
        tmp = this.CSLCart.map((ele)=>{
          return ele.Notis
        }).sort()
        var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Notis', tmp2.length)
        return tmp2
    }}else{
      return []
    }
    },

    officialNum(){
       if(this.CSLCart.length > 0){
      let tmp
      if(this.CSLFilter || this.CSLGlobal){
        tmp = this.CSLCurrentFilter.map((ele)=>{
          if(ele.num != '' || ele.num.trim() !== 'undefined')
        return ele.num
         }).sort()
       return tmp
       }else{
        tmp = this.CSLCart.map((ele)=>{
          if(ele.num != '' || ele.num.trim() !== 'undefined')
          return ele.num
      }).sort()
         var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('num', tmp2.length)
        return tmp2
   }}
   else{return []}
   },

    shipName(){
       if(this.CSLCart.length > 0){
      var tmp
      if(this.CSLFilter || this.CSLGlobal){
        tmp = this.CSLCurrentFilter.map((ele)=>{
        if(ele.name != '' || ele.name.trim() !== 'undefined')
           return ele.name
         }).sort()
       return tmp
       }else{
        tmp = this.CSLCart.map((ele)=>{
          if(ele.name != '' || ele.name.trim() !== 'undefined')
          return ele.name
      }).sort()
      var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Ship Name', tmp2.length)
        return tmp2

   }}else{return []}},

    shipType(){
       if(this.CSLCart.length > 0){
      let tmp
      if(this.CSLFilter || this.CSLGlobal){
        tmp = this.CSLCurrentFilter.map((ele)=>{
        if(ele.type != '' || ele.type.trim() !== 'undefined')
        return ele.type
         }).sort()
       return tmp
       }else{
        tmp = this.CSLCart.map((ele)=>{
         if(ele.type != '' || ele.type.trim() !== 'undefined')
          return ele.type
      }).sort()
       var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Ship Type', tmp2.length)
        return tmp2

   }} else {return []}},

    yearBuilt(){
       if(this.CSLCart.length > 0){
      let tmp
      if(this.CSLFilter || this.CSLGlobal){
        tmp = this.CSLCurrentFilter.map((ele)=>{
        if(ele.yearbuilt != '' || ele.yearbuilt.trim() !== 'undefined')
              return ele.yearbuilt
         }).sort()
       return tmp
       }else{
        tmp = this.CSLCart.map((ele)=>{
        if(ele.yearbuilt != '' || ele.yearbuilt.trim() !== 'undefined')
            return ele.yearbuilt
      }).sort()
          var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Year Built', tmp2.length)
        return tmp2
       }
   }else{return []}},

    builder(){
       if(this.CSLCart.length > 0){
      let tmp
      if(this.CSLFilter || this.CSLGlobal){
        tmp = this.CSLCurrentFilter.map((ele)=>{
        if(ele.builder != '' || ele.builder.trim() !== 'undefined')
          return ele.builder
         }).sort()
       return tmp
       }else{
      tmp= this.CSLCart.map((ele)=>{
      if(ele.builder != '' || ele.builder.trim() !== 'undefined')
             return ele.builder
      }).sort()
         var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Builders', tmp2.length)
        return tmp2
   }}else{return []}
    },

    country(){
       if(this.CSLCart.length > 0){
      let tmp
      if(this.CSLFilter || this.CSLGlobal){
      tmp = this.CSLCurrentFilter.map((ele)=>{
      if(ele.builder != '' || ele.builder.trim() !== 'undefined')
      return ele.buildcntry
      }).sort()
       return tmp
       }else{
        tmp = this.CSLCart.map((ele)=>{
        if(ele.builder != '' || ele.builder.trim() !== 'undefined')
        return ele.buildcntry
      }).sort()
         var tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('OffNums', tmp2.length)
        return tmp2
   }}else {return []}},

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
      if (val!='' && val != oldVal){
        let tmp = '\\'+ val.substring(0,6)+'\\'+val.substring(6)
       this.applyFilterToCartwithRegExp({ key:"Notis", value:tmp, varfilter:'notisSelected' })
      }
    },

     shipNameSelected(val, oldVal){
      if (val!='' && val != oldVal)
        this.applyFilterToCartwithRegExp({ key:"name", value:val, varfilter:'shipNameSelected' })
      },

     officialNumSelected(val,oldVal){
      if (val!='' && val != oldVal)
      this.applyFilterToCartwithRegExp({ key:"num", value:val, varfilter:'officialNumSelected' })
     },

     shipTypeSelected(val, oldVal){
      if (val!='' && val != oldVal){
       var exp = val.indexOf('(')
       if(exp != -1){
         exp = this.optimizeExp(val)
         this.applyFilterToCartwithRegExp({ key:"type", value:exp, varfilter:'shipTypeSelected' })
       }else{
         this.applyFilterToCartwithRegExp({ key:"type", value:val, varfilter:'shipTypeSelected' })
       }

      }
     },
      yearBuiltSelected(val, oldVal){
        if (val!='' && val != oldVal)
       this.applyFilterToCartwithRegExp({ key:"yearbuilt", value:val, varfilter:'yearBuiltSelected' })
     },
     builderSelected(val, oldVal){
        if (val!='' && val != oldVal)
       this.applyFilterToCartwithRegExp({ key:"builder", value:val, varfilter:'builderSelected' })
     },
     countrySelected(val, oldVal){
        if (val!='' && val != oldVal)
       this.applyFilterToCartwithRegExp({ key:"buildcntry", value:val, varfilter:'countrySelected' })
     }

  },

  mounted() {
    // Bus.$on('shipsloaded', () => {
    //   this.shipsloading = false
    // })
  },

  methods: {
    ...mapActions('CSL',['setCSLCartIsLoading', 'clearCSLFilters', 'setCSLFilteredCart', 'removeCSLLastFilter', 'CSLGlobalSearch']),

    optimizeExp(val){
      // find index of 1st occurance of '(')
      const p1 = val.indexOf('(')
      const p2 = -1
      let newstr = val.split('')
      newstr.splice(p1,0,'\\')
      newstr.splice(p2,0,'\\')
      return newstr.join('')
    },

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
