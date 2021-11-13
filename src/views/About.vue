<template>
  <div>
    <ResearchBase>
      <template v-slot:intro>
        <v-container>
          <h3 class="mb-10">
            ABOUT THE COLLECTION
          </h3>
          <p>The official geographic limits of the collection are from Montreal to the Lakehead. The one exception to these limits is the library collection, which is International in scope. The Archival collection of the Marine Museum has over 3,500 linear feet of records and over 50,000 ship plans. The Artifact collection is over 4,000 objects and art. The Photograph collection contains over 31,000 images. The Library holdings contain over 12,000 titles.</p>
        </v-container>
      </template>
      <template v-slot:images>
        <v-container>
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

                  class="justify-center"
                  :class="{'on-hover':hover}"
                  @click="selectAboutInfo(image.title)"
                >
                  <v-img
                    :src="$IMAGE_PATH + image.url"
                    :alt="image.alt"
                    ripple
                    width="250"
                  />
                </v-card>
              </v-hover>
            </v-col>


            <div
              class="aboutinsert"
            >
              <div v-html="AboutInfo.data.intro" />
              <v-btn
                @click="$router.push(AboutInfo.url)"
              >
                Search
              </v-btn>
            </div>
          </v-row>
        </v-container>
      </template>
    </researchbase>
  </div>
</template>

<script>
// const $IMAGE_PATH  = 'https://marmuseum.ca/shiplists2/list-db-server/images'
 import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
//  import AboutCard from '@/components/BaseComponents/BaseAbout'
 import gsap from 'gsap'
//  https://blog.logrocket.com/animating-vue-with-greensock/
 import Artifacts from '@/data/artifactsData.js'
 import Archives from '@/data/archivesData.js'
 import Library from '@/data/libraryData.js'
 import Photographs from '@/data/photographData.js'
export default {
  name: 'About',
  components:{
  ResearchBase,
  // AboutCard,
  },
    data(){
      return{
        show:true,
        isValid: false,
        AboutInfo:{data:'', url:''},
        images: [
        {
          url: 'Archives.png',
          alt: 'Archives',
          title: 'Archives',
          route: '/collections/archives',
        },
        {
          url: 'Artefacts.png',
          alt: 'Artifacts',
          title: 'Artifacts',
          route: '/collections/artifacts',
        },

        {
          url: 'Library.png',
          alt: 'Library',
          title: 'Library',
          route: '/collections/library',
        },

        {
          url: 'pictorial.png',
          alt: 'Photographs',
          title: 'Photographs',
          route: '/collections/pictorial',
        }
      ]
      }
    },

    methods:{
      selectAboutInfo(title) {
        // alert(title)
      // this.isValid=false
      // this.show = false
      switch (title) {
        case 'Archives':
          this.AboutInfo.data = Archives
          this.AboutInfo.url = '/collections/archives'

          // this.$nextTick(()=>this.show=true)
        break
        case 'Artifacts':
          this.AboutInfo.data = Artifacts
           this.AboutInfo.url = '/collections/artifacts'

          // this.$nextTick(()=>this.show=true)
          break
        case 'Photographs':
          this.AboutInfo.data = Photographs
           this.AboutInfo.url = '/collections/pictorial'

          break
        case 'Library':
          this.AboutInfo.data = Library
           this.AboutInfo.url = '/collections/library'

          break
        default:
          }


      // this.showInfo=true
      // setTimeout(() => {
        //    this.showInfo = true
      // }, 1000);
        gsap.fromTo('.aboutinsert',{opacity:0, scale:0 },
        {opacity:1, scale:1, duration:1, ease:"sine.inOut"})
    },
    }
  // PlaceHolder
}

</script>

<style scoped>
.on-hover{
  transition: all .8s ease-out;
    /* border-style:solid ; */
    filter:brightness(.5);
    cursor:pointer;
}

.aboutinsert{
  background-color:var(--accent);
  padding:1em;
  min-height:360px;
  margin-top:15px;
  opacity:0;
}

</style>
