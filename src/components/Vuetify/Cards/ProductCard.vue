<template>
  <div>
    <v-card
      color="grey lighten-1"
      class="ma-3 pa-4"
      width="350"
      elevation="5"
    >
      <v-img
        height="250"
        :src="product.image"
      />
      <v-card-title>{{ "Mike Rimmer" }}</v-card-title>
      <v-card-text class="mx-auto">
        <v-card-subtitle>
          {{ product.price | format2Dollars }}
        </v-card-subtitle>
        <v-card-actions>
          <v-btn
            color="success"
            outlined
            @click="addToCart({namepart:'Mike Rimmer', qty: 1, price: product.price})"
          >
            <v-icon
              small
              left
            >
              fa-plus
            </v-icon>
            Add to Cart
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    filters:{
      format2Dollars(value) {
      // Create our number formatter.
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
      return formatter.format(value);
    },
    },

    props:{
      product: {
        type:Object,
        default: function(){
        return {id:3, namepart:"Product Three", url:"https://picsum.photos/200/300?random=3", price:14.45 }
      },
    },
     addToCart:{
       type:Function,
       default: () => 1
     }
  },
    data(){
      return{
        num: this.addToCart()
      }
    }
  }
</script>

<style scoped>

</style>
