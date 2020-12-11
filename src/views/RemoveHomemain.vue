<template>
  <div class="home">
    <div class="left">
      <RegistryMenu @registryChange="registryChange($event, 'selected')" />
      <p>{{ registryDetails }}</p>
      <!-- <MillsQryFrm
        v-show="activelist === 'Mills List'"
        :ships="shipnames"
        :years="millsyears"
        :form-title="activelist"
        :about-registry="registryDetails"
        @searchByProv="getMillsDataByProv"
        @searchByYear="getMillsDataByYear"
        @searchByReason="getMillsDataByReason"
        @searchByShip="getMillsDataByShip"
      >
        <base-button />
      </MillsQryFrm> -->
      <!-- <div class="MillsImage">
        <img
          src="../assets/images/Mills_400.png"
          alt="Mill List"
        >
      </div> -->
    </div>
    <div class="gap" />
    <!-- Main Display Area -->
    <div class="right">
      <!-- <p>{{ millsFrmData}}</p> -->
      <IntroForm v-show="WhichForm == 'mills'">
        <div slot="body">
          <span v-html="millsFrmData" />
        </div>
        <!-- <div slot="sidebar">
          <SideBarImages />
        </div> -->
      </IntroForm>

      <!-- <MillsSummaryDisplayFrm
        v-show="WhichForm == 'general'"
        :mills-data="millsData"
      /> -->

      <!-- <PopUp
        v-show="showPopUp"
      >
        <h3 slot="msg">
          {{ fetchResults }}
        </h3>
      </PopUp> -->
      <!-- <MillsDetailDisplayFrm
        v-show="WhichForm == 'detailed'"
        :detail-data="detailData"
      /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import millsData from '../data/datasource'
// import MillsQryFrm from '../components/MillsQryFrm.vue'
// import MillsSummaryDisplayFrm from '../components/MillsSummaryDisplayFrm.vue'
import IntroForm from '../components/IntroForm.vue'
// import PopUp from '../components/PopUp.vue'
import RegistryMenu from '../components/RegistryMenu.vue'
import SideBarImages from '../components/SidebarImages.vue'
import Bus from '../services/Bus'
import ApiServices from '../services/ApiServices'
// import BaseButton from '../components/BaseButton.vue'
// import MillsDetailDisplayFrm from '../components/MillsDetailDisplayFrm.vue'
// import GenericQryFrm from '@/components/GenericQryFrm.vue';
// import WallaceQryFrm from '@/components/WallaceQryFrm.vue';

