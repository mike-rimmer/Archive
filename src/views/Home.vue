<template>
  <div class="layout">
    <div class="left">
      <ToolTip
        :tool-tip="tp_regTip"
        :right="true"
      >
        <template v-slot:activator="{on}">
          <div
            v-on="on"
          >
            <RegistryMenu @registryChange="registryChange($event, 'selected')" />
            <!-- TODO:Remove after testing -->
            <!-- <p>{{ selectedForm }}</p>
            <p>{{ WhichForm }}</p> -->
          </div>
        </template>
      </ToolTip>

      <ToolTip
        :tool-tip="tp_MillsQryStatus"
        :right="true"
      >
        <template v-slot:activator="{on}">
          <div
            v-on="on"
          >
            <MillsQryFrm
              v-show="WhichForm ==='mills'"
              :ships="shipnames"
              :years="millsyears"
              :form-title="activelist"
              :about-registry="registryDetails"
              @searchByProv="getMillsDataByProv"
              @searchByYear="getMillsDataByYear"
              @searchByReason="getMillsDataByReason"
              @searchByShip="getMillsDataByShip"
              @hidePopUp="hidePopUp"
            />
          </div>
        </template>
      </ToolTip>
      <popUp v-show="showPopUp">
        <template v-slot:msg>
          {{ fetchResults }}
        </template>
      </popUp>
      <UnderConstruction
        v-show="WhichForm !='mills' && startUp"
        :db-name="WhichForm"
      />

      <img
        v-show="showIntro && WhichForm =='mills'"
        class="mills-image"
        src="../assets/images/Mills_400.png"
        alt="Mill List"
      >
    </div>
    <div class="gap" />
    <div class="right">
      <div
        v-show="showIntro"
        Class="main"
        v-html="forms[selectedForm].intro"
      />

      <MillsSummaryDisplayFrm
        v-show="showSummary"
        :mills-data="millsData"
      />
      <div
        class="sidebar"
        :class="{sidebarhide: !showIntro}"
      >
        <SidebarImages
          v-show="showIntro"
          :images="forms[selectedForm].photos"
        />
      </div>
      <div class="gap" />
    </div>
  </div>
</template>
    <script>
// No need to register the following as components
// since they wont be used in template
import millsData from '../data/datasource.js'
// import Bus from '../services/Bus'
import lists from '../data/dbListsIntroData.js'
import ApiServices from '../services/ApiServices'

