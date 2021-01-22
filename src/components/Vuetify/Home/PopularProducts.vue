<template>
  <v-container>
    <v-row>
      <v-col
        sm="10"
        lg="8"
        offset-md="2"
      >
        <h2>
          Popular Products
          <v-btn
            text
            color="primary"
            to="store"
          >
            View All
          </v-btn>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        sm="10"
        offset-sm="1"
        lg="8"
        offset-lg="2"
      >
        <v-row>
          <v-col
            v-for="(product , i) in products.slice(0,3)"
            :key="i"
            sm="6"
            md="4"
          >
            <ProductCard
              :product="product"
              :add-to-cart="addToCart"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from 'vuex';
import {mapActions} from 'vuex';
import ProductCard from '@/components/Vuetify/Cards/ProductCard.vue';
  export default {
    name:'PopularProduts',
  components:{
    ProductCard
  },

  computed:{
 ...mapState('TmpStore',['products'])
  },

 methods:{
     ...mapActions('TmpStore',['addToCart']),
    },


  }
</script>

<style scoped>

</style>
