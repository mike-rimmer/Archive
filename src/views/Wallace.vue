<template>
  <div>
    <WallacePage />
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
const WallacePage = () => import('@/components/Wallace/WallacePage.vue')
// const DisplayMillsCharts = () => import("@/components/charts/DisplayMillsCharts")

// import WallacePage from "@/components/Wallace/WallacePage.vue"
// import DisplayMillsCharts from "@/components/charts/DisplayMillsCharts"
export default {
  name:"WallaceFrm",
  components:{
    WallacePage,
    // DisplayMillsCharts,
  },

  data(){
    return{
      tabs: null,
      items:[

        {title:'Wallace Graphs', path:'/wallace'},
        {title: 'Growth', path:'/growth'}
      ],
      }
    },

mounted(){
  // console.log(process.env.local.Name)
}
}


</script>
