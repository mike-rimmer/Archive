<template>
  <div>
    <ResearchBase>
      <template v-slot:intro>
        <!-- <search-form @selected="changeSelection" /> -->
        <SearchResults />
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
            <v-card-title
              v-show="artifactDataAvailable"
            >
              <h3>Artifact Search Results: {{ artifactRecordCount }} total Records Found </h3>
              <!-- <button @click="showColArtifacts = !showColArtifacts">
                Show Artifacts
              </button> -->
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
                lg="2"
              >
                <p>{{ checkBoxSelection }}</p>
                <v-checkbox
                  v-for="(item, index) in checkBoxData"
                  :key="item.artifact"
                  v-model="checkBoxSelection"
                  multiple
                  :hide-details="index !== checkBoxData.length - 1"
                  :value="item.Artifact"
                  :label="`${item.Artifact} Qty: ${item.Qty}`"
                />
              </v-col>
              <transition
                :css="false"
                @enter="enter"
                @leave="leave"
              >
                <v-col
                  cols="12"
                  lg="10"
                >
                  <div
                    class="results"
                  >
                    <v-card
                      v-for="record in artifactRecords"
                      id="data1"
                      :key="record.artifact_id"
                      height="270"

                      class="pa-3 ma-2 artifact"
                    >
                      <h3>{{ record.Artifact_Name }}</h3>
                      <p><b>Material: </b> {{ record.material }}</p>
                      <p><b>Remarks: </b> {{ record.remarks }}</p>
                      <p><b>Date: </b> {{ record.Date }}</p>
                      <p><b>Vessel Name: </b> {{ record.vessel_name }}</p>
                      <!-- <v-img
                        height="300px"
                        width="300px"
                        src="https://picsum.photos/200"
                      /> -->
                    </v-card>
                  </div>
                </v-col>
              </transition>
            </v-row>
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
                lg="2"
              />
              <transition
                :css="false"
                @enter="enter"
                @leave="leave"
              >
                <v-col
                  cols="12"
                  lg="10"
                >
                  <div class="results">
                    <v-card
                      v-for="record in pictorialRecords"
                      id="data2"
                      :key="record.Accession_Number"
                      height="550"
                      class="pa-3 ma-2 pictoral"
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
                          showEnlargeImage($IMAGE_PATH+record.url)"
                      >
                        <template v-slot:placeholder>
                          <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                          >
                            <div>
                              <h3 style="font-size:1em">
                                Image not Available!
                              </h3>
                            </div>
                          </v-row>
                        </template>
                      </v-img>
                      <!-- <p>{{ record.url }} Reference purpose only! </p>
                <p>Pictorial Path: {{ $IMAGE_PATH }}</p> -->
                    </v-card>
                  </div>
                </v-col>
              </transition>
            </v-row>
          </v-card>
        </v-container>
      </template>
    </researchbase>
  </div>
</template>

  <script>
    // Added GeneralSearch components to this Collection
    import gsap from 'gsap'
    import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
    // import SearchForm from '@/components/GeneralSearch'
    import SearchResults from '@/components/SearchResults'
    import {mapState} from 'vuex'
    import standby from '../assets/images/Image-na.png'
    // import PlaceHolder from '@/components/BaseComponents/BasePlaceHolder'
    export default {
    name: 'Collections',
    components:{
    ResearchBase,
    SearchResults
},

    data(){
    return{
    checkBoxSelection: [],
    showColArtifacts:false,
    showColPictorial:false,
    noImage:standby,
    showArchive:false,
    showDserial:false,
    showBiblio:false,
    showArtifact:true,
    showPictorial:false
    }
    },



    computed:{
    ...mapState('Artifacts', ['availableArtifacts', 'artifactSummary'] ),
    ...mapState('Pictorials', ['availablePictorials'] ),

   collectionChoice(){
      if (this.artifactDataAvailable || this.pictorialDataAvailable){
      return false
   }else{
     return true
     }
   },

    artifactRecords(){
      let filter = this.checkBoxSelection
      // let filter = ['Adze', 'Airplane Navigation Receiver', 'Anchor Cable']
      if(this.checkBoxSelection.length > 0){
        var filtered = this.availableArtifacts.filter(
          function(val) {
            for (var i = 0; i < filter.length; i++) {
              if (val.Artifact_Name == filter[i]) {
                return true;
              }
            }
            return false;
          }
        );
      // const temp2 = this.availableArtifacts.filter((ele)=> ele.Artifact_Name == temp4.includes(ele.Artifact_Name))
      // console.log(temp2)
      return filtered
      }else{
        return []
      }

    },

    checkBoxData(){
      const temp =  this.artifactSummary.filter((ele)=>{return ele.Letter =='A'})
      return temp
    },

    checkBoxCount(){
      return this.artifactSummary.length
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
// Transitions methods go here
enter(el, done){
gsap.from(el,{
 y:-900,
 opacity:0,
 duration:3,
 onComplete:done
})
},

leave(el,done){
  gsap.to(el,{
   y:-900,
   opacity:0,
   duration:3,
   onComplete :done
  })

},

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

    changeCols(num){
    const root = document.documentElement
    root.style.setProperty('--cols', num)
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
    },

    staggercards(){
    gsap.to('#data2',{
    scale:0.1,
    y:60,
    yoyo:true,
    ease:"power.inout",
    delay:1,
    stagger:{
    amount:1.5,
    grid:"auto",
    from:"center"
    }
    })
    }
    }




    }
  </script>

  <style scoped>


    .pictoral, .artifact{
    background-color: var(--accent);
    height:100%;
    }

    .results{
    display:grid;
    width:100%;
    grid-template-columns: repeat(var(--cols), 1fr);
    }

    .v-card{
    overflow-y:auto;

    }

    button{
    margin-left:10px;
    border-radius:50%;
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


    h3{
    color:var(--museum-green);
    }

    .imgBackup{
    width:100%;
    height:auto;
    background: url('https://picsum.photos/200')
    }
  </style>

