<template>
  <!--
**********
Note: This Form receives a prop 'RegistryData' containing records from the server
The records can be sorted asc/dec by clicking the applicable column header
If a user click on a row a function is called to fetch the detailed info from the server which is then displayed on Card 'millsDetailsPopUp'.
**********
-->
  <div class="summaryfrm">
    <!-- <div class="glass "> -->
    <div>
      <h3>
        {{ title }}
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

      <!-- Transitions class kepts in App.vue -->
      <transition name="moveleft">
        <BaseDetailPopUp
          v-show="showDetailFrm"
          :record="detailData"
          list-type="registry"
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
  name:"RegistrySummaryDisplayFrm",
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
      msgAlert: false,
      msg: 'This is a Message',
      showDetailFrm: false,
    }
  },

  computed:{
    ...mapState('Registry', ['RegistryCurrentFilter', 'RegistryGlobal', 'RegistryCart', 'RegistryFilter', 'RegistryCartIsLoading','RegistryCurrentDetail']),
    ...mapGetters('Registry',['RegistryCartIsLoaded']),

    tableData(){
      if(this.RegistryFilter || this.RegistryGlobal){
        return this.RegistryCurrentFilter;
      }else{
        return this.RegistryCart
      }
    },

    isLoading(){
      return this.RegistryCartIsLoading
    },

    detailData(){
      let tmp = this.RegistryCurrentDetail
      console.log(tmp)
      return this.RegistryCurrentDetail
    }

  },


  mounted() {
    // Bus.$on('closeDetailFrm', () => {
    //   this.showDetailFrm = false
    // })


  },
  methods: {
    ...mapActions('Registry', ['getRegistryDetailedRecordById'] ),
    ...mapActions('Cart',['addDetailsFromRegistry']),

    closePopUp(){
      this.showDetailFrm = false
    },

    loadDetailCart(event, row){
      event.preventDefault();
      let resp =''
      resp = confirm(`Add ${row.item.Id} to Researcher Cart`)
      if(resp){
       const id = row.item.Id
       this.addDetailsFromRegistry(id)
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

  getDetailedRecord(row) {
    let id = row.Id
    this.getRegistryDetailedRecordById(id)
    if(this.RegistryCurrentDetail) this.showDetailFrm = true
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
  background-color:hsl(175, 35%,75%);
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

.fade-enter-active,
.fade-leave-active {
  transition: all .7s ease;
}

.fade-enter,
.fade-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
