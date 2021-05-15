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
        v-model="articleSelected"
        :append-icon="articleFilter"
        :items="article"
        label="Article Title:"
        required
        dense
      />


      <v-autocomplete
        v-model="shipSelected"
        :append-icon="shipFilter"
        :items="ship"
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
        v-model="placeBuiltSelected"
        :append-icon="placeBuiltFilter"
        :items="placeBuilt"
        label="Place Built:"
        required
        dense
      />


      <v-autocomplete
        v-model="peopleSelected"
        :append-icon="peopleFilter"
        :items="people"
        label="People:"
        required
        dense
      />
    </v-form>

    <!-- <BaseButton -->
    <v-row
      v-show="SniderFilter"
      class="justify-center"
    >
      <v-btn
        @click="resetSniderSearchFilters"
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
name:'SniderQryFrm',


  props: {
    qryformtitle: {
      type: String,
      required: true,
      default: 'Query Frm',
    },

    },

  data() {
    return {
      SniderName:'Owners Registry ',
      articleSelected:'',
      shipSelected:'',
      shipTypeSelected:'',
      placeBuiltSelected:'',
      peopleSelected:'',
      msg:'',

      // visible: false,
      // SniderSelected:'',
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
    ...mapState('Snider',
    [
    'SniderCart',
    'SniderAppliedFilters',
    'SniderFilterList',
    'SniderCurrentFilter',
    'SniderGlobal',
    'SniderCartIsLoading',
    'SniderFilter',
    'ClearingSniderFilters',
    'SniderArticleFilter',
    'SniderShipFilter',
    'SniderShipTypeFilter ',
    'SniderPlaceBuiltFilter',
    'SniderPeopleFilter'
    ]),

      articleFilter(){
        return this.SniderArticleFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      shipFilter(){
        return this.SniderShipFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      shipTypeFilter(){
        return this.SniderShipTypeFilter ?  'mdi-filter' : 'mdi-menu-down'
      },


      placeBuiltFilter(){
        return this.SniderPlaceBuiltFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      // builderFilter(){
      //   return this.SniderbuilderFilter ?  'mdi-filter' : 'mdi-menu-down'
      // },

      peopleFilter(){
        return this.SniderPeopleFilter ?  'mdi-filter' : 'mdi-menu-down'
      },




      filtersOn(){
        return this.SniderFilter
      },

      clearingFilters(){
        return this.ClearingSniderFilters
      },

    article(){
      let tmp
        if(this.SniderFilter || this.SniderGlobal){
          tmp = this.SniderCurrentFilter.map((ele)=>{
          if(ele.articletitle) return ele.articletitle
          }).sort()
        return tmp
        }else{
          tmp = this.SniderCart.map((ele)=>{
            if(ele.articletitle) return ele.articletitle
        }).sort()
        let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })

        return tmp2

    }},

    ship(){
      let tmp
      if(this.SniderFilter || this.SniderGlobal){
        tmp = this.SniderCurrentFilter.map((ele)=>{
              if(ele.shipname) return ele.shipname
         }).sort()
       return tmp
       }else{
       tmp =this.SniderCart.map((ele)=>{
          if(ele.shipname) return ele.shipname
      }).sort()
       let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })

        return tmp2
   }},

    shipType(){
      let tmp
      if(this.SniderFilter || this.SniderGlobal){
        tmp = this.SniderCurrentFilter.map((ele)=>{
           if(ele.shiptype) return ele.shiptype
         }).sort()
       return tmp
       }else{
        tmp = this.SniderCart.map((ele)=>{
          if(ele.shiptype) return ele.shiptype
      }).sort()
       let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })

        return tmp2
   }},



    placeBuilt(){
      let tmp
      if(this.SniderFilter || this.SniderGlobal){
        tmp = this.SniderCurrentFilter.map((ele)=>{
             if(ele.places) return ele.places
         }).sort()
       return tmp
       }else{
        tmp = this.SniderCart.map((ele)=>{
            if(ele.places) return ele.places
      }).sort()
       let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })

        return tmp2
   }},

  //   builder(){
  //     if(this.SniderFilter || this.SniderGlobal){
  //       tmp = this.SniderCurrentFilter.map((ele)=>{
  //         if(ele.builder) return ele.builder
  //        }).sort()
  //      return tmp
  //      }else{
  //       return this.SniderCart.map((ele)=>{
  //           if(ele.builder) return ele.builder
  //     }).sort()
  //  }},

    people(){
      let tmp
      if(this.SniderFilter || this.SniderGlobal){
        tmp = this.SniderCurrentFilter.map((ele)=>{
                  if(ele.people) return ele.people
         }).sort()
       return tmp
       }else{
        tmp = this.SniderCart.map((ele)=>{
            if(ele.people) return ele.people
      }).sort()
       let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })

        return tmp2
   }},

  loadingDataTable(){
    return this.SniderCartIsLoading
  },

   numberOfFilters(){
    // return this.OwnersFilterList.length
    return this.SniderAppliedFilters.length
  },

  filtersInSync(){
    return this.SniderAppliedFilters.length === this.SniderFilterList.length
  }

  },

  watch: {

    articleSelected(val, oldVal) {
      // Note the key is the field name that represents each of the columns in the v-data-table
      if (val!='' && val != oldVal)
       this.applyFilterToCartwithRegExp({ key:"articletitle", value:val, varfilter:'articleSelected' })
    },
     shipSelected(val,oldVal){
      if (val!='' && val != oldVal)
      this.applyFilterToCartwithRegExp({ key:"shipname", value:val, varfilter:'shipSelected' })
     },
     shipTypeSelected(val, oldVal){
      if (val!='' && val != oldVal)
       this.applyFilterToCartwithRegExp({ key:"shiptype", value:val, varfilter:'shipTypeSelected' })
     },

      placeBuiltSelected(val, oldVal){
        if (val!='' && val != oldVal)
       this.applyFilterToCartwithRegExp({ key:"places", value:val, varfilter:'placeBuiltSelected' })
     },
    //  builderSelected(val, oldVal){
    //     if (val!='' && val != oldVal)
    //    this.applyFilterToCartwithRegExp({ key:"builder", value:val, varfilter:'shipSelected' })
    //  },
     peopleSelected(val, oldVal){
        if (val!='' && val != oldVal)
       this.applyFilterToCartwithRegExp({ key:"people", value:val, varfilter:'peopleSelected' })
     }

  },

  mounted() {
    // Bus.$on('shipsloaded', () => {
    //   this.shipsloading = false
    // })
  },

  methods: {
    ...mapActions('Snider',['setSniderCartIsLoading', 'clearSniderFilters', 'setSniderFilteredCart', 'removeSniderLastFilter', 'SniderGlobalSearch']),

    applyFilterToCartwithRegExp(payload){
      this.setSniderCartIsLoading(true)
      payload.value = new RegExp(payload.value, 'i')
      this.setSniderFilteredCart(payload)
      this.setSniderCartIsLoading(false)
    },

    resetSniderSearchFilters(){
      this.articleSelected='',
      this.shipSelected='',
      this.shipTypeSelected='',
      this.shipTypeSelected='',
      this.yearBuiltSelected='',
      this.builderSelected='',
      this.peopleSelected='',
      this.clearSniderFilters(true)
    },


    removeLastFilter(){
      let last = this.SniderFilterList.length-1
      let ele = this.SniderFilterList[last].varfilter
      switch(ele){
        case 'articleSelected':
          this.articleSelected = ''
          break;
        case 'shipSelected':
          this.shipSelected=''
          break;
        case 'shipTypeSelected':
          this.shipTypeSelected =''
          break;

        case 'placeBuiltSelected':
          this.placeBuiltSelected =''
          break;

        case 'peopleSelected':
          this.peopleSelected =''
          break;
      }
      this.removeSniderLastFilter()

    },



    // resetSearch(){
    //   this.$emit('clearSniderSummaryFrm')
    //   this.searchVariable=''
    //   this.resetSearchVariables()
    // },

    // getSniderSummaryList(val){
    //   if(val=='Select None'){
    //   this.$emit('clearSniderSummaryFrm')
    //   return
    //   }
    //   this.$emit('SnidersearchAll', this.allSelected)
    //   this.searchVariable = 'searchAll'
    //   this.resetSearchVariables()
    // },


    //   performGlobalSearch(){
    //   // alert(` Search Criteria ${this.globalSearch}`)
    //   this.$emit('SniderglobalSearch', this.globalSearch)
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
    //       // this.SniderSelected =''
    //       this.globalSearch = ''
    //       break

    //     case 'general':
    //      this.SniderSelected =''
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
