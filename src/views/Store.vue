<template>
  <v-container>
    <v-row>
      <v-col
        class="color red lighten-5"
        sm="3"
        offset-lg="1"
      >
        <SideBar />
      </v-col>
      <v-col
        class="color blue lighten-5"
        sm="9"
        lg="7"
      >
        <ProductDisplay />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import SideBar from '../components/Vuetify/Store/Sidebar'
import ProductDisplay from '../components/Vuetify/Store/ProductDisplay'

  export default {
    name:"Store",

  components:{
    SideBar,
    ProductDisplay
  },

  computed:{
    ...mapState('Famillies',['Rimmers']),
    ...mapState('CRL', ['province'] ),
    ...mapGetters('Famillies',['totalMembers']),
    ...mapGetters('CRL',['totalProvinces'])
  },

  methods:{
  },

  }
</script>

<style scoped>

</style>
