<template>
  <!--
MillsDisplayFrm
-->
  <div
    class="summaryfrm"
  >
    <div>
      <h3>
        {{ formtitle.toUpperCase() }}
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

      <transition
        name="moveleft"
        mode="in-out"
      >
        <BaseDetailPopUp
          v-show="showDetailFrm"
          :record="detailData"
          list-type="mills"
          @closefrm="testfrm"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
import BaseDetailPopUp from '@/components/BaseComponents/BaseDetailPopUp.vue'
// import MillsFaux from '@/components/Mills/MillsFaux.vue'
// import Bus from '@/services/Bus'


export default {
  name:"MillsDisplayFrmVue",
  components: {
    BaseDetailPopUp,
    // MillsFaux
  },

  props: {
      headers:{
        type:Array,
        default: ()=> []
      },

      height:{
        type:[String, Number],
        default:'450'
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
        reason:'',
        // showPopUp: false,
        showDetailFrm:false,
      }
    },

  computed:{
    ...mapState('Mills',['MillsCurrentFilter', 'MillsGlobal','MillsCart', 'MillsCurrentDetail','MillsFilter', 'MillsCartIsLoading']),
    ...mapGetters('Mills',['MillsCartIsLoaded']),


    tableData(){
      if(this.MillsFilter || this.MillsGlobal){
        return this.MillsCurrentFilter;
      }else{
        return this.MillsCart
      }
    },

    isLoading(){
      return this.MillsCartIsLoading
    },
// TODO: Standardize loading complete
    // loadingCompleted(){
    //   return this.MillsCartIsLoaded
    //   // return false
    // },

      detailData(){
        return this.MillsCurrentDetail
      },

    // overlay(){
    //   return !this.MillsCartIsLoaded
    // }

  },



  methods: {
    ...mapActions('Mills', ['getMillsDetailFromServer']),
    ...mapActions('Cart',['addDetailsFromMills']),
    testfrm(){
     this.showDetailFrm = false
    },

    loadDetailCart(event, row) {
      // eslint-disable-next-line no-debugger
      // debugger
      event.preventDefault()
      let resp = ''
      resp = confirm(`Add ${row.item.mills} to Researcher Cart`)
      if (resp) {
        const payload = row.item.mills
        this.addDetailsFromMills(payload)
        this.showMsg(row.item.mills)
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
      const millsRecord = rowData.mills
      this.getMillsDetailFromServer(millsRecord)
      if (this.MillsCurrentDetail) this.showDetailFrm = true
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
  background-color:hsl(175, 35%, 75%);
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
