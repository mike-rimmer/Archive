<template>
  <div class="dataresults">
    <ResearchBase>
      <template v-slot:banner>
        <SearchBanner />
      </template>
      <template
        v-slot:body
      >
        <div
          class="dataresults"
        >
          <v-card
            width="95%"
            class="mx-auto pa-10 mt-10"
            style="min-height:150px;"
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
              <!--  <v-col
                v-show="artifactDataAvailable"
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
              -->
              <v-col
                cols="12"
                lg="12"
              >
                <div class="selects">
                  <v-select
                    v-model="checkBoxSelectionAC"
                    :items="checkBoxDataAC"
                    :menu-props="{ maxHeight: '300' }"
                    label="A - C"
                    multiple
                    hint="Select Artifacts"
                    persistent-hint
                  />

                  <v-select
                    v-model="checkBoxSelectionDF"
                    :items="checkBoxDataDF"
                    :menu-props="{ maxHeight: '300' }"
                    label="D - F"
                    multiple
                    hint="Select Artifacts"
                    persistent-hint
                  />
                  <v-select
                    v-model="checkBoxSelectionGH"
                    :items="checkBoxDataGH"
                    :menu-props="{ maxHeight: '300' }"
                    label="G - H"
                    multiple
                    hint="Select Artifacts"
                    persistent-hint
                  />
                  <v-select
                    v-model="checkBoxSelectionIJ"
                    :items="checkBoxDataIJ"
                    :menu-props="{ maxHeight: '300' }"
                    label="I - J"
                    multiple
                    hint="Select Artifacts"
                    persistent-hint
                  />
                </div>
              </v-col>
              <v-col
                cols="12"
                lg="12"
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
            </v-row>
          </v-card>
        </div>
      </template>
    </ResearchBase>
  </div>
</template>


  <script>
    // import BaseMessage from '../components/BaseComponents/BaseMessage';
    import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
    import { mapState} from "vuex"
    import SearchBanner from '@/components/SearchBanner'
    export default {
    components:{
    ResearchBase,
    SearchBanner
    },

  data(){
    return{
    checkBoxSelectionAC: [],
    checkBoxSelectionDF: [],
    checkBoxSelectionGH: [],
    checkBoxSelectionIK: [],
    showColArtifacts:false,
    showColPictorial:false,
    noImage:'',
    }
    },

    computed:{
    ...mapState('Artifacts', ['availableArtifacts', 'artifactSummary', 'availableArtifactsLoaded', 'availableArtifactSummary'] ),


    showArtifacts(){
    if (this.availableArtifactSummary ){
    return true
    }else{
    return false
    }
    },

    // artifactRecords(){
    //   return this.availableArtifacts
    // },

    artifactRecords(){
    // We will use the checkBoxSelection to filter what is shown on the screen
    let filter = this.checkBoxSelectionAC

    if(this.checkBoxSelectionAC.length > 0){
        if(this.checkBoxSelectionAC[0] == 'Show All Records'){
          console.log('YesSir')
          return this.availableArtifacts
        }else
         {
          var filtered = this.availableArtifacts.filter(
          function(val) {
          for (var i = 0; i < filter.length; i++)
           {
            if (val.Artifact_Name == filter[i]) {
              return true;
            }
           }})
           return filtered
         }}
    else
    {
      return []
    }

    },

    checkBoxDataAC(){
    // const test = {Artifact:'Show All Records', Letter: '', Qty: ''}
    const test = ['Show All Records']
    // test.Qty = this.availableArtifacts.length
    const temp =  this.artifactSummary.filter((ele)=>{
      if(ele.Letter == "A" || ele.Letter == "B" || ele.Letter =="C"){
        return ele.Letter}
    })
    let result = temp.map((ele)=> ele.Artifact )
    result.unshift(test)
    return result
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
    }

    },
    // mounted(){
      // this.loadArtifactData()
    // },


    // methods:{
      // ...mapActions('Artifacts',['getAvailableArtifacts', 'getArtifactSummary']),

    // loadArtifactData(){
      // this.getArtifactSummary()
    // this.getAvailableArtifacts()

    // },
    methods:{
      changeCols(num){
        const root = document.documentElement
      root.style.setProperty('--cols', num)
      },

    }


    }

  </script>

  <style scoped >


   .dataresults{
    background-color:var(--accent);
    min-height:290px;
   }

   .artifact{
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

    .selects{
      display:flex;
      justify-content: space-around;
    }

    .lu{
     background-color:white;
     border-radius:0%;
     color:black;
     font-size:1em;
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


    h3{
    color:var(--museum-green);
    }

    .imgBackup{
    width:100%;
    height:auto;
    background: url('https://picsum.photos/200')
    }

    </style>