// Need to register following in components as they
// will be used in components
import RegistryMenu from '../components/RegistryMenu.vue'
import MillsQryFrm from '../components/MillsQryFrm.vue'
import SidebarImages from '../components/SidebarImages'
import MillsSummaryDisplayFrm from '../components/MillsSummaryDisplayFrm'
import UnderConstruction from '../components/UnderConstruction'
import ToolTip from '../components/ToolTip'
import popUp from '../components/PopUp'
export default {
  name: 'HomePage',
  components: {
    SidebarImages,
    MillsQryFrm,
    RegistryMenu,
    MillsSummaryDisplayFrm,
    UnderConstruction,
    ToolTip,
    popUp,
  },

  data() {
    return {
      tp_regTip:
        'This is a sample tooltip (optional) which can be applied to any component in order to provide direction',
      tp_MillsQryStatus:
        'Select your preferred seach criteria from one of the following pick lists. The results of your selection will appear in a table.',
      tp_MillsSummary:
        'You can order each column alphabetically by  left-clicking on the relevent column. Clicking on a particular row will result expose more details for that selection.',
      forms: lists,
      selectedForm: '3',
      WhichForm: '',
      registryDetails: '',
      activelist: '',
      activelistindex: 0,
      millsData: [],
      shipnames: [],
      shiplistTitle: millsData.shipListsTitle,
      shiplistDesc: millsData.shipListDesc,
      millsyears: millsData.MillsDates,
      // detailData: millsData.detailTestData,
      showIntro: false,
      startUp: false,
      showPopUp: false,
      fetchResults: '',
    }
  },

  computed: {
    showSummary() {
      if (this.startUp) {
        return !this.showIntro
      } else {
        return false
      }
    },

    solImages() {
      return this.forms.map((list) => {
        return list.photos
      })[0]
    },

    wallsImages() {
      return this.forms.map((list) => {
        return list.photos
      })[1]
    },

    millsImages() {
      return this.forms.map((list) => {
        return list.photos
      })[2]
    },

    cslImages() {
      return this.forms.map((list) => {
        return list.photos
      })[3]
    },

    snydImages() {
      return this.forms.map((list) => {
        return list.photos
      })[4]
    },
  },
  created() {
    // Pre load data
    // fetch(
    //   'http://localhost/mills/mills-list-server/api/Mills/getMillsLookupShipnames.php'
    // )
    fetch(
      'https://marmuseum.ca/mills/mills-list-server/api/Mills/getMillsLookupShipnames.php'
    )
      .then((response) => response.json())
      .then((data) => {
        this.shipnames = data
        // console.log('readshipname called from created');
      })
  },

  mounted() {
    // this.startUp = true
    // Bus.$on('switchforms', (payload) => {
    //   this.WhichForm = payload
    // })
  },
  methods: {
    hidePopUp() {
      this.showPopUp = false
    },

    toggleIntroSummary() {
      this.showWhenNotSearch = !this.showWhenNotSearch
      this.toggleIntroSummary = !this.toggleIntroSummary
    },

    registryChange(selected) {
      const index = this.shiplistTitle.indexOf(selected)
      this.registryDetails = this.forms[index].title
      this.activelist = this.forms[index].type
      this.WhichForm = this.forms[index].type
      this.selectedForm = index
      this.startUp = true
      this.showIntro = true
    },
    getMillsDataByProv(prov) {
      this.millsData = []
      if (prov == '') {
        return
      }
      ApiServices.getMillsSummaryByProv(`'${prov}'`)
        .then((response) => {
          if (!response.data.message) {
            this.fetchResults = ''
            this.showPopUp = false
            this.millsData = response.data
            this.showIntro = false
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
      if (year == '') {
        return
      }
      ApiServices.getMillsSummaryByYear(`'${year}'`)
        .then((response) => {
          if (!response.data.message) {
            this.showPopUp = false
            this.fetchResults = ''
            this.millsData = response.data
            this.showIntro = false
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
      if (reason == '') {
        return
      }
      ApiServices.getMillsSummaryByReason(`'${reason}'`)
        .then((response) => {
          if (!response.data.message) {
            this.showPopUp = false
            this.fetchResults = ''
            this.millsData = response.data
            this.showIntro = false
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
      if (ship == '') {
        return
      }
      ApiServices.getMillsSummaryByShip(`'${ship}'`)
        .then((response) => {
          if (!response.data.message) {
            this.showPopUp = false
            this.fetchResults = ''
            this.millsData = response.data
            this.showIntro = false
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
            this.showIntro = false
          }
        })
        .catch((err) => {
          this.updateResults = `${err}!!!`
          this.message = true
        })
    },
  },
}
</script>

<style scoped>
.layout {
  display: flex;
  /* flex-wrap: wrap; */
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  position: relative;
  padding: 1em;
  z-index: 1;
}

.layout::before {
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

.gap {
  flex: 0 0 1%;
}
.center {
  text-align: center;
}

.right {
  display: flex;
  flex: 1 1 75%;
}

.left,
.sidebar {
  display: flex;
  flex-direction: column;
  align-content: center;
}
.left {
  flex: 1 1 25%;
}

.sidebar {
  flex: 1 1 20%;
}

.main {
  flex: 1 1 75%;
  margin-right: 2em;
}
.title {
  flex: 1 1 75%;
  justify-items: center;
}

.salutation {
  line-height: 1em;
  background-color: red;
}

.sidebarhide {
  display: none;
}

img.mills-image {
  margin-top: 1em;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(20, 20, 20, 0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter,
.fade-leave-to {
  /* transform: scale(0); */
  opacity: 0;
}

@media (max-width: 1150px) {
  .layout {
    flex: 1 1 100%;
    flex-wrap: wrap;
  }

  .main {
    flex: 1 1 100%;
    flex-wrap: wrap;
  }

  .mills-image {
    display: none;
  }

  .sidebar {
    display: none;
  }
}
</style>

