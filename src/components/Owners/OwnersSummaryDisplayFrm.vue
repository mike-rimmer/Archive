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
      <h3>
        {{ title.toUpperCase() }}
      </h3>

      <v-data-table
        :class="{ msgborder: msgAlert }"
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
        @contextmenu:row="loadDetailCart"
        @click:row="getDetailedRecord"
      />

      <div
        v-if="msgAlert"
        style="text-align: center; color: green; font-size:1em;"
      >
        {{ msg }}
      </div>


      <transition name="moveleft">
        <BaseDetailPopUp
          v-show="showDetailFrm"
          :record="detailData"
          list-type="owners"
          @closefrm="closePopUp"
        />
      </transition>
    </div>
  </div>
</template>


<script>
import {mapState, mapActions, mapGetters} from 'vuex'
import BaseDetailPopUp from '@/components/BaseComponents/BaseDetailPopUp';
export default {
  name:"OwnersSummaryDisplayFrm",
  components: {
    BaseDetailPopUp
  },

  props: {
    // height:{
    //   type:[String, Number],
    //   default:'450'
    // },

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
      msgAlert: false,
      msg: 'This is a Message',
      showDetailFrm: false,
    }
  },

    computed:{
    ...mapState('Owners', ['OwnersCurrentFilter', 'OwnersGlobal', 'OwnersCart', 'OwnersCurrentDetail', 'OwnersFilter', 'OwnersCartIsLoading']),
    ...mapGetters('Owners',[' OwnersCartIsLoaded']),

    detailData(){
      return this.OwnersCurrentDetail
    },

    tableData(){
      if(this.OwnersFilter || this.OwnersGlobal){
        return this.OwnersCurrentFilter;
      }else{
        return this.OwnersCart
      }
    },

    isLoading(){
      return this.OwnersCartIsLoading
    }

  },

  methods: {
    ...mapActions('Owners',['getOwnersDetailByID']),
    ...mapActions('Cart',['addDetailsFromOwners']),

    closePopUp(){
      this.showDetailFrm = false
    },

    loadDetailCart(event, row){

    event.preventDefault();
    let resp =''
    resp = confirm(`Add ${row.item.id} to Researcher Cart`)
    if(resp){
      const id =row.item.id
     this.addDetailsFromOwners(id)
     this.showMsg(id)
    }
  },

      showMsg(payload) {
      this.msg = `Details of ${payload} saved to Cart`
      this.msgAlert = true
      setTimeout(() => {
        this.msgAlert = false
      }, 2000)
    },

    getDetailedRecord(rowData) {
      const id = rowData.id
      this.getOwnersDetailByID(id)
      if(this.OwnersCurrentDetail) this.showDetailFrm = true
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
  background-color:hsl(173, 35%, 75%);
  color:black;
  font-size:1em;
}

/* Can use / deep / or >>> or ::v-deep to force style on classes within components */
.v-data-table >>> table > tbody > tr > td {
font-size: 0.8rem !important;
}

.v-data-table >>> thead th {
  font-weight:bold;
  font-size:1em !important;
}

.msgborder {
  border: solid green 2px;
}






</style>
