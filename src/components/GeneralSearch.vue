<template>
  <v-container fluid>
    <v-card
      width="95%"
      class="color lightgrey mx-auto"
    >
      <!-- TODO:Figure out how or where class museumgreen--text is defined -->
      <v-card-title class="museumgreen--text">
        <h3>
          Search by Collection by: {{ showSelection }}
        </h3>
      </v-card-title>

      <v-card-subtitle>
        Enter your search items in the field below, or left mouseclick on one of the images below to target your search.
      </v-card-subtitle>


      <v-row class="mx-auto justify-center">
        <v-col
          v-for="photo in collections"
          :key="photo.title"
          cols="12"
          lg="2"
        >
          <v-hover v-slot="{ hover }">
            <div
              class="img-and-title"
              :class="{'on-hover' : hover}"
            >
              <v-img
                :src="photo.url"
                :alt="photo.title"
                height="350"
                style="margin-top:5px; font-size:1.5em"
                @click="getCollectionType(photo.title)"
              />
              <p>{{ photo.title }}</p>
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>


<script>
// import Table from "@/components/NewConcepts/scopedslots/table.vue"
// import List from "@/components/NewConcepts/scopedslots/lists.vue"
import {mapActions, mapState} from 'vuex'
// const baseURL= 'http://localhost/shiplists2/list-db-server/images/collections/'
const baseURL= 'http://marmuseum.ca/shiplists2/list-db-server/images/collections/'
export default {
  name:'GeneralSearch',
    components:{
      // Table
    },

    data(){
      return{
        isHovering:false,
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
        showSelection:'',
        collections:[
          {title:'Archives', url: baseURL + 'archivespronis.jpg'},
          {title:'DSerials',url: baseURL + 'serials.png'},
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
  ...mapState('Pictorials',['availablePictorialsLoaded']),

  artifactsLoaded(){
    return this.availableArtifactsLoaded
  },


pictorialsLoaded(){
  return this.availablePictorialsLoaded
}





},
methods:{
  ...mapActions('Artifacts',['getAvailableArtifacts', 'getArtifactSummary', 'getArtifactData']),
  ...mapActions('Pictorials',['getAvailablePictorials', ]),

  validate(){
    console.log('Validate')
  },

  resetValidation(){
    console.log('ResetValidation')
  },

  reset(){
    console.log('Reset')
  },

  getCollectionType(collection){
    // alert(this.collectionName +' was Selected')
    // console.log(collection +' was Selected')
    switch(collection){
      case 'Archives':
         this.notifyCollections('archives')
          this.showSelection = 'Archives'
        break;
      case 'DSerials':
         this.notifyCollections('dserial')
          this.showSelection = 'DSerial'
        break;
      case 'Biblio':
         this.notifyCollections('biblio')
        this.showSelection = 'Biblio'
        break;
      case 'Artifact':
        this.notifyCollections('artifacts')
        // TODO:Implement Guard
        if(!this.artifactsLoaded){
          this.getArtifactSummary()
          this.getAvailableArtifacts()
         }
         else{
           alert('Artifacts Loaded')
         }
        break;
      case 'Pictorial':
        this.notifyCollections('pictorial')
          if(!this.pictorialsLoaded){
          this.getAvailablePictorials()
        }else{
          alert('Pictorials Loaded')
        }


        break;

    }
  },

  notifyCollections(chosen){
// alert(`${chosen} was selected`)
this.$emit('selected', chosen)
  }

}
  }
</script>

<style lang="css" scoped>
.pagelayout{
  height:auto;
  margin:0 auto;
  background-color:red;
}

.img-and-title{
  display:flex;
  flex-direction: column;
  align-items: center;
}

.on-hover{
  transition: all .6s ease-in-out;
  /* border-style:solid ; */
  filter:brightness(.5);
  cursor:pointer;
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
