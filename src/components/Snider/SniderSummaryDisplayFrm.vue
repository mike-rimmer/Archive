<template>
  <!--
**********
Note: This Form receives a prop 'SniderData' containing records from the server
The records can be sorted asc/dec by clicking the applicable column header
If a user click on a row a function is called to fetch the detailed info from the server which is then displayed on Card 'millsDetailsPopUp'.
**********
-->
  <div class="summaryfrm  ">
    <div>
      <h3>
        {{ formtitle }}
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
        class="elevation-6 "
        @click:row="getDetailedRecord"
        @contextmenu:row="loadDetailCart"
      />

      <div
        v-if="msgAlert"
        style="text-align: center; color: green; font-size:1em;"
      >
        {{ msg }}
      </div>


      <transition
        name="moveleft"
        origin="center center"
      >
        <BaseDetailPopUp
          v-show="showDetailFrm"
          :record="detailData"
          list-type="sniders"
          @closefrm="closePopUp"
        />
      </transition>
    </div>
  </div>
</template>

<script>

// import Bus from '@/services/Bus';
import {mapState, mapGetters, mapActions} from 'vuex'
// import APIServices from '@/services/ApiServices';
import BaseDetailPopUp from '@/components/BaseComponents/BaseDetailPopUp';
export default {
  name:"SniderSummaryDisplayFrm",
  components: {
    BaseDetailPopUp
  },

   props: {

      headers:{
      type:Array,
      default: ()=>[]
    },

    data: {
      type:Array,
      default: ()=>{
        return [{id:'1', notis:'AABBCC', notes:"This is a note"}]
      }
    },

    formtitle:{
      type:String,
      default:''
    }
  },

  data() {
    return {
      search: '',
      msgAlert: false,
      msg: 'This is a Message',

      showDetailFrm:false,
    }
  },

    computed:{
    ...mapState('Snider', ['SniderCurrentFilter', 'SniderGlobal', 'SniderCart', 'SniderFilter', 'SniderCartIsLoading','SniderCurrentDetail']),
    ...mapGetters('Snider',[' SniderCartIsLoaded',]),

     tableData(){
       if(this.SniderFilter || this.SniderGlobal){
         return this.SniderCurrentFilter;
       }else{
         return this.SniderCart
       }
     },

   isLoading(){
      return this.SniderCartIsLoading
    },




  detailData(){
      if( this.SniderCurrentDetail){
        return this.SniderCurrentDetail
      }
        else{
          return ''
        }
    }
  },

  methods: {
    ...mapActions('Snider', ['loadSniderDetail']),
    ...mapActions('Cart',['addDetailsFromSnider']),

    closePopUp(){
      this.showDetailFrm = false
    },

    loadDetailCart(event, row){
      event.preventDefault();
      let resp =''
      resp = confirm(`Add ${row.item.id} to Researcher Cart`)
      if(resp){
      let id = row.item.id
      this.addDetailsFromSnider(id)
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
      this.loadSniderDetail(`'${rowData.id}'`)
      if(this.SniderCurrentDetail) this.showDetailFrm  = true
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
  background-color:hsl(174, 35%,75%);
  /* background:var(--component-background-theme);
  backdrop-filter:blur(4px); */
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
