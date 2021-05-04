<template>
  <div>
    <CSLPage />
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
     <h4>Canada Steamship Lines</h4>
        <CSLDetailCart />
    </v-tab-item>
    </v-tabs-items>  -->
  </div>
</template>

<script>
// const CSLPage = () => import('@/components/CSL/CSLPage.vue')
// const DisplayMillsCharts = () => import("@/components/charts/DisplayMillsCharts")

import CSLPage from "@/components/CSL/CSLPage.vue"
// import CSLDetailCart from "@/components/CSL/CSLDetailCart.vue"
// import DisplayMillsCharts from "@/components/charts/DisplayMillsCharts"
export default {
  name:"CSLFrm",
  components:{
    CSLPage,
    // DisplayMillsCharts,
    // CSLDetailCart
  },

  data(){
    return{
      tabs: null,
      items:[

        {title:'CSL Graphs', path:'/wallace'},
        {title: 'CSL Research Cart', path:'/wallace'}
      ],
      }
    },

mounted(){
  // console.log(process.env.local.Name)
}
}


</script>
