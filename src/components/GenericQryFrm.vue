<template>
  <div>
    <h3>{{formTitle}}</h3>
    <h4>{{aboutRegistry}}</h4>
    <v-row>
<v-col cols=12 md="4" offset="1">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="generalSearch"
        :counter="10"
        label="Search all Fields by keyword(s) and boolean operators"
        required
      ></v-text-field>
    </v-form>
</v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      generalSearch: '',
    };
  },
  props: {
    formTitle: String,
    aboutRegistry: String,

  },
};
</script>

<style scoped>
</style>
