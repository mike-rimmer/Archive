<template>
  <div style="margin-top:100px;">
    <BaseFrm>
      <template v-slot:Cart>
        <CartIndicator showimage="showimage" />
      </template>
      <template v-slot:QryFrm>
        <div>
          <WallsQryFrm
            :qryformtitle="qryformtitle"
          />
        </div>
      </template>
      <template v-slot:summaryFrm>
        <div>
          <WallsSummaryDisplayFrm
            :formtitle="formtitle"
            :headers="headers"
          />
        </div>
      </template>
    </BaseFrm>
  </div>
</template>

  <script>

import BaseFrm from '@/components/BaseComponents/BaseShipListFrm.vue';
import WallsQryFrm from '@/components/Wallace/WallsQryFrm';
import WallsSummaryDisplayFrm from '@/components/Wallace/WallsSummaryDisplayFrm'
import CartIndicator from '@/components/BaseComponents/BaseDetailCartIndicator.vue'
// const  BaseFrm  = () => import('@/components/BaseComponents/BaseShipListFrm.vue');
// const  WallsQryFrm = () => import('@/components/Wallace/WallsQryFrm');
// const  WallsSummaryDisplayFrm  = () => import('@/components/Wallace/WallsSummaryDisplayFrm')
import {mapActions} from 'vuex'
export default {
  title:"Wallace Record of Canadian Shipping",
  name: 'WallacePage',
  components: {
    WallsQryFrm,
    WallsSummaryDisplayFrm,
    BaseFrm,
    CartIndicator,
},

  data() {
    return {
       headers: [
        // { text: 'Id', value: 'id' },

        { text: 'ID', value: 'id', width:'15%'},
        { text: 'Vessel Name', value: 'vname', width:'15%'},
        { text: 'img', value: 'isimage', width:'5%' },
        { text: 'Registration #', value: 'registration', width:'15%' },
        { text: 'Rig', value: 'rig', width:'5%' },
        { text: 'Where Built', value: 'buildloc', width:'20%' },
        { text: 'Builder', value: 'bildnme', width: '10%' },
        { text: 'Owner', value: 'own', width:'20%' },
        // { text: 'Url', value: 'url', width:'5%' },

        // { text: 'Reason Closed', value: 'rclose' },
        // { text: 'Place Closed', value: 'placeclosed' },
        // { text: 'Remark', value: 'remark', width:'25%' },
      ],
      errMsg:'',
      formtitle:"Fredick W. Wallace - Record of Canadian Shipping 1786 - 1920",
      qryformtitle:"Wallace Registry",
      showimage:true,
      // interval:{},
      // value:0,
      // gettingData:false,
      // search:'',
      // wallaceData:[],
      // wallaceDetails:{},
      // haveDetails:false,
      //  headers: [
      //   { text: 'Id', class: 'sticky-header', value: 'id' },
      //   { text: 'Vessel Name', class: 'sticky-header', value: 'vessel', width:'1%' },
      //   { text: 'Registration#', class: 'sticky-header', value: 'registration'  },
      //   { text: 'Where Built', class: 'sticky-header', value: 'whereBuilt'  },
      //   { text: 'Reason Closed', class: 'sticky-header', value: 'reasonClosed'  },

      // ],
    }
  },



  created() {
    this.loadCart()
  },



  methods: {
    ...mapActions('Wallace', ['setWallaceFilterClearingFalse', 'addItemsToWallaceCart', 'setWallaceCartIsLoading','loadWallaceCart']),
    loadCart(){
      this.setWallaceCartIsLoading(true)
      this.loadWallaceCart()
    },

  },
}
</script>

<style scoped>
.chartContainer{
   display:flex;
   flex-wrap: wrap;
   width:100%;
   height:400px;
   background-color:white;
   justify-content: space-around;
 }

.card{
   width:350px;
 }
</style>

