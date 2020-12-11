<template>
  <div class="summaryfrm">
    <div class="locked">
      <h3 style="margin-bottom:1em;">
        Mills Summary Form
      </h3>

      <transition name="fade">
        <MillsDetailPopUp
          v-show="showDetailFrm"
          :record="detailData"
        />
      </transition>
    </div>



    <v-data-table
      dense
      :headers="headers"
      height="650"
      width="90%"
      :items="millsData"
      :items-per-page="40"
      :search="search"
      :disable-pagination="true"
      class="elevation-6"

      @click:row="handleClick"
    />
  </div>
</template>

<script>
import MillsDetailPopUp from '@/components/MillsDetailPopUp.vue'
// import millsData from '@/data/datasource'
import Bus from '@/services/Bus'
import APIServices from '@/services/ApiServices'

export default {
  components: {
    MillsDetailPopUp,
  },
  props: {
    millsData: Array,
  },
  data() {
    return {
      search: '',
      headers: [
        { text: 'Mills #', class: 'sticky-header', value: 'mills' },
        { text: 'Vessel Name', class: 'sticky-header', value: 'vesselName' },
        { text: 'Official #', class: 'sticky-header', value: 'officialNum' },
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
  mounted() {
    Bus.$on('closeDetailFrm', () => {
      this.showDetailFrm = false
    })
  },
  methods: {
    handleClick(rowData) {
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
.summaryfrm {
  position: relative;
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 1em;
  padding: 0 1em 0 1em;
  background-color: rgb(86, 134, 146);
  width: 100%;
  /* height: 80vh;
  overflow-y: auto; */
}
/* Can use / deep / or >>> or ::v-deep to force style on classes within components */
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
}

.locked {
  padding-top: 0;
  margin-top: 0;
  padding-left: 0;
  top: 0;
  height: 40px;
  background-color: rgb(86, 134, 146);
  /* position: sticky; */
}

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