export default {
  components: {
    RegistryMenu,
    // MillsQryFrm,
    // MillsSummaryDisplayFrm,
    IntroForm,
    // SideBarImages,
    // Bus Bus is not used in the template it does not need to be added here,
    // MillsDetailDisplay,
    // PopUp,
    // BaseButton,
    // ApiServices ApiService is not used in the template it does not need to be added here,,

    // GenericQryFrm,
    // WallaceQryFrm,
  },

  data() {
    return {
      sampleList: ['Cleopatra', 'Enterprise', 'Druid', 'Howdy Doody'],
      shipSelected: 'mikie',
      WhichForm: 'mills',
      registryDetails: '',
      activelist: '',
      shiplistTitle: millsData.shipListsTitle,
      shiplistDesc: millsData.shipListDesc,
      millsFrmData: millsData.millsIntro,
      images: millsData.images,
      millsData: [],
      shipnames: [],
      millsyears: millsData.MillsDates,
      detailData: millsData.detailTestData,
      message: '',
      fetchResults: '',
      showPopUp: false,
    }
  },

  created() {
    // Pre load data
    fetch(
      'http://localhost/mills/mills-list-server/api/Mills/getMillsLookupShipnames.php'
    )
      // fetch('https://marmuseum.ca/mills/mills-list-server/api/Mills/getMillsLookupShipnames.php')
      .then((response) => response.json())
      .then((data) => {
        this.shipnames = data
        // console.log('readshipname called from created');
      })
  },

  mounted() {
    Bus.$on('switchforms', (payload) => {
      this.WhichForm = payload
    })
  },

  methods: {
    // getDataBase(db) {
    //   alert(`${db} Selected`);
    // },

    getMillsDataByProv(prov) {
      this.millsData = []
      ApiServices.getMillsSummaryByProv(`'${prov}'`)
        .then((response) => {
          if (!response.data.message) {
            this.fetchResults = ''
            this.showPopUp = false
            this.millsData = response.data
            // console.log(this.millsData);
          } else {
            this.fetchResults = response.data.message
            this.showPopUp = true
          }
        })
        .catch((error) => {
          this.fetchResult = error
          this.showPopUp = true
        })
    },

    getMillsDataByYear(year) {
      this.millsData = []
      ApiServices.getMillsSummaryByYear(`'${year}'`)
        .then((response) => {
          if (!response.data.message) {
            this.showPopUp = false
            this.fetchResults = ''
            this.millsData = response.data
            // console.log(this.millsData);
          } else {
            this.fetchResults = response.data.message
            this.showPopUp = true
          }
        })
        .catch((error) => {
          this.fetchResult = error
          this.showPopUp = true
        })
    },

    getMillsDataByReason(reason) {
      this.millsData = []
      ApiServices.getMillsSummaryByReason(`'${reason}'`)
        .then((response) => {
          if (!response.data.message) {
            this.showPopUp = false
            this.fetchResults = ''
            this.millsData = response.data
            // console.log(this.millsData);
          } else {
            this.fetchResults = response.data.message
            this.showPopUp = true
          }
        })
        .catch((error) => {
          this.fetchResult = error
          this.showPopUp = true
        })
    },

    getMillsDataByShip(ship) {
      this.millsData = []
      ApiServices.getMillsSummaryByShip(`'${ship}'`)
        .then((response) => {
          if (!response.data.message) {
            this.showPopUp = false
            this.fetchResults = ''
            this.millsData = response.data
            // Bus.$emit('shipsloaded')
            // console.log(this.millsData);
          } else {
            this.fetchResults = response.data.message
            this.showPopUp = true
          }
        })
        .catch((error) => {
          this.fetchResult = error
          this.showPopUp = true
        })
    },

    getMillsShipName() {
      this.millsData = []
      ApiServices.getMillsVesselNames()
        .then((response) => {
          if (response.data.message) {
            this.updateResults = response.message
            this.message = true
          } else {
            this.shipnames = response.data
          }
        })
        .catch((err) => {
          this.updateResults = `${err}!!!`
          this.message = true
        })
    },

    registryChange(selected) {
      const index = this.shiplistTitle.indexOf(selected)
      this.registryDetails = this.shiplistDesc[index]
      this.activelist = selected
      this.WhichForm = 'general'
    },
  },
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.home {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  position: relative;
  padding: 1em;
  z-index: 1;
}

.home::before {
  content: '';
  background: url('../../public/greatlakes.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -100;
  opacity: 0.3;
}

.left {
  flex: 25%;
}

.gap {
  flex: 1%;
}

.MillsImage {
  margin-top: 1em;
  width: 100%;
  text-align: center;
}

.MillsImage > img {
  box-shadow: 5px 5px 5px rgba(20, 20, 20, 0.5);
}
/* Remove for production */
/* .test{
    position:relative;
    display:flex;
    flex-wrap: wrap;
    border-radius:10px;
    margin-top:1em;
    padding: 0 1em 0 1em;
    background-color:chocolate;
} */

.right {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 70%;
}

/* .blocks{
  width:300px;
  height:400px;
  margin:2em;
  background-color:red;
  border-style: solid 1px black;
} */

@media (max-width: 800px) {
  .home {
    padding: 0.25em;
  }
  .left {
    flex: 100%;
  }

  .right {
    flex: 100%;
  }
}
</style>
