<template>
  <div>
    <ResearchBase>
      <template v-slot:intro>
        <SearchForm @selected="changeSelection" />
      </template>

      <template
        v-slot:body
        template
      >
        <v-container
          v-show="showArtifact"
          fluid
        >
          <v-card
            width="95%"
            class="mx-auto pa-10 mt-10"
          >
            <v-cart-title>
              <h3>Artifact Search Results: {{ artifactRecordCount }} total Records Found </h3>
            </v-cart-title>
            <div
              class="results"
            >
              <v-card
                v-for="record in artifactRecords"
                :key="record.Accession_Number"
                height="350"
                class="pa-2"
              >
                <h3>{{ record.Artifact_Name }}</h3>
                <p><b>Material: </b> {{ record.material }}</p>
                <p><b>Remarks: </b> {{ record.remarks }}</p>
                <p><b>Vessel Name: </b> {{ record.vessel_name }}</p>
                <v-img
                  height="300px"
                  width="300px"
                  src="https://picsum.photos/200"
                />
              </v-card>
            </div>
          </v-card>
        </v-container>

        <v-container
          v-show="showPictorial"
          fluid
        >
          <v-card
            width="95%"
            class="mx-auto pa-10 mt-10"
          >
            <v-cart-title>
              <h3>Pictorial Search Results: {{ pictorialRecordCount }} total Records Found </h3>
            </v-cart-title>
            <row
              class="results"
            >
              <v-col
                v-for="record in pictorialRecords"
                :key="record.Accession_Number"
                cols="12"
                md="4"
              >
                <v-card
                  height="600"
                  class="pa-3"
                >
                  <!-- <h3>Title: {{ record.title }}</h3>
                  <p><b>Author: </b> {{ record.Author_Craftsman }}</p> -->
                  <span style="color:var(--museum-green)">
                    <b>Heading: </b>
                  </span>
                  <span> {{ record.Subject_Headings }}</span>
                  <p><b>Remarks: </b> {{ record.remarks }}</p>
                  <p><b>Vessel Name: </b> {{ record.Vessel_Name }}</p>
                  <p
                    height="auto"
                    width="auto"
                    ma-2
                    :src="$IMAGE_PATH+record.url"
                    :alt="record.url"
                    background="primary"
                    @click="showEnlargeImage($IMAGE_PATH+record.url)"
                  />
                  <p>{{ record.url }} Reference purpose only! </p>
                  <p>Pictorial Path: {{ $IMAGE_PATH }}</p>
                </v-card>
              </v-col>
            </row>
          </v-card>
        </v-container>
      </template>
    </Researchbase>
  </div>
</template>


<script>
// Added GeneralSearch components to this Collection
 import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
 import SearchForm from '@/components/GeneralSearch'
 import {mapState} from 'vuex'
// import PlaceHolder from '@/components/BaseComponents/BasePlaceHolder'
export default {
  name: 'Collections',
  components:{
    ResearchBase,
  SearchForm,
},

data(){
  return{
  showArchive:false,
  showDserial:false,
  showBiblio:false,
  showArtifact:false,
  showPictorial:false
  }
},



computed:{
  ...mapState('Artifacts', ['availableArtifacts'] ),
  ...mapState('Pictorials', ['availablePictorials'] ),



artifactRecords(){
    return this.availableArtifacts
  },

artifactRecordCount(){
    return this.availableArtifacts.length
},

artifactDataAvailable(){
   if (this.availableArtifacts.length > 0){
      return true
    }else{
      return false
    }
  },

pictorialRecords(){
    return this.availablePictorials
  },

pictorialRecordCount(){
    return this.availablePictorials.length
},

pictorialDataAvailable(){
   if (this.availablePictorials.length > 0){
      return true
    }else{
      return false
    }
  }



},

methods:{
  showEnlargeImage(){
    // TODO:See WallacedImagesVue for code
    console.log("ShowEnlarged Image Called")
  },

setAllFalse(){
  {
     this.showArchive =false,
     this.showDserial=false,
     this.showBiblio=false,
     this.showArtifact=false,
     this.showPictorial=false
  }
},

changeSelection(selection){
    this.setAllFalse()
    switch(selection){
      case 'archives':
        this.showArchive=true
        break;
      case 'dserial':
        this.showDserial=true
        break;
      case 'biblio':
        this.showBiblio=true
        break;
      case 'artifacts':
        this.showArtifact=true
        break;
      case 'pictorial':
        this.showPictorial=true
        break;

    }
    // alert(`${selection} received by parent`)
  }
}




}
</script>

<style scoped>

.results{
  display:grid;
  grid-column: repeat(var(--col), 1fr);
}

.v-container{
  --col:2;

}

h3{
  color:var(--museum-green)
}
</style>
