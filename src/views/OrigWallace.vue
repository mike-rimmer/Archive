<template>
  <div class="background">
    <div
      v-if="loadingDataFinished"
      style="width:80%;
      margin:auto;"
    >
      <v-data-table
        dense
        :headers="headers"
        height="650"
        width="80%"
        :items="wallaceData"
        :items-per-page="40"
        :search="search"
        :disable-pagination="true"
        class="elevation-6"
        @click:row="handleClick"
      />
      <BaseDetailPopUp
        v-show="haveDetails"
        :record="wallaceDetails"
        @click="haveDetails = !haveDetails"
      />
    </div>
    <div v-else>
      <p>Please Wait ... loading Data</p>
      <v-progress-circular
        :rotate="-90"
        :size="100"
        :width="15"
        :value="value"
        color="pink"
      >
        {{ value/40 }}
      </v-progress-circular>
      <!-- <v-progress-circular
        indeterminate
        color="red"
      /> -->
    </div>
  </div>
</template>
    <script>
// No need to register the following as components
// since they wont be used in template
import millsData from '../data/datasource.js'
import Bus from '../services/Bus'
import lists from '../data/dbListsIntroData.js'
import ApiServices from '../services/ApiServices'
import BaseDetailPopUp from '@/components/BaseDetailPopUp.vue';

export default {
  name: 'HomePage',
  components: {
    BaseDetailPopUp
  },

  data() {
    return {
      interval:{},
      value:0,
      gettingData:false,
      search:'',
      wallaceData:[],
      wallaceDetails:{},
      haveDetails:false,
       headers: [
        { text: 'Id', class: 'sticky-header', value: 'id' },
        { text: 'Vessel Name', class: 'sticky-header', value: 'vessel' },
        { text: 'Registration#', class: 'sticky-header', value: 'registration' },
        { text: 'Where Built', class: 'sticky-header', value: 'whereBuilt' },
        { text: 'Reason Closed', class: 'sticky-header', value: 'reasonClosed' },

      ],
    }
  },

  computed: {
     loadingDataFinished(){
       return ! this.gettingData
     }
    },

  created() {
    // Pre load data
     this.value = 0
     this.interval = setInterval( () =>{
     if ( this.value == 100){
       return (this.value = 0)
     }else{
       this.value += 35
     }
    },4)
    this.gettingData = true
    console.log(this.gettingData)
    fetch(
     'http://localhost/mills/mills-list-server/api/Walls/getWallsSummaryInitialLoad.php'
    )
      // fetch(
      //   'https://marmuseum.ca/mills/mills-list-server/api/Mills/getMillsLookupShipnames.php'
      // )
      .then((response) => response.json())
      .then((data) => {
        console.log(this.gettingData)
        this.gettingData=false
        this.wallaceData = data
        clearInterval(this.interval)
        // console.log('readshipname called from created');
      })
  },

  mounted() {
    Bus.$on('closeDetailFrm', data =>{
      this.haveDetails = !this.haveDetails
    })
  },

  methods: {
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
            this.fetchResults = response.data.message
            this.showPopUp = true
          }
        })
        .catch((error) => {
          this.fetchResult = error
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
  height: 100vh;
  padding: 1em;
  z-index: 1;
}

.v-progress-circular {
  margin: 1rem;
}

.v-data-table >>> .sticky-header {
  position: sticky;
  top: 0px;
  height: 30px;
  font-size: 1em;
  font-weight: bold;
  background-color: lightgrey;
  /* document.documentElement.style.setProperty('--toolbarHeight', height)  */
}

.v-data-table >>> .v-table_wrapper {
  overflow: unset;
  width:80%;
  margin:auto;

}

.layout {
  display: flex;
  /* flex-wrap: wrap; */
  width: 90vw;
  height: 90%;
  margin: 0 auto;
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

.left {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.sidebar {
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  justify-content: center;
}
.left {
  flex: 0 0 15%;
}

.main {
  flex: 1 1 75%;
  margin: 1em 2em 0em 2em;
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
  width: 260px;
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

