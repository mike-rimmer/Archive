<template>
  <!--
**********
Note: This Form receives a prop 'wallsData' containing records from the server
The records can be sorted asc/dec by clicking the applicable column header
If a user click on a row a function is called to fetch the detailed info from the server which is then displayed on Card 'millsDetailsPopUp'.
**********
-->
  <div class="summaryfrm">
    <div>
      <h3 class="black--text">
        {{ title }}
      </h3>

      <div>
        <v-data-table
          dense
          :headers="headers"
          fixed-header
          :loading="isLoading"
          loading-text="Data is loading ... please wait!"
          :items="tableData"
          height="60vh"
          :footer-props="{
            'items-per-page-options':[100,200,300,400,500,1000,-1]}"
          :items-per-page="-1"
          class="elevation-6"
          @click:row="getDetailedRecord"
        />
      </div>


      <transition name="moveleft">
        <BaseDetailPopUp
          v-show="showDetailFrm"
          :record="detailData"
          @closefrm="closePopUp"
        />
      </transition>
    </div>
  </div>
</template>


<script>
import {mapState, mapGetters} from 'vuex'
import APIServices from '@/services/ApiServices';
import BaseDetailPopUp from '@/components/BaseComponents/BaseDetailPopUp';
export default {
  name:"OwnersSummaryDisplayFrm",
  components: {
    BaseDetailPopUp
  },

  props: {
    height:{
      type:[String, Number],
      default:'450'
    },

    headers:{
       type: Array,
       default: ()=>[]
     },

    title:{
      type:String,
      default:''
    }
  },

  data() {
    return {
      search: '',
      showDetailFrm: false,
      // Used to initially test the v-data-table
      isLoading:false,
      detailData: {},
      fetchResults:''
    }
  },

    computed:{
    ...mapState('Owners', ['OwnersCurrentFilter', 'OwnersGlobal', 'OwnersCart', 'OwnersFilter', 'OwnersCartIsLoading']),
    ...mapGetters('Owners',[' OwnersCartIsLoaded']),

    tableData(){
      if(this.OwnersFilter || this.OwnersGlobal){
        return this.OwnersCurrentFilter;
      }else{
        return this.OwnersCart
      }
    },

    // isLoading(){
    //   return this.OwnersCartIsLoading
    // }

  },

  methods: {

    closePopUp(){
      this.showDetailFrm = false
    },

    getDetailedRecord(rowData) {
      const id = rowData.id
      this.getOwnersDetailByID(id)
    },
    getOwnersDetailByID(id) {
      // alert(id)
      APIServices.getOwnersDetailByID(`'${id}'`)
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
   background:var(--component-background-theme);
  backdrop-filter:blur(4px);
  font-size:.7em;
}

.v-data-table >>> table > tbody > tr > td {
font-size: 0.8rem !important;
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


</style>
