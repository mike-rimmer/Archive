<template>
  <div class="pagelayout">
    <v-card
      class="mx-auto"
    >
      <v-card-title class="museumgreen--text">
        <h3>
          ARCHIVAL ITEMS ADVANCED SEARCH
        </h3>
      </v-card-title>

      <v-card-subtitle>
        Enter your search items in the field below
      </v-card-subtitle>
      <v-container
        style="padding:1em;"
      >
        <v-row>
          <v-col
            cols="12"
            md="9"
          >
            <v-form
              v-model="valid"
              class="form"
            >
              <v-row>
                <v-col
                  cols="12"
                  md="5"
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
                  md="5"
                >
                  <v-text-field
                    v-model="stype"

                    :counter="10"
                    label="TYPE"
                    required
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="6"
                  md="5"
                >
                  <v-text-field
                    v-model="item"

                    label="ITEMS NAMES"
                    required
                  />
                </v-col>

                <v-col
                  cols="6"
                  md="5"
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
                  md="5"
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
                  md="5"
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
                  md="5"
                >
                  <v-autocomplete
                    v-model="collectionName"
                    :items="collections"
                    label="Select Collection Type"
                    required
                    dense
                  />
                  <!-- <v-text-field
                v-model="collectionName"
                label="COLLECTION NAME"
                required
              /> -->
                </v-col>

                <v-col
                  cols="6"
                  md="5"
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
                  class="mr-4"
                  @click="resetValidation"
                >
                  Reset Validation
                </v-btn>

                <v-btn
                  color="blue"
                  class="mr-4"
                  @click="getCollectionType"
                >
                  Submit
                </v-btn>
              </v-row>
            </v-form>
          </v-col>

          <v-col
            cols="12"
            md="3"
            class="d-flex"
          >
            <v-row justify-md="center">
              <div>
                <h3>Advanced Search Options</h3>
                <ul>
                  <li>Archival Items Advanced Search</li>
                  <li>Archival Fonds and Collections</li>
                  <li>Artifacts Advance Search</li>
                </ul>
                <p>{{ collectionName }}</p>
                <v-row>
                  <v-col
                    cols="12"
                    md="12"
                  >
                    <Table
                      :columns="columns"
                      :rows="collections2"
                    >
                      <template v-slot:row="{row}">
                        <div class="view">
                          {{ row.id }} {{ row.data }} {{ row.loc }} like
                        </div>
                      </template>
                    </Table>
                  </v-col>
                </v-row>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>


<script>
import Table from "@/components/NewConcepts/scopedslots/table.vue"
// import List from "@/components/NewConcepts/scopedslots/lists.vue"
  export default {
    components:{
      Table
    },

    data(){
      return{
        valid:false,
        type:'',
        keyword:'',
        stype:'',
        item:'',
        itemNum:'',
        dates:'',
        collectionName:'',
        option2:'',
        collections:['Archives', 'Artifact', 'Biblio','DSerials', 'Pictorial' ],
        collections2:[
          {id:1, data:'Archives'},
          {id:2, data:'Artifact'},
          {id:3, data:'Biblio'},
          {id:4, data:'DSerials'},
          {id:5, data:'Pictorial'}
        ],
        columns:['Id', 'Type'],
        list:['Apples', 'Bananas', 'Pears', 'Oranges']
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
  },

  getCollectionType(){
    alert(this.collectionName +' was Selected')
  }

}
  }
</script>

<style lang="css" scoped>
pagelayout{
  height:auto;
}

.view{
  display:flex;
}


.v-form{
  padding:1em;
  /* background:aqua; */
}
</style>
