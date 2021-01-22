<template>
  <div class="background">
    <v-row
      no-gutters
      class="mb-4"
    />

    <v-row no-gutters>
      <v-col
        lg="3"
      >
        <WallsQryFrm
          :ships="shipnames"
          :years="wallaceYears"
          :form-title="title"
          :about-registry="title"
          @searchByShip="getWallsDataByShip"
          @searchByYear="getWallsDataByYear"
          @searchByProv="getWallsDataByProv"
          @searchByBuilder="getWallsDataByBuilder"
          @searchByReg="getWallsDataByRegistration"
          @searchByGenSearch="getWallsDataByGenSearch"
          @searchByReason="getWallsDataByReason"
          @hidePopUp="hidePopUp"
          @clearWallsSummaryFrm="resetWallsData"
        />
        <popUp v-show="showPopUp">
          {{ errMsg }}
        </popUp>
      </v-col>

      <v-col
        lg="9"
      >
        <v-card class="mx-4">
          <WallsSummaryDisplayFrm
            :walls-data="wallsData"
            :title="title"
            @addItem2Cart="addToWallsCart"
          />
        </v-card>
      </v-col>
    </v-row>
    <CardRack :cart="WallaceCart" />
  </div>
</template>

  <script>
// No need to register the following as components
// since they wont be used in template
import LocalData from '../data/datasource.js'
import lists from '../data/dbListsIntroData.js'
import ApiServices from '../services/ApiServices'
import Bus from '../services/Bus'
import WallsQryFrm from '@/components/WallsQryFrm';
import WallsSummaryDisplayFrm from '@/components/WallsSummaryDisplayFrm'
import CardRack from '../components/CardRack'
import popUp from '../components/PopUp'
import {mapState} from 'vuex'
export default {
  name: 'HomePage',
  components: {
    WallsQryFrm,
    WallsSummaryDisplayFrm,
    popUp,
    CardRack
  },

  data() {
    return {
      shipnames:[],
      wallaceYears:LocalData.WallaceDates,
      title:"Fredick W. Wallace - Record of Canadian Shipping 1786 - 1920",
      showPopUp:false,
      wallsData:[],
      errMsg:'Hi There',
      // interval:{},
      // value:0,
      // gettingData:false,
      // search:'',
      // wallaceData:[],
      // wallaceDetails:{},
      // haveDetails:false,
       headers: [
        { text: 'Id', class: 'sticky-header', value: 'id' },
        { text: 'Vessel Name', class: 'sticky-header', value: 'vessel', width:'1%' },
        { text: 'Registration#', class: 'sticky-header', value: 'registration'  },
        { text: 'Where Built', class: 'sticky-header', value: 'whereBuilt'  },
        { text: 'Reason Closed', class: 'sticky-header', value: 'reasonClosed'  },

      ],
    }
  },

  computed: {
      ...mapState(['WallaceCart']),
    //  loadingDataFinished(){
    //    return ! this.gettingData
    //  }
    },

  created() {
    ApiServices.getWallsLookupVesselNames()
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
    Bus.$on('addItemToWallaceCart', payload => {
     this.$store.dispatch("addItemToWallaceCart", payload)
    })
  },

  methods: {
    resetWallsData(){
      this.wallsData=[]
    },

    handleClick(rowData){
      const id = rowData.id
      this.getWallaceDetailsByID(id)
    },

    getWallaceDetailsByID(id){
      ApiServices.getWallaceDetailsByID(`'${id}'`)
        .then((response) => {
          if (!response.data.message) {
            this.haveDetails = true
            this.wallaceDetails = response.data
            this.showDetailFrm = true
            // console.log(this.detailData)
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
    getWallsDataByShip(ship){
      console.log('getWallsDataByShip')
       this.wallsData = []
      if (ship == '') {
        return
      }

      ApiServices.getWallsSummaryByShip(`'${ship}'`)
        .then((response) => {
          if (!response.data.message) {
            this.showPopUp = false
            this.errMsg = ''
            this.wallsData = response.data
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


    getWallsDataByYear(year){
       this.wallsData = []

      if (year == '') {
        return
      }
         ApiServices.getWallsSummaryByYear(`'${year}'`)
        .then((response) => {
          if (!response.data.message) {
            this.showPopUp = false
            this.errMsg = ''
            this.wallsData = response.data
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

    getWallsDataByProv(prov){
     this.wallsData = []
      if (prov == '') {
        return
      }

      ApiServices.getWallsSummaryByProv(`'${prov}'`)
        .then((response) => {
          if (!response.data.message) {
            this.errMsg = ''
            this.showPopUp = false
            this.wallsData = response.data
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

     getWallsDataByBuilder(builder){
     this.wallsData = []
      if (builder == '') {
        return
      }
      ApiServices.getWallsSummaryByBuilder(`'${builder}'`)
        .then((response) => {
          if (!response.data.message) {
            this.errMsg = ''
            this.showPopUp = false
            this.wallsData = response.data
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

    getWallsDataByRegistration(){
      console.log('getWallsDataByRegistration')
    },

    getWallsDataByGenSearch(){
      console.log("getWallsDataByGenSearch")
    },

    getWallsDataByReason(reason){
       this.wallsData = []
      if (reason == '') {
        return
      }
      ApiServices.getWallsSummaryByReason(`'${reason}'`)
        .then((response) => {
          if (!response.data.message) {
            this.showPopUp = false
            this.errMsg = ''
            this.wallsData = response.data
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


    hidePopUp() {
      this.showPopUp = false
    },

  },
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

</style>

