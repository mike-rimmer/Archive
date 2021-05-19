<template>
  <!-- Consider this for enlarging images https://github.com/diracleo/vue-enlargeable-image -->
  <v-container>
    <div class="mt-15">
      <h1>Wallace Ship Images</h1>
      <label
        for="vbtn"
      >The Marine Museum of Kingston offers a complete selection of Wallace ship images:</label>
      <v-btn-toggle
        v-model="islandscape"
        class="pl-5"
      >
        <v-btn
          class
        >
          Landscape
        </v-btn>

        <v-btn class="ml-2">
          Portrait
        </v-btn>
      </v-btn-toggle>
    </div>


    <v-row
      v-if="islandscape == 0"
    >
      <v-col
        v-for="image in images"
        :key="image.title"
        name="fade"
        tag="v-col"
        cols="3"
      >
        <v-card
          :key="image.title"
          color="brown lighten-5"
        >
          <v-card-text>
            <div
              class="imagesstyle"
            >
              <v-img
                class="img-style"
                :src="$IMGPATH+image.url"
                :alt="image.name"
                @click="showEnlargeImage($IMGPATH+image.url)"
              />
            </div>
            <p class="title">
              {{ image.name }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row else>
      <v-col
        v-for="image in images"
        :key="image.title"
        name="fade"
        tag="v-col"
        cols="3"
      >
        <v-card
          :key="image.title"
          color="brown lighten-5"
        >
          <v-card-text>
            <div
              class="imagesstyle"
            >
              <v-img
                class="img-style"
                :src="$IMGPATH+image.url"
                :alt="image.name"
                @click="showEnlargeImage($IMGPATH+image.url)"
              />
            </div>
            <p class="title">
              {{ image.name }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>


    <v-row>
      <v-overlay
        transition="fade-transition"
        :z-index="zIndex"
        :value="overlay"
        :opacity="opacity"
      >
        <div class="test">
          <v-img
            :src="currentUrl"
            class="normal"
            :width="islandscape == 0 ? 900 : 400"
            height="auto"
            style="filter:grayscale(100%)"
            @click="overlay = false"
          />


          <v-btn
            class="white--text"
            color="var(--image-primary-color)"
            @click="overlay = false"
          >
            Return to Gallery
          </v-btn>
        </div>
      </v-overlay>
    </v-row>
  </v-container>
</template>

<script>
// import { wallaceImg } from '@/data/wallaceshipimages'
import {mapActions, mapState} from 'vuex'
export default {


  data() {
    return {
      // images: wallaceImg,
      // IMGPATH:'http://marmuseum.ca/shiplists2/list-db-server/images/wallaceships/',
      absolute: true,
      opacity: 0.8,
      overlay: false,
      currentUrl: '',
      zIndex: 20,
      width:600,
      islandscape:0
    }
  },
    computed:{
      ...mapState('Wallace',['WallaceLandScape', 'WallacePortrait','PortraitLoaded', 'LandScapeLoaded']),
      // portraitImages(){
      //   return this.WallacePortrait[0]
      // },

      images(){
        if(this.islandscape == 0 ){
          return this.WallaceLandScape[0]
        }
        else{
          return this.WallacePortrait[0]
        }
      }
    },

  created (){
      this.getImages()
    },

  methods:{
    ...mapActions('Wallace',['loadWallaceImagesPortrait', 'loadWallaceImagesLandScape']),
    showEnlargeImage(url) {
      this.currentUrl = url
      this.overlay = true
    },

    getImages(){
     this.loadWallaceImagesPortrait()
     this.loadWallaceImagesLandScape()
    }
  },

}

</script>

<style  scoped>
.background{
  margin-top:4em;
  padding:0 5%;
  margin:0 auto;
  background:red;
}

.title{
  text-align:center;
  font-weight:bold;
  color:var(--image-primary-color)
}

.test {
  position: relative;
  display: flex !important;
  flex-direction: column !important;
}

.img-style {
  border: solid 6px lightgrey;
  filter: grayscale(10%) drop-shadow(8px 8px 10px gray);
  /* object-fit:; */
}

.imagestyle{
  /* width:300px; */
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.1s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  transform: scale(0);
  opacity: 0;
}

/* The following class is for the image zoom feature */
/* .zoom-on-hover {
  position: relative;
  overflow: hidden;
}
.zoom-on-hover .normal {
  width: 100%;
}
.zoom-on-hover .zoom {
  position: absolute;
  opacity: 0;
  transform-origin: top left;
}
.zoom-on-hover.zoomed .zoom {
  opacity: 1;
}
.zoom-on-hover.zoomed .normal {
  opacity: 0;
} */
</style>
