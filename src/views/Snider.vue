<template>
  <div>
    <SniderPage />
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


import SniderPage from "@/components/Snider/SniderPage.vue"
// import DisplayMillsCharts from "@/components/charts/DisplayMillsCharts"
export default {
  name:"SniderFrm",
  components:{
    SniderPage,
    // DisplayMillsCharts,
  },

  data(){
    return{
      tabs: null,
      items:[

        {title:'Snider Graphs', path:'/snider'},
        {title: 'Growth', path:'/growth'}
      ],
      }
    },

mounted(){
  // console.log(process.env.local.Name)
}
}


</script>
