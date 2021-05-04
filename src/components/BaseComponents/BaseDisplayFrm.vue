<template>
  <!--
**********
Note: This Form receives a prop 'millsData' containing records from the server
The records can be sorted asc/dec by clicking the applicable column header
If a user click on a row a function is called to fetch the detailed info from the server which is then displayed on Card 'millsDetailsPopUp'.
**********
-->
  <div
    class="summaryfrm "
  >
    <div>
      <h3>
        {{ formtitle }}
      </h3>

      <div>
        <v-data-table
          dense
          :headers="headers"
          fixed-header
          :loading="isloading"
          loading-text="Data is loading ... please wait!"
          :items="tableData"
          :height="height"
          :footer-props="{
            'items-per-page-options':[100,200,300,400,500,1000,-1]}"
          :items-per-page="-1"
          class="elevation-6"
          @click:row="getDetailedRecord"
        />
      </div>

      <v-scale-transition
        origin="center center"
      >
        <MillsDetailPopUp
          v-show="showDetailFrm"
          :record="detailData"
        />
      </v-scale-transition>
    </div>
  </div>
</template>

<script>
import MillsDetailPopUp from '@/components/BaseComponents/BaseDetailPopUp.vue'
import Bus from '@/services/Bus'
import APIServices from '@/services/ApiServices'

export default {
  name:"MillsSummaryDisplayFrmVue",
  components: {
    MillsDetailPopUp,
  },

  props: {
    headers:{
      type:Array,
      default: ()=> []
    },
    isloading:{
      type:Boolean,
      default:false
    },

    height:{
      type:[String, Number],
      default:'450'
    },

    tableData: {
      type: Array,
      default: () => [],
    },
    fetchingData:{
       type:Boolean,
       default:false,
  },

    formtitle:{
      type:String,
      default:''
    }

  },
  data() {
    return {
      rowsPerPage:'All',
      search: '',
      reason:'',
      detailData:{},
      showDetailFrm: false,
    }
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
          this.fetchResults = error
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
  padding: 1em;
  width: 100%;
  background-color: rgba(255,255,255,.3);
  backdrop-filter:blur(4px);
}

/* Can use / deep / or >>> or ::v-deep to force style on classes within components */
.v-data-table >>> .sticky-header {
  position: sticky;
  top: 0px;
  height: 30px;
  font-weight: bold;
    background:var(--component-background-theme);
}

.glasslook{
     background:var(--component-background-theme);
 }

.v-data-table{
  font-size:.8em;
}

.theme--light.v-data-table{
     background:var(--component-background-theme);
    backdrop-filter:blur(4px);
  /* background-color: rgba(100,128,64,.2); */
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
