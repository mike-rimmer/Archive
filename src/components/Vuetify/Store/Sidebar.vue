<template>
  <div>
    <v-sheet
      v-if="$vuetify.breakpoint.smAndUp"
    >
      SideBar
    </v-sheet>
    <v-expansion-panels v-else>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Header
        </v-expansion-panel-header>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-card>
      <v-card-title>
        Filters
      </v-card-title>
      <v-card-actions>
        <v-radio-group
          v-model="priceRange"
          column
        >
          <v-radio
            label="Any Price"
            value="Any"
          />
          <v-radio
            label="Under $25"
            value="<25"
          />
          <v-radio
            label="$25 to $100"
            value=">25<100"
          />
          <v-radio
            label="$100 to $500"
            value=">100<500"
          />
          <v-radio
            label="Over $500"
            value=">500"
          />
        </v-radio-group>
      </v-card-actions>
    </v-card>
    {{ priceRange }}
  </div>
</template>

<script>
  export default {
    name:'Sidebar',
    data(){
      return{
        priceRange:''
      }
    }
  }
</script>

<style scoped>

</style>
