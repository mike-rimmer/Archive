<template>
  <div>
    <RegistryPage />
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
        <DisplayRegistryCharts />
      </v-tab-item>

      <v-tab-item class="color green lighten-5">
        <h4>This areas can be used to hold additional graphs/views etc</h4>
      </v-tab-item>
    </v-tabs-items> -->
  </div>
</template>

<script>
    import RegistryPage from '../components/Registry/RegistryPage'
    // import DisplayRegistryCharts from '../components/charts/DisplayRegistryCharts'
  export default {
    components:{
      RegistryPage,
      // DisplayRegistryCharts,
    },
    data(){
      return{
        tabs:null,
        items:[
        {title:'Registry Graphs', path:'/crl'},
        {title: 'Growth', path:'/growth'}
        ]
      }
    }

  }
</script>

<style scoped>

</style>
