<template>
  <div>
    <!-- <keep-alive> -->

    <MillsPage />

    <!-- </keep-alive> -->
    <!-- <v-tabs
      v-model="tabs"
      align-with-title
      class="color green lighten-5"
    >
      <v-tabs-slider color="blue" />

      <v-tab
        v-for="item in items"
        :key="item.title"
      >
        {{ item.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">
      <v-tab-item class="color green lighten-5">
        <DisplayMillsCharts />
      </v-tab-item>

      <v-tab-item class="color green lighten-5">
        <h4>This areas can be used to hold additional graphs/views etc</h4>
      </v-tab-item>
    </v-tabs-items> -->
  </div>
</template>

<script>
import MillsPage from "@/components/Mills/MillsPage"
// import DisplayMillsCharts from "@/components/charts/DisplayMillsCharts"
import {mapState, mapGetters} from 'vuex'
export default {
  name: 'Mills',
  components:{
    MillsPage,
    // DisplayMillsCharts,
  },

  data(){
    return{
      tabs: null,
      items:[

        {title:'Mills Graphs', path:'/mills'},
        {title: 'Growth', path:'/growth'}
      ],
      }
    },

computed:{
  ...mapState('Mills',['MillsCurrentFilter', 'MillsGlobal','MillsCart','MillsFilter', 'MillsCartIsLoading']),
   ...mapGetters('Mills',['MillsCartIsLoaded', 'filtered']),
}

}
</script>
