<template>
  <div style="margin-top:100px;">
    <BaseFrm>
      <template v-slot:Cart>
        <CartIndicator />
      </template>
      <template v-slot:QryFrm>
        <div>
          <SniderQryFrm
            :qryformtitle="qryformtitle"
          />
        </div>
      </template>
      <template v-slot:summaryFrm>
        <div>
          <SniderSummaryDisplayFrm
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
import SniderQryFrm from '@/components/Snider/SniderQryFrm';
import SniderSummaryDisplayFrm from '@/components/Snider/SniderSummaryDisplayFrm'
import CartIndicator from '@/components/BaseComponents/BaseDetailCartIndicator.vue'

import {mapActions} from 'vuex'
export default {
  title:"Snider Record of Canadian Shipping",
  name: 'SniderPage',
  components: {
    SniderQryFrm,
    SniderSummaryDisplayFrm,
    BaseFrm,
    CartIndicator
},

   data() {
    return {
       headers: [
        { text: 'Article Title', value: 'articletitle', width:'35%' },
        { text: 'Ship Name', value: 'shipname', width:'15%' },
        { text: 'Ship Type', value: 'shiptype', width:'15%' },
        { text: 'Where Built', value: 'places', width:'15%' },
        // { text: 'Built', value: 'whenbuilt', width:'10%' },
        // { text: 'Captain', value: 'captain', width: '5%'},
        // { text: 'Builder', value: 'builder', width:'5%' },
        // { text: 'Lost Where', value: 'lostwhere', width:'10%' },
        { text: 'People', value: 'people', width:'15%' },
      ],
      csl:[],
      formtitle:"SNIDERS INDEX",
      qryformtitle:'SNIDERS INDEX',
      showPopUp:false,
      // SniderData:[],
      errMsg:'',
      isLoading:false,
      latestFilter:[]
    }
  },



  created() {
    this.loadCart()
  },



  methods: {
    ...mapActions('Snider', ['setSniderFilterClearingFalse', 'addItemsToSniderCart', 'setSniderCartIsLoading','loadSniderCart']),
    loadCart(){
      this.setSniderCartIsLoading(true)
      this.loadSniderCart()
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

