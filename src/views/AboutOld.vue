<template>
  <div>
    <!-- <Banner /> -->
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
            :to="image.route"
            class="card-layout"
            :class="{'on-hover':hover}"
            :elevation="hover ? 12 : 4"
            @mouseover="selectAboutInfo(image.title)"
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
  </div>
</template>

<script>
const IMGPATH = 'https://marmuseum.ca/shiplists2/list-db-server/images/'
// import Banner from '@/components/BaseComponents/ResearchBaseBanner'
// import PlaceHolder from '@/components/BaseComponents/BasePlaceHolder'
export default {
  name: 'BasePlaceholder',
  components:{
    // Banner
  },
    data(){
      return{
          images: [
        {
          url: IMGPATH + 'Archives.png',
          alt: 'Archives',
          title: 'Archives',
          route: '/collections/archives',
        },
        {
          url: IMGPATH + 'Artefacts.png',
          alt: 'Artifacts',
          title: 'Artifacts',
          route: '/collections/artifacts',
        },

        {
          url: IMGPATH + 'Library.png',
          alt: 'Library',
          title: 'Library',
          route: '/collections/library',
        },

        {
          url: IMGPATH + 'Photographs.png',
          alt: 'Photographs',
          title: 'Photographs',
          route: '/collections/photos',
        }
      ]
      }
    }
  // PlaceHolder
}

</script>
