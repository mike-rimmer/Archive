<template>
  <!-- Consider this for enlarging images https://github.com/diracleo/vue-enlargeable-image -->
  <v-container>
    <div id="wallaceships">
      <div class="mt-15">
        <h1>Wallace Ship Images Version</h1>
        <label
          for="vbtn"
        >The Marine Museum of Kingston offers a complete selection of Wallace ship images:</label>
        <v-btn-toggle
          v-model="islandscape"
          class="pl-5"
        >
          <v-btn>
            Landscape
          </v-btn>

          <v-btn
            class="ml-2"
          >
            Portrait
          </v-btn>
        </v-btn-toggle>
        <p>
          <!-- ShowLandScape: {{ showLandScape }}
          ShowLandScape: {{ islandscape }} -->
        </p>
      </div>


      <v-row
        v-if="showLandScape"
      >
        <v-col
          v-for="(image, index) in images"
          :key="image.id"
          tag="v-col"
          cols="3"
        >
          <v-card
            color="brown lighten-5"
          >
            <v-card-text>
              <div
                class="imagesstyle"
              >
                <v-img
                  class="thumbnail"
                  :src="$WALLACEIMGPATH+image.url"
                  :alt="image.name"
                  @click="showEnlargedImage(image.url, 'landscape', index)"
                />
              </div>
              <p class="title">
                {{ image.name }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row v-else>
        <v-col
          v-for="(image, index) in images"
          :key="image.id"
          tag="v-col"
          cols="3"
        >
          <v-card
            color="brown lighten-5"
          >
            <v-card-text>
              <div
                class="imagesstyle"
              >
                <v-img
                  class="thumbnail"
                  :src="$WALLACEIMGPATH+image.url"
                  :alt="image.name"
                  @click="showEnlargedImage(image.url, 'portrait', index)"
                />
              </div>
              <p class="title">
                {{ image.name }}
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>



      <!-- *************** This is the Image popup *******************-->
      <v-row>
        <transition
          @enter="enter"
          @leave="leave"
        >
          <div
            v-if="showEnlargedImg"
            class="image-popUp"
          >
            <button
              @click="getPreviousImage()"
            >
              <v-icon class="direction-icon">
                mdi-chevron-left
              </v-icon>
            </button>

            <div class="image-container">
              <img
                id="largeImage"
                class="enlarged-image"
                :src="$WALLACEIMGPATH+currentUrl"
                @click="showEnlargedImg = false"
              >

              <p
                @click="showEnlargedImg = false"
              >
                Click on Image to Return to Gallery
              </p>
            </div>

            <button
              @click="getNextImage()"
            >
              <v-icon class="direction-icon">
                mdi-chevron-right
              </v-icon>
            </button>
          </div>
        </transition>
      </v-row>
    </div>
  </v-container>
</template>

<script>
// import { wallaceImg } from '@/data/wallaceshipimages'
import {mapActions, mapState} from 'vuex'
import gsap from 'gsap'
export default {

  data() {
    return {
      showEnlargedImg:false,
      absolute: true,
      opacity: 0.8,
      overlay: false,
      currentUrl: '',
      zIndex: 20,
      // width:600,
      islandscape:0,
      currentEnlargedImg:{
        index:'',
        type:'',
        url:''
      },
      currentLandScapeIndex:'',
      currentPortraitIndex:'',
    }
  },

  computed:{
      ...mapState('Wallace',['WallaceLandScape', 'WallacePortrait','PortraitLoaded', 'LandScapeLoaded']),
      // portraitImages(){
      //   return this.WallacePortrait[0]
      // },

      showLandScape(){
        return this.islandscape == '0'
      },

      showPortrait(){
        return this.islandscape == '1'
      },

      images(){
        if(this.islandscape=='0'){
          return this.WallaceLandScape
        }else{
          return this.WallacePortrait
        }
      },

    },

  created (){
      this.getImages()
    },

  methods:{
    ...mapActions('Wallace',['loadWallaceImagesPortrait', 'loadWallaceImagesLandScape']),


    showEnlargedImage(url, type, index) {
      // housecleaning
      this.currentEnlargedImg.url = url
      this.currentEnlargedImg.index = index
      this.currentEnlargedImg.type = type

      this.currentUrl = url
      this.showEnlargedImg = true
      // this.animateEnlargedImage()
    },

     getImages(){
     this.loadWallaceImagesPortrait()
     this.loadWallaceImagesLandScape()
    },


    // Scroll through the array based on direction click whilst checking to be within range limits
    getNextImage(){
        let index = this.currentEnlargedImg.index + 1
        // check to make sure that index is withing array range
        if (index >= this.images.length) index = 0
          this.currentUrl = this.images[index].url
          this.currentEnlargedImg.index = index
      },


    // Scroll through the array based on direction click whilst checking to be within range limits
    getPreviousImage(){
        let index = this.currentEnlargedImg.index - 1
        // check to make sure that index is withing array range
        if (index < 0) index = this.images.length-1
          this.currentUrl = this.images[index].url
          this.currentEnlargedImg.index = index
      },

    // Animations go here
    enter(el, done){
      gsap.from(el,{scale:0, opacity:0, duration:1,
      onComplete:done})
    },

    leave(el, done){
      gsap.to(el,{scale:0, opacity:0, duration:1,
      onComplete:done})
    }

    }

  }


</script>
<style scoped>
      #wallaceships{
      position:relative;
      }

    .image-popUp{
      display:flex;
      /* background-color:rgb(223,205,157);
      background-color:rgb(209, 206, 206); */
      background-color:var(--accent);
      position:fixed;
      z-index:1;
      max-height:80%;
      max-width:80%;
      justify-content:space-between;
      align-items:center;
      width:70%;
      left:50%;
      top:50%;
      padding:1em;
      transform:translate(-50%, -50%);
      overflow-y: auto;
      box-shadow: 5px 5px 5px rgba(40,40,40,.7);

      }

.direction-icon{
  font-size:60px;
  color:black;
  flex:10%;
  transition: all .500s ease-out;
}

.direction-icon:hover{
  color:blue;
  transform:scale(1.1)
}

.image-container{
       flex:80%;
       text-align:center;
       margin-top:1em;
   }


 .image-container:hover{
   cursor:pointer;
 }


.enlarged-image{
  max-height:700px;
  max-width:90%;
  vertical-align:middle;
  object-fit:cover;
  object-position: top center;
  /* object-fit: contain; */
}


.portrait{
  height:800px;
  width: 500px;
  object-fit:cover;
}



.title{
text-align:center;
font-weight:bold;
color:black;
}

.mytest {
display: flex !important;
flex-direction: column !important;
}

.thumbnail {
border: solid 1px black;
border-radius:4px;
filter: grayscale(10%) drop-shadow(8px 8px 10px gray);
/* object-fit:; */
}

.thumbnail :hover{
  cursor:pointer;
}


.fade-enter-active,
.fade-leave-active {
transition: all 1s ease-in-out;
}

.fade-enter,
.fade-leave-to {
transform: scale(0);
opacity: 0;
}
</style>


