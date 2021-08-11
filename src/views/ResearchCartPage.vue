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
    <Cards :selection-data="cartData" />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Cards from '@/components/ResearchCards.vue'
  export default {
    components:{
      Cards
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
