<template>
  <!--
MillsDisplayFrm
-->
  <div
    class="summaryfrm"
  >
    <h3>
      {{ formtitle.toUpperCase() }}
    </h3>
    <!-- <transition
      name="fade"
    > -->
    <div
      v-if="loadingCompleted"
    >
      <v-data-table
        dense
        :headers="headers"
        fixed-header
        :loading="isLoading"
        loading-text="Data is loading ... please wait!"
        :items="tableData"
        height="60vh"
        :footer-props="{
          'items-per-page-options':[100,200,300,400,500,1000,-1]}"
        :items-per-page="-1"
        class="elevation-6"
        @click:row="getDetailedRecord"
      />
    </div>
    <div
      v-else
    >
      <MillsFaux :height="height" />
    </div>
    <!-- </transition> -->


    <!-- <v-scale-transition
      origin="center center"
    > -->
    <transition
      name="moveleft"
      mode="in-out"
    >
      <MillsDetailPopUp
        v-show="showDetailFrm"
        :record="detailData"
        @closefrm="testfrm"
      />
    </transition>
    <!-- </v-scale-transition> -->
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import MillsDetailPopUp from '@/components/BaseComponents/BaseDetailPopUp.vue'
import MillsFaux from '@/components/Mills/MillsFaux.vue'
import APIServices from '@/services/ApiServices'
// import Bus from '@/services/Bus'


export default {
  name:"MillsDisplayFrmVue",
  components: {
    MillsDetailPopUp,
    MillsFaux
  },

  props: {
      headers:{
        type:Array,
        default: ()=> []
      },

      height:{
        type:[String, Number],
        default:'450'
      },

      formtitle:{
        type:String,
        default:''
      }

    },

    data() {
      return {
        rowsPerPage:'All',
        search: '',
        reason:'',
        detailData:{},
        showPopUp: false,
        showDetailFrm:false,
      }
    },

  computed:{
    ...mapState('Mills',['MillsCurrentFilter', 'MillsGlobal','MillsCart','MillsFilter', 'MillsCartIsLoading']),
    ...mapGetters('Mills',['MillsCartIsLoaded']),

    isLoading(){
      return this.MillsCartIsLoading
    },
// TODO: Standardize loading complete
    loadingCompleted(){
      return this.MillsCartIsLoaded
      // return false
    },

    tableData(){
      if(this.MillsFilter || this.MillsGlobal){
        return this.MillsCurrentFilter;
      }else{
        return this.MillsCart
      }
    },

  },



  methods: {

    testfrm(){
     this.showDetailFrm = false
    },

    getDetailedRecord(rowData) {
      const millsRecord = rowData.mills
      this.getMillsDetailFromServer(millsRecord)
    },

    getMillsDetailFromServer(millsRecord) {
      APIServices.getMillsDetailByMills(`'${millsRecord}'`)
        .then((response) => {
          if (!response.data.message) {
            this.fetchResults = ''
            this.detailData = response.data
            this.showPopUp = false
            this.showDetailFrm = true
            // console.log(this.detailData)
          } else {
            this.fetchResults = response.data.message
            this.showPopUp = true
          }
        })
        .catch((error) => {
          this.fetchResults = error
          this.showPopUp = true
        })
    },
  }

  }

</script>

<style scoped>
h3 {
  margin: 0;
}


.summaryfrm {
  position: relative;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 1em;
  width: 100%;
  background-color:hsl(175, 35%, 75%);
  font-size:.7em;
}



.v-data-table >>> table > tbody > tr > td {
font-size: 0.8rem !important;
}

/* Can use / deep / or >>> or ::v-deep to force style on classes within components */
.v-data-table >>> .sticky-header {
  position: sticky;
  top: 0px;
  height: 30px;
  font-weight: bold;
  /* background:var(--component-background-theme); */

   /* linear-gradient(
    to right bottom,
    hsla(120, 7%, 97%, 0),
    hsla(120, 100%, 99%, 0)
  ); */

}

/* .glasslook{
   background:var(--component-background-theme);
 } */

.v-data-table{
  font-size:.8em;
}

/* .theme--light.v-data-table{
   background:var(--component-background-theme);
    backdrop-filter:blur(4px);
} */

</style>
