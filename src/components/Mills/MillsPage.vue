<template>
  <div>
    <BaseFrm>
      <template v-slot:Cart>
        <CartIndicator />
      </template>
      <template v-slot:QryFrm>
        <div>
          <MillsQryFrm
            :formtitle="qryformtitle"
          />
        </div>
      </template>
      <template v-slot:summaryFrm>
        <div>
          <MillsDisplayFrm
            :formtitle="formtitle"
            :headers="headers"
            :height="tableheight"
          />
        </div>
      </template>
    </basefrm>
  </div>
</template>

<script>

// Example of jit loading import...
const BaseFrm = () => import('@/components/BaseComponents/BaseShipListFrm.vue')
// import BaseFrm from '@/components/BaseComponents/BaseShipListFrm.vue';
const MillsQryFrm = () => import('@/components/Mills/MillsQryFrm.vue')
// import MillsQryFrm from '@/components/Mills/MillsQryFrm.vue';
const MillsDisplayFrm = () => import('@/components/Mills/MillsDisplayFrm.vue')
const CartIndicator = () => import('@/components/BaseComponents/BaseDetailCartIndicator.vue')

import {mapActions} from 'vuex'


export default {
  name:'MillsPage',
  title:"Mills List",
  components: {
  BaseFrm,
  MillsQryFrm,
  MillsDisplayFrm,
  CartIndicator
  },

  data() {
    return {
       items:['Graphs', 'Saved Searches'],
       headers: [
        { text: 'Mills #', class: 'sticky-header', value: 'mills', width:'10%'  },
        { text: 'Owner', class: 'sticky-header', value: 'owners', width:'15%' },
        { text: 'Vessel Name', class: 'sticky-header', value: 'vesselName', width:'15%' },
        { text: 'Official #', class: 'sticky-header', value: 'officialNum', width:'10%'},
        { text: 'Where Built', class: 'sticky-header', value: 'whereBuilt', width:'30%' },
        { text: 'Date Built', class: 'sticky-header', value: 'dateBuilt', width:'10%' },
        {
          text: 'Reason Closed',
          class: 'sticky-header',
          value: 'reasonClosed',
          width: '25%'
        },
      ],
      errMsg:'',
      tableheight:'380',
      formtitle:"The New Mills List Canadian Coastal and Inland Steam Vessels, 1809 -1930",
      qryformtitle:"MILLS REGISTRY",
    }
  },



    created(){
      this.loadCart()
    },

    methods: {
    ...mapActions('Mills', ['setMillsFilterClearingFalse', 'addItemsToMillsCart', 'loadMillsCart', 'setMillsCartIsLoading' ]),

    loadCart(){
      // if(! this.MillsCart.length > 1){
        this.setMillsCartIsLoading(true)
        this.loadMillsCart()
      // }
     },



    }
}

</script>

<style  scoped>
 /* .chartContainer{
   display:flex;
   flex-wrap: wrap;
   width:100%;
   height:400px;
   background-color:white;
   justify-content: space-around;
 }

 .card{
   width:350px;
 } */
</style>
