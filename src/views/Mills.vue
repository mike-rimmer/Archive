<template>
  <div class="background">
    <v-row
      no-gutters
    />

    <v-row
      no-gutters
    >
      <v-col
        lg="3"
      >
        <MillsQryFrm
          class="d-print-none"
          :ships="shipnames"
          :years="millsyears"
          :form-title="title"
          :about-registry="title"
          @searchByProv="getMillsDataByProv"
          @searchByYear="getMillsDataByYear"
          @searchByReason="getMillsDataByReason"
          @searchByShip="getMillsDataByShip"
          @hidePopUp="hidePopUp"
          @clearMillsSummaryFrm="resetMillsData"
        />
        <popUp v-show="showPopUp">
          {{ errMsg }}
        </popup>
      </v-col>
      <v-col
        lg="9"
      >
        <v-card class="mx-4 d-print-none">
          <MillsSummaryDisplayFrm
            :mills-data="millsData"
            :title="displayFrmTitle"
          />
        </v-card>
      </v-col>
    </v-row>
    <CardRack
      class="d-print-none"
      :cart="MillsCart"
    />
  </div>
</template>

<script>
import millsData from '../data/datasource.js'
import lists from '../data/dbListsIntroData.js'
import ApiServices from '../services/ApiServices'

import Bus from '../services/Bus'

// Need to register following in components as they
// will be used in components
// import RegistryMenu from '../components/RegistryMenu.vue'
import CardRack from '../components/CardRack.vue'
import MillsQryFrm from '../components/MillsQryFrm.vue'
import SidebarImages from '../components/SidebarImages'
import MillsSummaryDisplayFrm from '../components/MillsSummaryDisplayFrm'
// import UnderConstruction from '../components/UnderConstruction'
// import ToolTip from '../components/ToolTip'
import popUp from '../components/PopUp'
import {mapState} from 'vuex'
export default {
  name: 'HomePage',
  components: {
    MillsQryFrm,
    CardRack,
    MillsSummaryDisplayFrm,
    // ToolTip,
    popUp,
  },
  data(){
    return{
      displayFrmTitle:"The New Mills' List Registered Canadian Steamships 1817 - 1930 over 75 feet",
      title:'Mills List',
      errMsg:false,
      showPopUp:false,
      tp_regTip:
        'This is a sample tooltip (optional) which can be applied to any component in order to provide direction',
      tp_MillsQryStatus:
        'Select your preferred seach criteria from one of the following pick lists. The results of your selection will appear in a table.',
      tp_MillsSummary:
        'You can order each column alphabetically by  left-clicking on the relevent column. Clicking on a particular row will result expose more details for that selection.',
      millsData: [],
      shipnames: [],
      shiplistTitle: millsData.shipListsTitle,
      shiplistDesc: millsData.shipListDesc,
      millsyears: millsData.MillsDates,
    }
  },
   computed: {
     ...mapState(['MillsCart']),

    showSummary() {
      return !this.showIntro
    },
  },
  created() {
    // Pre load data
     ApiServices.getMillsLookupVesselNames()
         .then((response) => {
          if (!response.data.message) {
            this.errMsg = ''
            this.showPopUp = false
            this.shipnames = response.data
            this.showIntro = false
            // console.log(this.millsData.length);
          } else {
            this.errMsg = response.data.message
            this.showPopUp = true
          }
        })
        .catch((error) => {
         this.errMsg = error
          this.showPopUp = true
        })
  },

  mounted() {
    // this.startUp = true
    Bus.$on('addItemToMillsStore', (payload) =>{
       this.$store.dispatch("addItemToMillsCart", payload)
    })
  },

  methods: {
    resetMillsData(){
      this.millsData=[]
    },

    hidePopUp() {
      this.showPopUp = false
    },

    toggleIntroSummary() {
      this.showWhenNotSearch = !this.showWhenNotSearch
      this.toggleIntroSummary = !this.toggleIntroSummary
    },

    // registryChange(selected) {
    //   const index = this.shiplistTitle.indexOf(selected)
    //   this.registryDetails = this.forms[index].title
    //   this.activelist = this.forms[index].type
    //   this.WhichForm = this.forms[index].type
    //   this.selectedForm = index
    //   this.startUp = true
    //   this.showIntro = true
    // },
    getMillsDataByProv(prov) {
      this.millsData = []
      if (prov == '') {
        return
      }

      ApiServices.getMillsSummaryByProv(`'${prov}'`)
        .then((response) => {
          if (!response.data.message) {
            this.errMsg = ''
            this.showPopUp = false
            this.millsData = response.data
            this.showIntro = false
            // console.log(this.millsData.length);
          } else {
            this.errMsg = response.data.message
            this.showPopUp = true
          }
        })
        .catch((error) => {
          this.errMsg = error
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
            this.errMsg = ''
            this.millsData = response.data
            this.showIntro = false
            // console.log(this.millsData);
          } else {
            this.errMsg = response.data.message
            this.showPopUp = true
          }
        })
        .catch((error) => {
          this.errMsg = error
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
            this.errMsg = ''
            this.millsData = response.data
            this.showIntro = false
            // console.log(this.millsData);
          } else {
            this.errMsg = response.data.message
            this.showPopUp = true
          }
        })
        .catch((error) => {
          this.errMsg = error
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
            this.errMsg = ''
            this.millsData = response.data
            this.showIntro = false
          } else {
            this.errMsg = response.data.message
            this.showPopUp = true
          }
        })
        .catch((error) => {
          this.errMsg = error
          this.showPopUp = true
        })
    },
  }

  }
</script>

<style scoped>

.background {
  position: relative;
  width: 100vw;
  z-index: 1;
}


.background::before {
  content: '';
  background: url('../assets/images/greatlakes.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -100;
  opacity: 0.5;
}

@media print {
  .noPrint{
    display:none;
  }
}
</style>
