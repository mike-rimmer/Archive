<template>
  <div class="dataresults">
    <ResearchBase>
      <template v-slot:banner>
        <SearchBanner />
      </template>
      <template v-slot:body>
        <v-container

          fluid
        >
          <v-card
            style="min-height:150px;"
            width="95%"
            class="mx-auto mt-10 pa-10"
          >
            <v-card-title v-show="pictorialDataAvailable">
              <h3>Pictorial Search Results: {{ pictorialRecordCount }} total Records Found </h3>
              <button @click="changeCols(4)">
                4 Cols
              </button>
              <button @click="changeCols(3)">
                3 Cols
              </button>
              <button @click="changeCols(2)">
                2 Cols
              </button>
            </v-card-title>
            <v-row>
              <v-col
                cols="12"
                lg="12"
              >
                <div class="results">
                  <v-card
                    v-for="record in pictorialRecords"
                    id="data2"
                    :key="record.Accession_Number"
                    height="550"
                    class="pa-3 ma-2 pictorial"
                  >
                    <!-- <h3>Title: {{ record.title }}</h3>
                  <p><b>Author: </b> {{ record.Author_Craftsman }}</p> -->
                    <span style="color:var(--museum-green)">
                      <b>Heading: </b>
                    </span>
                    <span> {{ record.Subject_Headings }}</span>
                    <p><b>Remarks: </b> {{ record.remarks }}</p>
                    <p><b>Vessel Name: </b> {{ record.Vessel_Name }}</p>
                    <p><b>Date: </b> {{ record.Date }}</p>
                    <p><b>Accession Number: </b> {{ record.accession_number }}</p>
                    <v-img
                      ma-2
                      contain
                      :src="$IMAGE_PATH+record.url"
                      lazy-src="../assets/images/Image-na.png"
                      :alt="record.url"
                      width="100%"
                      height="auto"
                      background="primary"

                      @click="
                        showEnlargeImage(record)"
                    >
                    <template v-slot:default>
                    <p style="margin-top:4px;"><b>URL: </b> </span>{{record.url}}</p>
                    </template>
                      <!-- <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <div>
                             <h3 style="font-size:1em">
                              {{record.url}}
                              Image not Available!
                            </h3>
                          </div>
                        </v-row>
                      </template> -->
                    </v-img>
                  </v-card>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </template>
    </ResearchBase>
  </div>
</template>

<script>
  import SearchBanner from '../components/SearchBanner';
  import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
  import {mapState} from 'vuex'
  export default {
    name:"CollectionPictorial",

  components:{
      SearchBanner,
      ResearchBase
  },

  data(){
    return{
      showColPictorial:false,

    }
  },

  computed:{
    ...mapState('Pictorials', ['availablePictorials', 'availablePictorialsLoaded'] ),

    pictorialRecords(){
    return this.availablePictorials
    },

    pictorialRecordCount(){
    return this.availablePictorials.length
    },

    pictorialDataAvailable(){
    if (this.availablePictorialsLoaded){
      return true
    }else{
      return false
    }
    },

     showPictorial(){
    if (this.availablePictorialsLoaded){
      return true
    }else{
      return false
    }
     }
  },

  methods:{

   changeCols(num){
    const root = document.documentElement
    root.style.setProperty('--cols', num)
    },

    showEnlargeImage(record){
      // const image = url.substring(url.length-20)
      // get image by id from Server
      // load image to modal
      // ask user if they wish to purchase
      // if yes store in cart
      // if no return to Pictorials Collection
      Object.keys(record).forEach(function(key) {
        console.log(key, record[key])
      })

      // alert(`Purchase this image ${record.heading}`)
      // this.$store.commit('setEnlargeImage', url)
      // this.$store.commit('setEnlargeImageType', 'pictorial')
      // this.$store.commit('setEnlargeImageTitle', 'Pictorial')
      // this.$store.commit('setEnlargeImageShow', true)
    }

  }

  }
</script>

  <style scoped>
   .dataresults{
    background-color:var(--accent);
    min-height:590px;
   }


/* TODO: Determine why overflow-y:auto keeps images with borders*/
   .pictorial{
     overflow-y:auto;
     background-color: var(--accent);
   }



 .results{
    display:grid;
    width:100%;
    grid-template-columns: repeat(var(--cols), 1fr);
    }

    button{
    margin-left:10px;
    font-size: .7em;
    background-color:var(--museum-green);
    color:black;
    padding:2px 5px;
    }

    button:hover{
    transition: all .8s ease-out;
    /* border-style:solid ; */
    filter:brightness(.5);
    cursor:pointer;
    }
  </style>
