<template>
  <div>
    <BaseFrm>
      <template v-slot:Cart>
        <CartIndicator />
      </template>
      <template v-slot:QryFrm>
        <div>
          <CSLQryFrm
            :qryformtitle="formtitle"
          />
        </div>
      </template>
      <template v-slot:summaryFrm>
        <div>
          <CSLSummaryDisplayFrm
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
import CSLQryFrm from '@/components/CSL/CSLQryFrm';
import CSLSummaryDisplayFrm from '@/components/CSL/CSLSummaryDisplayFrm'
import CartIndicator from '@/components/BaseComponents/BaseDetailCartIndicator.vue'

import {mapActions, mapState} from 'vuex'
export default {
  title:"CSL Record of Canadian Shipping",
  name: 'CSLPage',
  components: {
    CSLQryFrm,
    CSLSummaryDisplayFrm,
    CartIndicator,
    BaseFrm,
},

   data() {
    return {
       headers: [
        { text: 'Notis', value: 'notis', width:'10%' },
        { text: 'Official Num', value: 'num', width:'5%' },
        { text: 'Name', value: 'name', width:'10%' },
        { text: 'Type', value: 'type', width:'25%' },
        { text: 'Built', value: 'yearbuilt', width:'5%' },
        { text: 'Builder', value: 'builder', width: '20%'},
        { text: 'Country', value: 'buildcntry', width:'10%' },
      ],
      csl:[],
      formtitle:"CANADA STEAMSHIP LINES FLEET LISTS",
      showPopUp:false,
      // CSLData:[],
      errMsg:'',
      isLoading:false,
      latestFilter:[]
    }
  },


    computed:{
      ...mapState('CSL', ['CSLDetailCart']),

      qty(){
        return this.CSLDetailCart.length
      }
    },

  created() {
    this.loadCart()
  },



  methods: {
    ...mapActions('CSL', ['setCSLFilterClearingFalse', 'addItemsToCSLCart', 'setCSLCartIsLoading','loadCSLCart']),
    loadCart(){
      this.setCSLCartIsLoading(true)
      this.loadCSLCart()
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

