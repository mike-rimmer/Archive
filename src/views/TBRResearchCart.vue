<template>
  <div class="background">
    <v-row
      justify="center"
      align="center"
    >
      <h1 class="mb-10">
        Welcome to the Marine Museum <span style="color:var(--museum-green);">  ShipsList </span> Research Cart <span
          style="color:var(--museum-green)"
        >{{ `Qty: ${detailCartQty} ` }}</span>
      </h1>
    </v-row>

    <DetailStoreCards
      :selection-data="cartData"
    />
  </div>
</template>

<script>
import DetailStoreCards from '@/components/ResearchCards.vue'
import {mapState} from 'vuex'

  export default {
  name:'CSLDetails',
   components:{
   DetailStoreCards,

    },

    data(){
      return {

    }
    },

    computed:{
      ...mapState('Cart', ['ResearchCart', 'ResearchCartIsLoaded']),


    detailCartQty(){
      return this.ResearchCart.length
    },

    cartData(){
      return this.ResearchCart
    },


    detailsAreAvailable(){
      return this.testData.length > 0
    }

    }
  }
</script>

<style scoped>
.background{
    margin-top:6em;
    padding:1em;
    height:auto;
}
</style>

