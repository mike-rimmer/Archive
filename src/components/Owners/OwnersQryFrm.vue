<template>
  <div
    sm="12"
    class="queryform "
  >
    <div>
      <p style="font-weight:bold;">
        {{ formtitle.toUpperCase() }}
      </p>
    </div>
    <hr style="margin-bottom:1.5em; border:0; border-top: 1px solid black;">
    <v-form
      ref="form"
      lazy-validation
    >
      <v-autocomplete
        v-model="ownersSelected"
        :append-icon="ownersOwnersFilter"
        :items="owners"
        label="Owners"
        required
        dense
      />

      <v-autocomplete
        v-model="marnumSelected"
        :append-icon="marnumFilter"
        :items="marnum"
        label="Museum Number"
        required
        dense
      />

      <v-autocomplete
        v-model="portSelected"
        :append-icon="portFilter"
        :items="portnum"
        label="Port Id"
        required
        dense
      />

      <!--   <v-autocomplete
        v-model="ownersIdSelected"
        :append-icon="ownersIdFilter"
        :items="ownersId"
        label="Owners ID"
        required
        dense
      />

      <v-autocomplete
        v-model="sharesSelected"
        :append-icon="sharesFilter"
        :items="shares"
        label="Shares"
        required
        dense
      />
      <v-autocomplete
        v-model="purchasedSelected"
        :append-icon="purchasedFilter"
        :items="datePurchased"
        label="Purchase Shares"
        required
        dense
      />
      <v-autocomplete
        v-model="soldSelected"
        :append-icon="soldFilter"
        :items="dateSold"
        label="Date Sold"
        required
        dense
      />-->
      <v-autocomplete
        v-model="residenceSelected"
        :append-icon="residenceFilter"
        :items="residence"
        label="Residence of Owners"
        required
        dense
      />

      <!-- <v-select
            v-model="genSearch"
            :counter="10"
            label="Search all Fields by keyword(s)"
            required
            dense
          />

      <v-autocomplete
        v-model="reasonSelected"
        :items="reasonList"
        label="Reason Closed"
        required
        dense
      />-->
    </v-form>

    <v-row
      v-show="OwnersFilter"
      class="justify-center"
    >
      <v-btn
        @click="resetOwnersSearchFilters"
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
      <p>Data is Loading...<br> please wait</p>
    </v-row>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
