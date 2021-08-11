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
        v-model="articleNumSelected"
        :append-icon="articleNumFilter"
        :items="articleNum"
        label="Article Number:"
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
    <div
      v-if="SniderFilter"
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
        @click="resetSniderSearchFilters"
      >
        Clear All Filters
      </v-btn>
    </div>


    <div
      v-else
      style="display:flex; flex-direction:column;justify-content:center; background-color:#A9D6D1; color:black; align-items:center; padding:1em; border-radius:4px;"
    >
      <p>UnFiltered</p>
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
      articleNumSelected:'',
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
    'SniderArticleNumFilter',
    'SniderShipFilter',
    'SniderShipTypeFilter',
    'SniderPlaceBuiltFilter',
    'SniderPeopleFilter'
    ]),

      articleFilter(){
        return this.SniderArticleFilter ?  'mdi-filter' : 'mdi-menu-down'
      },

      articleNumFilter(){
        return this.SniderArticleNumFilter ?  'mdi-filter' : 'mdi-menu-down'
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

      showClearAllFilterButton(){
        if(this.SniderFilterList.length > 1){
          return true
        }else{
          return false
        }
      },

    article(){
      if(this.SniderCart.length > 0){
      let tmp
        if(this.SniderFilter || this.SniderGlobal){
          tmp = this.SniderCurrentFilter.map((ele)=>{
          if (ele.articletitle != '' || ele.articletitle.trim() !== 'undefined')
          return ele.articletitle
          }).sort()
        return tmp
        }else{
          tmp = this.SniderCart.map((ele)=>{
           if (ele.articletitle != '' || ele.articletitle.trim() !== 'undefined')
            return ele.articletitle
        }).sort()
        let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Article Title', tmp2.length)
        return tmp2

    }}else{return []}
    },

    articleNum(){
      if(this.SniderCart.length > 0){
      let tmp
        if(this.SniderFilter || this.SniderGlobal){
          tmp = this.SniderCurrentFilter.map((ele)=>{
          if (ele.articlenum != '' || ele.articlenum.trim() !== 'undefined')
          return parseInt(ele.articlenum)
          }).sort()
        return tmp
        }else{
          tmp = this.SniderCart.map((ele)=>{
           if (ele.articlenum != '' || ele.articlenum.trim() !== 'undefined')
            return parseInt(ele.articlenum)
        }).sort((a, b)=> parseInt(a) > parseInt(b))
        let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Article Number', tmp2.length)
        return tmp2

    }}else{return []}
    },

    ship(){
      if(this.SniderCart.length > 0){
      let tmp
      if(this.SniderFilter || this.SniderGlobal){
        tmp = this.SniderCurrentFilter.map((ele)=>{
        if (ele.shipname != '' || ele.shipname.trim() !== 'undefined')
              return ele.shipname
         }).sort()
       return tmp
       }else{
       tmp =this.SniderCart.map((ele)=>{
        if (ele.shipname != '' || ele.shipname.trim() !== 'undefined')
          return ele.shipname
      }).sort()
       let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Ship Name',tmp2.length)
        return tmp2
   }}else{return []}},

    shipType(){
      if(this.SniderCart.length > 0){
      let tmp
      if(this.SniderFilter || this.SniderGlobal){
        tmp = this.SniderCurrentFilter.map((ele)=>{
        if (ele.shiptype != '' || ele.shiptype.trim() !== 'undefined')
        return ele.shiptype
         }).sort()
       return tmp
       }else{
        tmp = this.SniderCart.map((ele)=>{
        if (ele.shiptype != '' || ele.shiptype.trim() !== 'undefined')
          return ele.shiptype
      }).sort()
       let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Ship type', tmp2.length)
        return tmp2
   }}else{return []}},



    placeBuilt(){
      if(this.SniderCart.length > 0){
      let tmp
      if(this.SniderFilter || this.SniderGlobal){
        tmp = this.SniderCurrentFilter.map((ele)=>{
       if (ele.wherebuilt != '' || ele.wherebuilt.trim() !== 'undefined')
             return ele.wherebuilt
         }).sort()
       return tmp
       }else{
        tmp = this.SniderCart.map((ele)=>{
             if (ele.wherebuilt != '' || ele.wherebuilt.trim() !== 'undefined')
            return ele.wherebuilt
      }).sort()
       let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('Places', tmp2.length)
        return tmp2
   }}else{return []}},

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
      if(this.SniderCart.length > 0){
      let tmp
      if(this.SniderFilter || this.SniderGlobal){
        tmp = this.SniderCurrentFilter.map((ele)=>{
        if (ele.people != '' || ele.people.trim() !== 'undefined')
                  return ele.people
         }).sort()
       return tmp
       }else{
        tmp = this.SniderCart.map((ele)=>{
             if (ele.people != '' || ele.people.trim() !== 'undefined')
          return ele.people
      }).sort()
       let tmp2 = tmp.filter((ele, index, array) => {
          return array.indexOf(ele) == index
        })
        console.log('People', tmp2.length)
        return tmp2
   }}else{return []}},

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

    articleNumSelected(val, oldVal) {
      // Note the key is the field name that represents each of the columns in the v-data-table
      if (val!='' && val != oldVal){
       const exp = new RegExp('\\b'+ val +'\\b')
       this.applyFilterToCartwithRegExp({ key:"articlenum", value:exp, varfilter:'articleNumSelected' })
    }
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
       this.applyFilterToCartwithRegExp({ key:"wherebuilt", value:val, varfilter:'placeBuiltSelected' })
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
      this.articleNumSelected='',
      this.shipSelected='',
      this.shipTypeSelected='',
      this.placeBuiltSelected='',
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
        case 'articleNumSelected':
          this.articleNumSelected = ''
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
