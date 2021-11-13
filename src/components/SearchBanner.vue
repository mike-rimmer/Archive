<template>
  <div class="searchintro">
    <v-card
      width="95%"
      class="mx-auto pa-10 mt-10"
    >
      <h2 style="color:var(--museum-green);">
        Browse by Collections
      </h2>
      <v-row class="justify-space-around">
        <v-col
          cols="2"
        >
          <button
            @click="loadArtifactData()"
          >
            <router-link
              :to="artifactRoute"
            >
              Artifact
            </router-link>
          </button>
          <div>
            <ul>
              <li
                v-for="(item,index) in artifactLookup"
                :key="index"
              >
                <button class="lu">
                  {{ item }}
                </button>
              </li>
            </ul>
          </div>
        </v-col>

        <v-col
          cols="2"
        >
          <button
            @click="loadArtifactData()"
          >
            <router-link
              :to="archivalRoute"
            >
              Archives
            </router-link>
          </button>

          <div>
            <ul>
              <li
                v-for="(item,index) in archivalLookup"
                :key="index"
              >
                <button class="lu">
                  {{ item }}
                </button>
              </li>
            </ul>
          </div>
        </v-col>

        <v-col
          cols="2"
        >
          <button
            @click="loadBiblioData()"
          >
            <router-link
              :to="biblioRoute"
            >
              Biblio
            </router-link>
          </button>

          <div>
            <ul>
              <li
                v-for="(item,index) in archivalLookup"
                :key="index"
              >
                <button class="lu">
                  {{ item }}
                </button>
              </li>
            </ul>
          </div>
        </v-col>


        <v-col
          cols="2"
        >
          <button
            @click="loadPictorialData()"
          >
            <router-link
              :to="pictorialRoute"
            >
              Pictorial
            </router-link>
          </button>

          <div>
            <ul>
              <li
                v-for="(item,index) in pictorialLookup"
                :key="index"
              >
                <button class="lu">
                  {{ item }}
                </button>
              </li>
            </ul>
          </div>
        </v-col>

        <v-col
          cols="2"
        >
          <button
            @click="loadDSerialDataData()"
          >
            <router-link
              :to="dserailRoute"
            >
              DSerial
            </router-link>
          </button>

          <div>
            <ul>
              <li
                v-for="(item,index) in dserialLookup"
                :key="index"
              >
                <button class="lu">
                  {{ item }}
                </button>
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>

      <v-text-field
        label="Search"
        hide-details="auto"
      />
    </v-card>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    name:"SearchBanner",
    data(){
      return{
      artifactRoute:'/collections/artifacts',
      archivalRoute:'/collections/archives',
      biblioRoute:'/collections/biblio',
      dserailRoute:'/collections/dserial',
      pictorialRoute:'/collections/pictorial',
      libraryRoute:'/collections/library',
      artifactLookup:[
      'Artifact Name',
      'Vessel',
      'Dimensions',
      'Date',
      'Remarks'
    ],
    pictorialLookup:[
      'Author','Date', 'Fonds','Media', 'Type', 'Publisher', 'Remarks',' Scale', 'Headings'
    ],

    archivalLookup:[
      'Author','Craftsman', 'Date','Fonds','Media', 'Source', 'Headings', 'People'
    ],
    dserialLookup:[
      'Title','Author', 'Date','Journal Name','Publisher', 'Headings', 'Vessel Name'
    ],

    biblioLookup:[
      'Author', 'Date','Library of Congress Call #','Publisher', 'Remarks','Heading', 'Title', 'Vessel Name'
    ]
  }

},


  methods:{
  ...mapActions('Artifacts',['getAvailableArtifacts', 'getArtifactSummary']),
  ...mapActions('Pictorials',['getAvailablePictorials', ]),

    loadArtifactData(){
    this.getArtifactSummary()
    this.getAvailableArtifacts()
    },

    loadPictorialData(){
      this.getAvailablePictorials()
    },

    loadDSerialData(){
      alert('DSerial Data Loaded')
    },

    loadArchivalData(){
      alert('Archival Data Loaded')
    },

    loadBiblioData(){
      alert('Biblo Data Loaded')
    }


  }
}
</script>

<style  scoped>
.searchintro{
  min-height:300px;
  background-color: var(--accent);
  padding-top:2em;
}



</style>
