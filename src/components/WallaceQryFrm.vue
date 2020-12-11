<template>
  <div>
    <h3>{{ formTitle }}</h3>
    <h4>{{ aboutRegistry }}</h4>

    <v-row class="justify-space-between">
      <v-col
        cols="12"
        md="6"
      >
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-text-field
                v-model="generalSearch"
                :counter="10"
                label="Search all Fields by keyword(s) and boolean operators"
                required
              />
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="6"
            >
              <v-select
                v-model="shipSelected"
                :items="ships"
                label="Vessel Name"
                required
              />
            </v-col>
          </v-row>

          <v-row>
            <!-- <v-select
        <v-col cols="12" sm="6" md="2">
          v-model ='yearSelected'
          :items='years'
          label='Year'
          required
          ></v-select>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field
          width=400
          v-model="officialNumberSelected"
          label="Select Official Numbers"
          required>
          </v-text-field>
        </v-col> -->

            <v-col
              cols="12"
              sm="6"
              md="3"
            >
              <v-select
                v-model="provSelected"
                :items="prov"
                label="Province "
                required
              />
            </v-col>

            <v-col
              cols="12"
              sm="6"
              md="9"
            >
              <v-text-field
                v-model="peoplesNamesNotes"
                width="400"
                label="Peoples Names and Notes"
                required
              />
            </v-col>
          </v-row>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="getRecord"
          >
            Validate
          </v-btn>
        </v-form>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-img
          src="../../public/Wallace Entry Form.png"
          alt="Wallace"
          height="400px"
          aspect-ratio="1.7"
          contain
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    formTitle: String,
    aboutRegistry: String,
  },
  data() {
    return {
      officialNumbers: '',
      peoplesNamesNotes: '',
      generalSearch: '',
      noTitle: true,
      picker: '',
      officialNumberSelected: '',
      shipSelected: '',
      yearSelected: '',
      provSelected: '',
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
    }
  },
}
</script>

<style scoped>
</style>
