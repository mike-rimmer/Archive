<template>
  <div class="pagelayout">
    <v-card
      class="mx-auto"
    >
      <v-card-title class="museumgreen--text">
        ARCHIVEAL ITEMS ADVANCED SEARCH
      </v-card-title>

      <v-card-subtitle>
        Enter your search items in the field below
      </v-card-subtitle>
      <v-container>
        <v-form v-model="valid">
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="keyword"

                :counter="10"
                label="KEYWORD"
                required
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="stype"

                :counter="10"
                label="TYPE"
                required
              />
            </v-col>
            <v-col
              cols="12"
              md="4"
              class="d-flex"
            >
              <v-row justify-md="center">
                <div>
                  <h3>Advanced Search Options</h3>
                  <ul>
                    <li>Achival Items Advanced Search</li>
                    <li>Achival Fonds and Collections</li>
                    <li>Arifacts Advance Search</li>
                  </ul>
                </div>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="6"
              md="4"
            >
              <v-text-field
                v-model="item"

                label="ITEMS NAMES"
                required
              />
            </v-col>

            <v-col
              cols="6"
              md="4"
            >
              <v-text-field
                v-model="itemNum"
                label="ITEM NUMBER"
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="6"
              md="4"
            >
              <v-text-field
                v-model="dates"
                label="DATES"
                placeholder="(1870 - 2021)"
                required
              />
            </v-col>

            <v-col
              cols="6"
              md="4"
            >
              <v-text-field
                v-model="option1"
                label="OPTION 1"
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="6"
              md="4"
            >
              <v-text-field
                v-model="collectionName"
                label="COLLECTION NAME"
                required
              />
            </v-col>

            <v-col
              cols="6"
              md="4"
            >
              <v-text-field
                v-model="option2"
                label="OPTION 2"
                required
              />
            </v-col>
          </v-row>

          <v-row>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Validate
            </v-btn>

            <v-btn
              color="error"
              class="mr-4"
              @click="reset"
            >
              Reset Form
            </v-btn>

            <v-btn
              color="warning"
              @click="resetValidation"
            >
              Reset Validation
            </v-btn>
          </v-row>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        valid:false,
        type:'',
        keyword:'',
        stype:'',
        item:'',
        itemNum:'',
        dates:'',
        option1:'',
        collectionName:'',
        option2:'',


      }
    },
methods:{
  validate(){
    console.log('Validate')
  },

  resetValidation(){
    console.log('ResetValidation')
  },

  reset(){
    console.log('Reset')
  }

}
  }
</script>

<style lang="css" scoped>
pagelayout{
  height:auto;
}

form{
  padding:2em;
}
</style>
