<template>
  <div>
    <h3>Products</h3>
    <v-row>
      <v-col
        v-for="(product, i) in products"
        :key="i"
        sm="6"
        md="4"
      >
        <ProductCard
          :product="product"
          add-to-cart:-add-to-cart-
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductCard from '@/components/Vuetify/Cards/ProductCard.vue';
import {mapState} from 'vuex'
import {mapActions} from 'vuex'
export default {
    name:'ProductDisplay',
    components:{
    ProductCard
},

computed:{
  ...mapState('TmpStore',['products'])
},

methods:{
  ...mapActions('TmpStore',['addToCart'])
}

  }
</script>

<style lang="scss" scoped>

</style>
