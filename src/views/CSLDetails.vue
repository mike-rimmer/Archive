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

    <DetailStoreCart
      :selection-data="
        cartData"
    />
    </h1>
    </v-row>
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
    margin-top:6em;
    height:auto;
}
</style>

