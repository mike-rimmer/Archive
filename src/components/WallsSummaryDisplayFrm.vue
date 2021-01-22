<template>
  <!--
**********
Note: This Form receives a prop 'wallsData' containing records from the server
The records can be sorted asc/dec by clicking the applicable column header
If a user click on a row a function is called to fetch the detailed info from the server which is then displayed on Card 'millsDetailsPopUp'.
**********
-->
  <div class="summaryfrm color grey lighten-2">
    <div>
      <h3>
        {{ title }}
      </h3>

      <div>
        <v-data-table
          dense
          :headers="headers"
          :items="wallsData"
          height="450"
          class="elevation-6"
          :items-per-page="rowsPerPage"
          @click:row="getDetailedRecord"
        />
      </div>

      <v-scale-transition
        origin="center center"
      >
        <BaseDetailPopUp
          v-show="showDetailFrm"
          :record="detailData"
        />
      </v-scale-transition>
    </div>
  </div>
</template>

<script>
import millsData from '@/data/datasource';
import Bus from '@/services/Bus';
import APIServices from '@/services/ApiServices';
import BaseDetailPopUp from '@/components/BaseDetailPopUp';
export default {
  components: {
    BaseDetailPopUp
  },

  props: {
    wallsData: {
      type:Array,
      default: ()=>{
        return []
      }
    },

    title:{
      type:String,
      default:''
    }
  },

  data() {
    return {
      search: '',
      headers: [
        { text: 'Id', value: 'id' },
        { text: 'Vessel Name', value: 'vessel' },
        { text: 'Registration #', value: 'registration' },
        { text: 'Where Built', value: 'whereBuilt' },
        { text: 'Reason Closed', value: 'reasonClosed' },
      ],
      showDetailFrm: false,
      // Used to initially test the v-data-table
      millsDatatest: millsData.testData,
      detailData: {},
      rowsPerPage:12
    }
  },
  mounted() {
    Bus.$on('closeDetailFrm', () => {
      this.showDetailFrm = false
    })


  },
  methods: {
    getDetailedRecord(rowData) {
      const id = rowData.id
      this.getWallsDetailFromServer(id)
    },

    getWallsDetailFromServer(id) {
      APIServices.getWallsDetailByID(`'${id}'`)
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
  }
}

</script>

<style scoped>
h3 {
  margin: 0;
}
.summaryfrm {
  position: relative;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 1em;
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


.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
