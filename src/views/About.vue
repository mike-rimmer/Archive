<template>
  <div>
    <ResearchBase>
      <template v-slot:intro>
        <h3 class="mb-10">
          ABOUT THE COLLECTION
        </h3>
        <p>The official geographic limits of the collection are from Montreal to the Lakehead. The one exception to these limits is the library collection, which is International in scope. The Archival collection of the Marine Museum has over 3,500 linear feet of records and over 50,000 ship plans. The Artifact collection is over 4,000 objects and art. The Photograph collection contains over 31,000 images. The Library holdings contain over 12,000 titles.</p>
      </template>
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
                class="justify-center"
                :class="{'on-hover':hover}"
                @click="selectAboutInfo(image.title)"
              >
                <v-img
                  :src="image.url"
                  :alt="image.alt"
                  ripple
                  width="250"
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
                </v-img>
              </v-card>
            </v-hover>
          </v-col>

          <transition name="fade">
            <div
              v-show="isValid"
              style="background-color:hsla(60,20%,80%,.7); padding:1em; min-height:300px; margin-top:15px;"
            >
              <AboutInfo :aboutdata="AboutInfo.intro" />
              <v-btn
                @click="$router.push('/collections')"
              >
                Search
              </v-btn>
            </div>
          </transition>
        </v-row>
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
        show:true,
        isValid: false,
        AboutInfo:archives,
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
          url: IMGPATH + 'pictorial.png',
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
      this.isValid=false
      // this.show = false
      switch (title) {
        case 'Archives':
          this.AboutInfo = archives
          // this.$nextTick(()=>this.show=true)
          this.isValid=true
          break
        case 'Artifacts':
          this.AboutInfo = artifacts
           this.isValid=true
          // this.$nextTick(()=>this.show=true)
          break
        case 'Photographs':
          this.AboutInfo = photographs
           this.isValid=true
          break
        case 'Library':
          this.AboutInfo = library
           this.isValid=true
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
