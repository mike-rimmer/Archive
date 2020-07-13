<template>
  <div class="queryform">
    <div>
      <h1>{{formTitle}}</h1>
      <p>
        {{aboutRegistry}}
      </p>

    </div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="generalSearch"
        :counter="10"
        label="Search all Fields by keyword(s) and boolean operators"
        required
      ></v-text-field>

      <v-row class="justify-space-around">
        <v-col cols="12" sm="6" md="2">
          <v-select
          width = 200;
          v-model = 'shipname'
          :items='ships'
          label='Select Vessel Name'
          required
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <v-select
          :items='prov'
          label='Select Province '
          required
          ></v-select>
        </v-col>

        <v-col cols="12" sm="6" md="2">
         <v-select
          v-model ='yearselect'
          :items='years'
          label='Select Year'
          required
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" md="2">
          <v-text-field
          width=200
          v-model="officialNumbers"
          label="Select Official Numbers"
          required>
          </v-text-field>
        </v-col>
      </v-row>

<v-row >
  <v-col>
      <v-text-field
        v-model="reasonClosedRemarkNotes"
        label="Reason Closed & Remarks & Notes"
        required
      ></v-text-field>
  </v-col>

  </v-row>
      <v-btn :disabled="!valid" color="success" class="mr-4" @click="getRecord">Validate</v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      officialNumbers: '',
      reasonClosedRemarkNotes: '',
      generalSearch: '',
      noTitle: true,
      picker: '',
      aboutRegistry: 'This is a test',
      shipname: '',
      yearselected: '',
      valid: false,
      prov: [
        'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland',
        'Labrador',
        'Nova Scotia',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
      ],
      // year :[1800]
    };
  },
  props: {
    ships: Array,
    formTitle: String,
    years: Array,
  },

  methods: {
    getRecord() {
      alert('Record Requested');
    },
  },
};
</script>

<style scoped>
.dqueryform {
  width: 80%;
  margin: 0 auto;
}
</style>
