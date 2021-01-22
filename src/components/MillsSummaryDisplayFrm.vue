<template>
  <!--
**********
Note: This Form receives a prop 'millsData' containing records from the server
The records can be sorted asc/dec by clicking the applicable column header
If a user click on a row a function is called to fetch the detailed info from the server which is then displayed on Card 'millsDetailsPopUp'.
**********
-->
  <div
    class="summaryfrm color grey lighten-2"
  >
    <div>
      <h3>
        {{ title }}
      </h3>


      <!-- FIXME: This is currently Experimental but definitely a candidate for implementation -->
      <!-- <base-detail-pop-up
        v-show="showDetailFrm"
        :record="detailData"
      /> -->
      <div>
        <v-data-table
          dense
          :headers="headers"
          :items="millsData"
          height="450"
          :items-per-page="rowsPerPage"
          class="elevation-6 "
          @click:row="getDetailedRecord"
        />
      </div>

      <v-scale-transition
        origin="center center"
      >
        <!-- <BaseDetailPopUp
          v-show="showDetailFrm"
          :record="detailData"
        /> -->
        <MillsDetailPopUp
          v-show="showDetailFrm"
          :record="detailData"
        />
      </v-scale-transition>
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import MillsDetailPopUp from '@/components/MillsDetailPopUp.vue'
// import millsData from '@/data/datasource'
import Bus from '@/services/Bus'
import APIServices from '@/services/ApiServices'
//  Decide whether to go with this automatice Detail Card  FIXME:
// import BaseDetailPopUp from './BaseDetailPopUp.vue'

export default {
  components: {
    MillsDetailPopUp,
    // FIXME:Decide whether to go with this automatice Detail Card
    // BaseDetailPopUp,
  },
  props: {
    millsData: {
      type: Array,
      default: () => [],
    },
    fetchingData:{
       type:Boolean,
       default:false,
  },

    title:{
      type:String,
      default:''
    }

  },
  data() {
    return {
      rowsPerPage:12,
      search: '',
      headers: [
        { text: 'Mills #', class: 'sticky-header', value: 'mills'  },
        { text: 'Vessel Name', class: 'sticky-header', value: 'vesselName' },
        { text: 'Official #', class: 'sticky-header', value: 'officialNum'},
        { text: 'Where Built', class: 'sticky-header', value: 'whereBuilt' },
        { text: 'Date Built', class: 'sticky-header', value: 'dateBuilt' },
        {
          text: 'Reason Closed',
          class: 'sticky-header',
          value: 'reasonClosed',
        },
      ],
      showDetailFrm: false,
      // Used to initially test the v-data-table
      // millsData: millsData.testData,
      // detailData: millsData.detailTestData[0],
      detailData: {},
    }
  },

  computed:{

    },
  mounted() {
    Bus.$on('closeDetailFrm', () => {
      this.showDetailFrm = false
    })
  },

  methods: {
    getDetailedRecord(rowData) {
      const millsRecord = rowData.mills
      this.getMillsDetailFromServer(millsRecord)
    },

    getMillsDetailFromServer(millsRecord) {
      APIServices.getMillsDetailByMills(`'${millsRecord}'`)
        .then((response) => {
          if (!response.data.message) {
            this.fetchResults = ''
            this.showPopUp = false
            this.detailData = response.data
            this.showDetailFrm = true
            // console.log(this.detailData)
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
  },
}
</script>

<style scoped>
h3 {
  margin: 0;
}

.cardrack{
  display:flex;
  width:100vw;
  height:25vh;
  background-color: white;
}

.summaryfrm {
  position: relative;
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 1em;
  padding: 1em;
  /* background-color:lightgrey; */
  width: 100%;
  /* height: 80vh;
  overflow-y: auto; */
}
/* Can use / deep / or >>> or ::v-deep to force style on classes within components */
.v-data-table >>> .sticky-header {
  position: sticky;
  top: 0px;
  height: 30px;
  font-weight: bold;
  background-color: lightgrey;
  /* document.documentElement.style.setProperty('--toolbarHeight', height)  */
}

.v-data-table{
  font-size:.8em;
}

/* .v-data-table >>> .v-table_wrapper {
  overflow: unset;
} */



.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
