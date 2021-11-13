<template>
  <div>
    <ResearchBase>
      <template v-slot:intro>
        <div class="pagelayout">
          <div class="menulayout">
            <v-row>
              <v-col
                v-for="(image, index) in images"
                :key="index"
                cols="5"
              >
                <v-hover
                  v-slot="{hover}"
                  open-delay="200"
                >
                  <v-card
                    class="card-layout pa-5"
                    style="background-color:var(--accent)"
                    :class="{'on-hover':hover}"
                    :elevation="hover ? 12 : 4"
                    @click="selectAboutInfo(image.title)"
                  >
                    <v-img
                      :src="$IMAGE_PATH+image.url"
                      :alt="image.alt"
                      ripple
                    />
                    <v-card-title
                      class="justify-center py-0 align-self-center"
                    />
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </div>
          <div style="margin-top:20px;">
            <transition name="fade">
              <button
                v-show="showBtn"
                class="searchBtn"
                @click="searchList"
              >
                Search {{ selectedTitle }}
              </button>
            </transition>
            <About
              :aboutdata="AboutInfo.data.intro"
              :showhint="showhelp"
            />
          </div>
        </div>
      </template>
    </Researchbase>
  </div>
</template>

<script>
import gsap from 'gsap'
import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
import About from '@/components/BaseComponents/BaseAboutShips'
import mills from '@/data/millsData.js'
import registry from '@/data/crlData.js'
import owners from '@/data/ownersData.js'
import wallace from '@/data/wallaceData.js'
import snider from '@/data/snidersData.js'
import csl from '@/data/cslData.js'
const tooltip = { intro: 'Hover mouse over images to see Intro' }
export default {
  name: 'ShipListLandingPage',
  title: 'ShipList Database',
  components: {
    About,
    ResearchBase
   },
  data() {
    return {
      showhelp:true,
      images: [
        {
          url:  'crl.jpg',
          alt: 'CRL',
          title: 'Canadian Registry',
          route: '/shiplists/CRL',
        },
        {
          url: 'mills.jpg',
          alt: 'MILLS',
          title: 'Mills',
          route: '/shiplists/mills',
        },

        {
          url: 'owners.jpg',
          alt: 'SOL',
          title: 'Ship Owners List',
          route: '/shiplists/SOL',
        },

        {
          url: 'wallace.jpg',
          alt: 'WALLACE',
          title: 'Wallace',
          route: '/shiplists/Wallace',
        },
        {
          url: 'csl.jpg',
          alt: 'CSL',
          title: 'Canada Steamship',
          route: '/shiplists/CSL',
        },
        {
          url: 'snider.jpg',
          alt: 'SNYDERS',
          title: 'Sniders',
          route: '/shiplists/snider',
        },
      ],
      selectedTitle:"Canadian Registry",
      museumLogo: 'shipswheel.jpg',
      AboutInfo:{route:'', data:''},

      // tabs: 0,
      // newpage:true,
      // renderComponent:true
    }
  },

  computed:{
  showBtn(){
      return this.AboutInfo.route!='' && true
      }
    },

  mounted: function(){
    this.$nextTick(this.selectAboutInfo('Canadian Registry'))
  },

  methods: {
  searchList(){

    this.$router.push(this.AboutInfo.route)
    // alert(this.AboutInfo.route)
  },

fadeSearchButton(){
 gsap.from('.searchBtn',{
   duration:2,
   opacity:0,
   scale:.1,
   y:-90,
   ease:"power3",
 })

},

    selectAboutInfo(title) {
      this.selectedTitle=title
      switch (title) {
        case 'Canadian Registry':
          this.AboutInfo.data = registry
          this.AboutInfo.route= '/shiplists/crl'

          break
        case 'Mills':
          this.AboutInfo.data = mills
          this.AboutInfo.route= '/shiplists/mills'
          break
        case 'Ship Owners List':
          this.AboutInfo.data = owners
          this.AboutInfo.route= '/shiplists/owners'
          break
        case 'Wallace':
          this.AboutInfo.data = wallace
          this.AboutInfo.route= '/shiplists/wallace'
          break
        case 'Sniders':
          this.AboutInfo.data = snider
          this.AboutInfo.route= this.AboutInfo.route= '/shiplists/snider'
          break

        case 'Canada Steamship':
          this.AboutInfo.data = csl
          this.AboutInfo.route= this.AboutInfo.route= '/shiplists/csl'
          break
        default:
          this.AboutInfo.data = tooltip
          // this.AboutInfo.route= ''
      }
        this.fadeSearchButton()
    },


    },

  }

</script>

<style scoped>


.pagelayout{
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 45% 55%;
  grid-template-areas:
  'm a ';
  position: relative;
  width: 100vw;
  min-height: auto;
  justify-content: space-around;
  /* z-index: 1; */
  /* background:var(--menu-theme-color); */
  /* background-color:red; */
   /* linear-gradient(rgba(75, 93, 150, 0.1), rgba(7, 74, 129, 0.9)); */
}

button{
  background-color:#39947f;
  border-radius:5px;
  border:1px black;
  padding: .25em .5em;
  box-shadow: 5px 5px 5px rgba(40,40,40,.7);
  margin-bottom:1em;
 }

.menulayout {
  grid-area: m;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  box-sizing: content-box;
  align-content: start;
  height:100%;
  align-self:stretch;
}

.v-card .card-layout{
border-radius:10px;
box-sizing: content-box;

}

.text-display{
  grid-area: a;
  font-family:'Lato-Regular';
  /* font-family:'Lato-Regular'; */
  /* font-family:'Quattrocento'; */
  font-size:1.1em;
  padding: 0 1em;
  box-sizing: content-box;
  height:100%;


}


img {
  /* display: block; */
  width: 100%;
  object-fit: cover;
}



/* .about {
  width: 65vw;
  margin: 0 1em;
} */

/* .glasslook {
  background:var(--menu-theme-color);
  opacity: 1;
  object-fit:cover;
} */

.container{
  position:"center center";


}


a {
  text-decoration: none;
  color: teal;
  font-size: 0.8em;
}

.v-card {
  transition: all 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
  transform: scale(0.9);
}

p .msg {
  background-color: royalblue;
  color: white;
}

.fade-enter-from,
.fade-leave-to{
  opacity:0;
}

.fade-enter-active{
  transition:all 1s ease;
}


</style>
