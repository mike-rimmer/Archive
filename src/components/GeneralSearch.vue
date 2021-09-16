<template>
  <div class="pagelayout">
    <v-card
      class="mx-auto"
    >
      <v-card-title class="museumgreen--text">
        <h3>
          General Search
        </h3>
      </v-card-title>

      <v-card-subtitle>
        Enter your search items in the field below
      </v-card-subtitle>

      <v-row>
        <v-col
          cols="12"
          md="6"
        />
        <div class="collection-photos">
          <span
            v-for="photo in collections"
            :key="photo.title"
          >
            <div style="display:flex; flex-direction:column; align-items:center">
              <img
                :src="photo.url"
                :alt="photo.title"
                width="300"

                height="300"
              >
              <p style="margin-top:5px; font-size:1.5em">{{ photo.title }}</p>
            </div>
          </span>
        </div>
        <v-col
          cols="12"
          md="6"
          class="d-flex"
        >
          <!-- <v-row justify-md="center">
            <div>
              <h3>Advanced Search Options</h3>
              <ul>
                <li>Archival Items Advanced Search</li>
                <li>Archival Fonds and Collections</li>
                <li>Artifacts Advance Search</li>
              </ul>
              <p justify-md="center">
                {{ collectionName }}
              </p>
              <v-row class="table">
                <v-col
                  cols="12"
                  md="12"
                >
                  <Table
                    :columns="columns"
                    :rows="rows"
                  />
                </v-col>
              </v-row>
            </div>
          </v-row> -->
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>


<script>
import Table from "@/components/NewConcepts/scopedslots/table.vue"
// import List from "@/components/NewConcepts/scopedslots/lists.vue"
import {mapActions, mapState} from 'vuex'
const baseURL= 'http://localhost/shiplists2/list-db-server/images/collections/'
export default {
    name:'GeneralSearch',
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
        option1:'',
        option2:'',
        collections:[
          {title:'Archives', url: baseURL + 'archivespronis.jpg'},
          {title:'DSerials',url: baseURL + 'serials.jpg'},
          {title:'Biblio',url: baseURL + 'bibliofatalpassage.jpg'},
          {title:'Artifact', url: baseURL +'artifactscompass.jpg'},
          {title:'Pictorial', url: baseURL + 'pictorialwinch.jpg'}
          ],
        // collections2:[
        //   {id:1, data:'Archives'},
        //   {id:2, data:'Artifact'},
        //   {id:3, data:'Biblio'},
        //   {id:4, data:'DSerials'},
        //   {id:5, data:'Pictorial'}
        // ],

        // list:['Apples', 'Bananas', 'Pears', 'Oranges']
      }
    },

computed:{
  ...mapState('Artifacts',['availableArtifactsLoaded', 'availableArtifacts']),

  artifactsLoaded(){
    return this.availableArtifactsLoaded
  },

  columns(){
    return ['Item','Artifact Name']
  },

  rows(){
    if(this.availableArtifactsLoaded){
      return this.availableArtifacts
  }else{
    return []
  }
  }


},
methods:{
  ...mapActions('Artifacts',['getAvailableArtifacts']),

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
    // alert(this.collectionName +' was Selected')
    console.log(this.collectionName +' was Selected')
    this.getAvailableArtifacts()
  }

}
  }
</script>

<style lang="css" scoped>
pagelayout{
  height:auto;
}

.collection-photos{
  display:flex;
  justify-content:center;
  padding:.5em;
  margin-left:30px;
  background-color:lightgrey;
}

img:hover{
  transition: all .8s ease-out;
  /* border-style:solid ; */
  cursor: pointer;
  filter:brightness(.5)
}

.view{
  display:flex;
}


.v-form{
  padding:1em;
  /* background:aqua; */
}

.table{
  max-height: 300px;
  overflow-y: auto;
}
</style>
