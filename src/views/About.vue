<template>
  <div>
    <ResearchBase>
      <template v-slot:images>
        <v-row>
          <v-col
            v-for="(image, index) in images"
            :key="index"
            cols="3"
          >
            <v-hover
              v-slot="{hover}"
              open-delay="200"
            >
              <v-card
                flat
                class="card-layout"
                :class="{'on-hover':hover}"
                @click="selectAboutInfo(image.title)"
              >
                <img
                  :src="image.url"
                  :alt="image.alt"
                  ripple

                  class="glasslook img-container"
                >
                <v-card-title
                  class="justify-center py-0 align-self-center"
                >
                  <button>
                    <router-link
                      class="white--text"
                      :to="image.url"
                    />
                  </button>
                </v-card-title>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </template>
      <template v-slot:intro>
        <h3>ABOUT THE COLLECTION</h3>
        <p>The official geographic limits of the collection are from Montreal to the Lakehead. The one exception to these limits is the library collection, which is International in scope. The Archival collection of the Marine Museum has over 3,500 linear feet of records and over 50,000 ship plans. The Artifact collection is over 4,000 objects and art. The Photograph collection contains over 31,000 images. The Library holdings contain over 12,000 titles.</p>
      </template>
      <template v-slot:body>
        <AboutInfo
          :aboutdata="AboutInfo.intro"
        />
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="$router.push('collections')"
        >
          Search
        </v-btn>
      </template>
    </researchbase>
  </div>
</template>

<script>
const IMGPATH = 'https://marmuseum.ca/shiplists2/list-db-server/images/'
 import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
 import AboutInfo from '@/components/BaseComponents/BaseAbout'
 import artifacts from '@/data/artifactsData.js'
 import archives from '@/data/archivesData.js'
 import library from '@/data/libraryData.js'
 import photographs from '@/data/photographData.js'
export default {
  name: 'About',
  components:{
  ResearchBase,
  AboutInfo,
  },
    data(){
      return{
        valid: false,
        AboutInfo:'',
          images: [
        {
          url: IMGPATH + 'Archives.png',
          alt: 'Archives',
          title: 'Archives',
          route: '/collections',
        },
        {
          url: IMGPATH + 'Artefacts.png',
          alt: 'Artifacts',
          title: 'Artifacts',
          route: '/collections',
        },

        {
          url: IMGPATH + 'Library.png',
          alt: 'Library',
          title: 'Library',
          route: '/collections/Library',
        },

        {
          url: IMGPATH + 'Photographs.png',
          alt: 'Photographs',
          title: 'Photographs',
          route: '/collections',
        }
      ]
      }
    },

    methods:{
      selectAboutInfo(title) {
        // alert(title)
      this.valid=true
      switch (title) {
        case 'Archives':
          this.AboutInfo = archives
          break
        case 'Artifacts':
          this.AboutInfo = artifacts
          break
        case 'Photographs':
          this.AboutInfo = photographs
          break
        case 'Library':
          this.AboutInfo = library
          break
        default:

      }


      // this.showInfo=true
      // setTimeout(() => {
      //    this.showInfo = true
      // }, 1000);
    },
    }
  // PlaceHolder
}

</script>
