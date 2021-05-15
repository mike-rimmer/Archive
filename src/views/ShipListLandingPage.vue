<template>
  <div>
    <ResearchBase>
      <template v-slot:images>
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
                    >
                    <v-card-title
                      class="justify-center py-0 align-self-center"
                    >
                      <button>
                        <router-link
                          :to="image.route"
                          class="white--text"
                        />
                        <!-- <p style="font-size:.8em;font-weight:bold; margin-top:10px">
                  {{ image.title }}
                </p> -->
                      </button>
                    </v-card-title>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </div>

          <About
            :aboutdata="AboutInfo.intro"
            showhelp="showhelp"
          />
        </div>
      </template>
      <template v-slot:body />
    </Researchbase>
  </div>
</template>
<script>
// import Mills from '@/views/Mills'
// import Owners from '@/views/Owners'
// import Registry from '@/views/Registry'
// import Wallace from '@/views/Owners'
// import gsap from 'gsap'
const IMGPATH = 'https://marmuseum.ca/shiplists2/list-db-server/images/'
import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
import About from '@/components/BaseComponents/BaseAbout'
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
          url: IMGPATH + 'registry.png',
          alt: 'CRL',
          title: 'Canadian Registry',
          route: '/shiplists/CRL',
        },
        {
          url: IMGPATH + 'mills.png',
          alt: 'MILLS',
          title: 'Mills',
          route: '/shiplists/mills',
        },

        {
          url: IMGPATH + 'owners.png',
          alt: 'SOL',
          title: 'Ship Owners List',
          route: '/shiplistsSOL',
        },

        {
          url: IMGPATH + 'wallace.png',
          alt: 'WALLACE',
          title: 'Wallace',
          route: '/shiplists/Wallace',
        },
        {
          url: IMGPATH + 'CSL.png',
          alt: 'CSL',
          title: 'Canada Steamship',
          route: '/shiplists/CSL',
        },
        {
          url: IMGPATH + 'snider.png',
          alt: 'SNYDERS',
          title: 'Sniders',
          route: '/shiplists/',
        },
      ],
      museumLogo: IMGPATH + 'shipswheel.jpg',
      AboutInfo:'',
      showInfo: true,
      // tabs: 0,
      // newpage:true,
      // renderComponent:true
    }
  },

  methods: {
    selectAboutInfo(title) {
      // this.showInfo = false
      switch (title) {
        case 'Canadian Registry':
          this.AboutInfo = registry
          this.forceRerender()
          break
        case 'Mills':
          this.AboutInfo = mills
          this.forceRerender()
          break
        case 'Ship Owners List':
          this.AboutInfo = owners
          this.forceRerender()
          break
        case 'Wallace':
          this.AboutInfo = wallace
          this.forceRerender()
          break
        case 'Sniders':
          this.AboutInfo = snider
          break

        case 'Canada Steamship':
          this.AboutInfo = csl
          break
        default:
          this.AboutInfo = tooltip
      }


      // this.showInfo=true
      // setTimeout(() => {
      //    this.showInfo = true
      // }, 1000);
    },

    forceRerender() {
      this.$forceUpdate()
      // this.rendeComponent = false;
      // this.$nextTick(() =>{
      //   this.renderComponent = true;
      // })
    },

  }
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

.test-enter-from,
.test-leave-to{
  opacity:0;
  transform:translateY(-60px);
}

.test-enter-active{
  transition:all 1s ease;
}


</style>
