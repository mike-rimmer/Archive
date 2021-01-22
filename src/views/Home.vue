<template>
  <div>
    <Header />
    <PopularProducts />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Vuetify/Home/Header.vue';
import PopularProducts from '@/components/Vuetify/Home/PopularProducts.vue';
import Footer from '@/components/Vuetify/Home/Footer.vue';

  export default {
   name:'Home',
    components:{
      Header,
      PopularProducts,
      Footer
    },
    data(){
      return{
      //   products:[
      //   {id:1,name:"Product One", url:"https://picsum.photos/200/300?random=1", price:10.45 },
      //   {id:2,name:"Product Two", url:"https://picsum.photos/200/300?random=2", price:12.45 },
      //   {id:3,name:"Product Three", url:"https://picsum.photos/200/300?random=3", price:14.45 },
      //   {id:4,name:"Product Four", url:"https://picsum.photos/200/300?random=4", price:18.45 },
      // ]
        }
    },
    computed:{

    },

    methods:{
    }
  }
</script>

<style scoped>

</style>