name:'OwnersQryFrm',
  components: {
      },

  props: {
    // ships: {
    //   type: Array,
    //   default: function () {
    //     return ['Ship A', 'Ship B']
    //   },
    // },
    // owners: {
    //   type: Array,
    //   default: function () {
    //     return ['Bill Bishop', 'Mary Bishop']
    //   },
    // },

    formtitle: {
      type: String,
      required: true,
      default: 'Query Frm',
    }


  },
  data() {
    return {
      msg:'',
      ownersSelected:'',
      marnumSelected:'',
      portSelected:'',
      ownersIdSelected:'',
      sharesSelected:'',
      purchasedSelected:'',
      soldSelected:'',
      residenceSelected:'',
    }
  },
  computed: {
    ...mapState('Owners',
    [
    'OwnersCart', 'OwnersAppliedFilters', 'OwnersFilterList', 'OwnersCurrentFilter',
    'OwnersGlobal',
    'OwnersCartIsLoading',
    'OwnersFilter',
    'ClearingOwnersFilters',
    'OwnersOwnersFilter',
    'OwnersMarmumFilter',
    'OwnersPortIDFilter',
    'OwnersOwnersIDFilter',
    'OwnersSharesFilter',
    'OwnersPurchasedFilter',
    'OwnersSoldFilter',
    'OwnersResidenceFilter',
     ]),

     owners(){
       let tmp
        if(this.OwnersFilter || this.OwnersGlobal){
        tmp = this.OwnersCurrentFilter.map((ele)=>{
         if(ele.owner !='' || ele.owner.trim() !=='undefined'){
          return ele.owner
         }
         }).sort()
         return tmp
       }else{
       tmp = this.OwnersCart.map((ele)=>{
           if(ele.owner !='' || ele.owner.trim() !=='undefined')
          return ele.owner
       }).sort()
         let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log("Owners", tmp2.length)
        return tmp2
     }},

   marnum(){
     let tmp
       if(this.OwnersFilter || this.OwnersGlobal){
        tmp = this.OwnersCurrentFilter.map((ele)=>{
         if(ele.marnum !='' || ele.marnum.trim() !=='undefined'){
          return ele.marnum
         }
         }).sort()
         return tmp
       }else{
       tmp = this.OwnersCart.map((ele)=>{
        if(ele.marnum !='' || ele.marnum.trim() !=='undefined')
         return ele.marnum
       }).sort()
         let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log("MarNum", tmp2.length)
        return tmp2
     }},

   portnum(){
     let tmp
       if(this.OwnersFilter || this.OwnersGlobal){
        tmp = this.OwnersCurrentFilter.map((ele)=>{
         if(ele.portnum !='' || ele.portnum.trim() !=='undefined'){
          return ele.portnum
         }
         }).sort()
         return tmp
       }else{
     tmp = this.OwnersCart.map((ele)=>{
        if(ele.portnum !='' || ele.portnum.trim() !=='undefined')
       return ele.portnum
      }).sort()
        let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Port Num',tmp2.length)
        return tmp2

    }},



    residence(){
      let tmp
      if(this.OwnersFilter || this.OwnersGlobal){
        tmp = this.OwnersCurrentFilter.map((ele)=>{
         if(ele.residence !='' || ele.residence.trim() !=='undefined'){
          return ele.residence
         }
         }).sort()
         return tmp
       }else{
        tmp = this.OwnersCart.map((ele)=>{
         if(ele.residence !='' || ele.residence.trim() !=='undefined'){
          return ele.residence
         }
      }).sort()
        let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log("Residence", tmp2.length)
        return tmp2
    }},



    filtersOn(){
     return this.OwnersFilter
   },

    loadingDataTable(){
    return this.OwnersCartIsLoading
  },

    ownersOwnersFilter(){
       return this. OwnersOwnersFilter ?  'mdi-filter' : 'mdi-menu-down'
     },

    marnumFilter(){
      return this.OwnersMarmumFilter ? 'mdi-filter' : 'mdi-menu-down'
    },

    portFilter(){
       return this.OwnersPortIDFilter ?  'mdi-filter' : 'mdi-menu-down'
     },

    ownersIdFilter(){
       return this.OwnersOwnersIDFilter ?  'mdi-filter' : 'mdi-menu-down'
    },

    sharesFilter(){
       return this.OwnersSharesFilter ?  'mdi-filter' : 'mdi-menu-down'
    },

   purchasedFilter(){
     return this.OwnersPurchasedFilter ?  'mdi-filter' : 'mdi-menu-down'
   },

  soldFilter(){
    return this.OwnersSoldFilter ? 'mdi-filter' : 'mdi-menu-down'
  },

  residenceFilter(){
     return this.OwnersResidenceFilter ?  'mdi-filter' : 'mdi-menu-down'
   },

   clearingFilters(){
     return this.ClearingOwnersFilters
   },

  numberOfFilters(){
    // return this.OwnersFilterList.length
    return this.OwnersAppliedFilters.length
  },

  filtersInSync(){
    return this.OwnersAppliedFilters.length === this.OwnersFilterList.length
  }


  },

  watch: {
    ownersSelected(val, oldval) {
       if (val!='' && val != oldval){
           val = new RegExp(val, 'i')
      // Note the key is the field name that represents each of the columns in the v-data-table
      this.applyFilterToCartwithRegExp({ key:"owner", value:val, varfilter:'ownersSelected' })
       }
    },

    marnumSelected(val, oldval) {

      if (val!='' && val != oldval){
        val = RegExp( '\\b' + val + '\\b','i')
        this.applyFilterToCartwithRegExp({ key:"marnum", value:val, varfilter:'marnumSelected' })
      }
    },

    portSelected(val, oldval) {

      if (val!='' && val != oldval){
         val = new RegExp(val, 'i')
         this.applyFilterToCartwithRegExp({ key:'portnum', value:val, varfilter:'portSelected' })
       }
    },

    ownersIdSelected(val, oldval) {

      if (val!='' && val != oldval){
        val = new RegExp(val, 'i')
        this.applyFilterToCartwithRegExp({ key:"ownersnum", value:val, varfilter:'ownersIdSelected' })
       }
    },


    sharesSelected(val, oldval) {

      if (val!='' && val != oldval){
        val = new RegExp(val, 'i')
        this.applyFilterToCartwithRegExp({ key:"shares", value:val, varfilter:'sharesSelected' })
       }
    },


    purchaseSelected(val, oldval) {

      if (val!='' && val != oldval){
       val = new RegExp(val, 'i')
       this.applyFilterToCartwithRegExp({ key:"datebought", value:val, varfilter:'purchaseSelected' })
       }
    },
    SoldSelected(val, oldval) {

      if (val!='' && val != oldval){
       val = new RegExp(val, 'i')
       this.applyFilterToCartwithRegExp({ key:"datesold", value:val, varfilter:'SoldSelected' })
       }
    },
    residenceSelected(val, oldval) {

      if (val!='' && val != oldval){
        val = new RegExp(val, 'i')
        this.applyFilterToCartwithRegExp({ key:"residence", value:val, varfilter:'residenceSelected' })
       }
    },
  },



  methods: {
      ...mapActions('Owners',
      ['setOwnersCartIsLoading', 'clearOwnersFilters', 'setOwnersFilteredCart', 'removeOwnersLastFilter', 'OwnersGlobalSearch']),

    applyFilterToCartwithRegExp(payload){
      // console.time()
      // console.log('%cFilter Applied','background-color:green; color:white;')
        this.setOwnersCartIsLoading(true)
        // payload.value = new RegExp(payload.value, 'i')
        this.setOwnersFilteredCart(payload)
        this.setOwnersCartIsLoading(false)
    },

    resetOwnersSearchFilters(){
    //  Remove the current selection from each of the picklists
      this.ownersSelected = '',
      this.marnumSelected = '',
      this.portSelected = '',
      this.ownersIdSelected ='',
      this.sharesSelected ='',
      this.purchaseSelected = '',
      this.soldSelected='',
      this.residenceSelected='',
      this.clearOwnersFilters(true)
    },

    removeLastFilter(){
      let last = this.OwnersFilterList.length-1
      let ele = this.OwnersFilterList[last].varfilter
      switch(ele){
        case 'ownersSelected':
          this.ownersSelected = ''
          break;
        case 'marnumSelected':
          this.marnumSelected=''
          break;
        case 'portSelected':
          this.portSelected =''
          break;
        case 'ownersIdSelected':
          this.ownersIDSelected =''
          break;
        case 'sharesSelected':
          this.sharesSelected =''
          break;
        case 'purchaseSelected':
          this.purchaseSelected =''
          break;
        case 'soldSelected':
          this.soldSelected =''
          break;
        case 'residenceSelected':
          this.residenceSelected =''
          break;
      }
      this.removeOwnersLastFilter()

    },
  },
}
</script>

<style scoped>
.queryform {
  max-height:60vhpx;
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
  font-size:.9em;
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
