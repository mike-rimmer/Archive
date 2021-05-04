<template>
  <div class="background">
    <v-row
      justify="center"
      align="center"
    >
      <h1 class="mb-10">
        Welcome to the Marine Museum <span style="text-shadow: 4px 4px 5px black; color:white;">  ShipsList </span> Research Cart
      </h1>
    </v-row>

    <DetailStoreCart :selection-data="cartData" />
  </div>
</template>

<script>
import DetailStoreCart from '@/components/CSL/CSLDetailStoreCart.vue'

import {mapState} from 'vuex'

  export default {
  name:'CSLDetails',
   components:{
   DetailStoreCart,

    },

    data(){
      return {

    }
    },

    computed:{
      ...mapState('CSL', ['CSLDetailCart', 'CSLDetailCartIsLoaded', 'CSLCart']),


    detailCartQty(){
      return this.CSLDetailCart.length
    },

    cartData(){
      return this.CSLDetailCart
    },


    detailsAreAvailable(){
      return this.testData.length > 0
    }

    }
  }
</script>

<style scoped>
.background{
    background:var(--component-background-theme);
/* background: linear-gradient(180deg, #8ED5E2 0%, #6FB0E1 100%); */
   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.6);
/* border-radius: 20px; */
  /* background: linear-gradient(
    rgba(75, 93, 150, 0.1),
    rgba(7, 74, 129, 0.9)
  ); */
    height:90vh;
}
</style>

