<template>
  <div style="margin-top:100px">
    <BaseFrm>
      <template v-slot:Cart>
        <CartIndicator />
      </template>
      <template v-slot:QryFrm>
        <div>
          <OwnersQryFrm
            :formtitle="qryformtitle"
            @globalSearch="getOwnersDataByGlobalSearch"
          />
        </div>
      </template>
      <template v-slot:summaryFrm>
        <div>
          <OwnersSummaryDisplayFrm
            :title="formtitle"
            :height="tableheight"
            :headers="headers"
          />
        </div>
      </template>
    </BaseFrm>
  </div>
</template>

  <script>

import BaseFrm from '../BaseComponents/BaseShipListFrm'
import OwnersQryFrm from '@/components/Owners/OwnersQryFrm';
import OwnersSummaryDisplayFrm from '@/components/Owners/OwnersSummaryDisplayFrm'
import CartIndicator from '@/components/BaseComponents/BaseDetailCartIndicator.vue'
import {mapActions} from 'vuex'
export default {
  title:"Ship Owners List",
  name: 'Owners',
  components: {
    OwnersQryFrm,
    OwnersSummaryDisplayFrm,
    BaseFrm,
    CartIndicator
  },

  data() {
    return {
        headers: [
        { text: 'Owners', value: 'owner', width:'15%' },
        { text: 'Museum #', value: 'marnum', width:'10%' },
        { text: 'Port #', value: 'portnum', width:'10%' },
        { text: 'Owner #', value: 'ownernum', width:'10%' },
        { text: 'Shares', value: 'shares', width:'10%' },
        { text: 'Purchased', value: 'datebought', width:'10%' },
        { text: 'Sold', value: 'datesold', width:'5%' },
        { text: 'Residence', value: 'residence', width:'10%' },
      ],
      errMsg:'',
      tableheight:'380',
      formtitle:"Ship Owners List",
      qryformtitle:'Ship Owners List',
    }
  },


  created() {
   this.loadCart()
  },


  methods: {
    ...mapActions('Owners', ['setOwnersFilterClearingFalse', 'addItemsToOwnersCart', 'setOwnersCartIsLoading','loadOwnersCart']),
    loadCart(){
      this.setOwnersCartIsLoading(true)
      this.loadOwnersCart()
    },

    getOwnersDataByGlobalSearch(){
      alert('GetGlobals State')
    }
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



