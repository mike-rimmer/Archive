<template>
  <div class="mt-1 mr-12 pa-1 px-2">
    <v-btn
      style="background-color:hsl(174, 35%, 75%)"
      @click="$router.push('/shiplists/cart')"
    >
      <span><v-icon class="black--text">mdi-cart</v-icon></span>
      <span class="black--text">In Research Cart: {{ qty }}</span>
    </v-btn>

    <v-btn
      v-if="showimage"
      class="ml-4"
      style="background-color:hsl(174, 35%, 75%)"
      @click="$router.push('/shiplists/images')"
    >
      <img
        class="shipimage"
        src="../../assets/images/ship.svg"
        alt="ship"
      >
      <!-- <v-icon>mdi-sail-boat</v-icon> -->
    </v-btn>
  </div>
</template>

 <script>

import {mapState} from 'vuex'
 export default{

 name:'BaseDetailCartIndicator',
 props:{
   showimage:{
     type:Boolean,
     default:false,
   }
 },

computed:{
  ...mapState('Cart', ['ResearchCart']),

  qty(){
    return this.ResearchCart.length
  }
}
 }
 </script>

 <style scoped>
.shipimage{
  height:105px;
  margin-top:35px;
}

 </style>
