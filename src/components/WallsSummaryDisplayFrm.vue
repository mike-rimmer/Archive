<template>
  <div class="summaryfrm">
    <div class="sticky">
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
    <transition name="fade">
      <v-data-table
        dense
        :headers="headers"
        :items="millsData"
        :items-per-page="20"
        :search="search"
        :disable-pagination="true"
        class="elevation-6"
        sm="12"
        @click:row="handleClick"
      />
    </transition>
  </div>
</template>

<script>
import MillsDetailPopUp from '@/components/MillsDetailPopUp.vue'
import millsData from '@/data/datasource'
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
        { text: 'Mills #', value: 'mills' },
        { text: 'Vessel Name', value: 'vesselName' },
        { text: 'Official #', value: 'officialNum' },
        { text: 'Where Built', value: 'whereBuilt' },
        { text: 'Date Built', value: 'dateBuilt' },
        { text: 'Reason Closed', value: 'reasonClosed' },
      ],
      showDetailFrm: false,
      // Used to initially test the v-data-table
      millsDatatest: millsData.testData,
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
  height: 80vh;
  overflow-y: auto;
}

.sticky {
  padding-top: 0;
  margin-top: 0;
  padding-left: 0;
  top: 0;
  height: 40px;
  background-color: rgb(86, 134, 146);
  position: sticky;
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
