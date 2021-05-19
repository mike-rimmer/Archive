<template>
  <!--
**********
Note: This Form receives a prop 'wallsData' containing records from the server
The records can be sorted asc/dec by clicking the applicable column header
If a user click on a row a function is called to fetch the detailed info from the server which is then displayed on Card 'millsDetailsPopUp'.
**********
-->
  <div class="summaryfrm">
    <div>
      <h3>
        {{ formtitle.toUpperCase() }}
      </h3>

      <div>
        <v-data-table
          dense
          :headers="headers"
          fixed-header
          :items="tableData"
          height="60vh"
          :footer-props="{
            'items-per-page-options':[100,200,300,400,500,1000,-1]}"
          :items-per-page="-1"
          class="elevation-6"
          @click:row="getDetailedRecord"
        />
      </div>

      <transition name="moveleft">
        <BaseDetailPopUp
          v-show="recordAvailable"
          :record="detailData"
          :map-info="mapInfo"
          @closefrm="closePopUp"
        />
      </transition>
    </div>
  </div>
</template>

<script>
// import millsData from '@/data/datasource';
// import Bus from '@/services/Bus';
// const BaseDetailPopUp = () => import('@/components/BaseComponents/BaseDetailPopUp.vue');
// const APIServices = () => import('../../services/ApiServices.js');

import {mapState, mapGetters, mapActions } from 'vuex'
import BaseDetailPopUp from '@/components/BaseComponents/BaseDetailPopUp';
export default {
  components: {
    BaseDetailPopUp
  },

  props: {
    height:{
      type:[String, Number],
      default:'450'
    },

    headers:{
      type:Array,
      default: ()=>[]
    },


    formtitle:{
      type:String,
      default:'Dont Forget To Send Title'
    }
  },

  data() {
    return {
      search: '',



      showDetailFrm: false,
      // // Used to initially test the v-data-table
      // millsDatatest: millsData.testData,
      // detailData: {},
      // rowsPerPage:12
    }
  },

  computed:{
    ...mapState('Wallace', ['WallaceCart', 'WallaceCurrentFilter', 'WallaceGlobal','WallaceFilter', 'WallaceCartIsLoading']),
    ...mapGetters('Wallace',['WallacePopUpCardDetail']),

    detailData(){
      return this.WallacePopUpCardDetail
    },

    recordAvailable(){
       if(! this.isEmpty(this.WallacePopUpCardDetail)){
         return true
       }else{
         return false
       }
    },

   mapInfo(){
     if(this.recordAvailable){
       const {url, name} = this.WallacePopUpCardDetail
      if( url == null ){
        return  ({url:'wallace(0).jpg', name:'Front Page'})
      }else{
        return {url, name}
      }
     }
        return  ({url:'wallace(0).jpg', name:'Front Page'})
    },


    tableData(){
      if(this.WallaceFilter || this.WallaceGlobal){
        return this.WallaceCurrentFilter
      }else{
        return this.WallaceCart
      }
    },

  },
  mounted() {

  },

  methods: {
    ...mapActions('Wallace', ['getWallsDetailFromServer', 'removeDetailedRecord']),

    closePopUp(){
      this.removeDetailedRecord()
    },

    isEmpty(obj){
      if(Object.keys(obj).length === 0){
        return true
      }else{
        return false
      }
    },

    //  isEmpty(url){
    //   if(url==''){
    //     return true
    //   }
    //   return false
    // },

    getDetailedRecord(rowData) {
      const id = rowData.id
      this.getWallsDetailFromServer(id)
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
  background-color:hsl(174, 35%,75%);
  font-size: 0.7em;
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
  /* background: var(--component-background-theme); */
}

/* .glasslook {
  background: var(--component-background-theme);
} */

.v-data-table {
  font-size: 0.8em;
}

.theme--light.v-data-table {
  /* background: var(--component-background-theme);
  backdrop-filter: blur(4px); */
  /* background-color: rgba(100,128,64,.2); */
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
