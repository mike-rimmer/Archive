<template>
  <!--
**********
Note: This Form receives a prop 'CSLData' containing records from the server
The records can be sorted asc/dec by clicking the applicable column header
If a user click on a row a function is called to fetch the detailed info from the server which is then displayed on Card 'millsDetailsPopUp'.
**********
-->
  <div class="summaryfrm">
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
          'items-per-page-options': [100, 200, 300, 400, 500, 1000, -1],
        }"
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
        origin="center center"
      >
        <BaseDetailPopUp
          v-show="showDetailFrm"
          :record="detailData"
          list-type="csl"
          @closefrm="closePopUp"
        />
      </transition>
    </div>
  </div>
</template>

<script>
// import millsData from '@/data/datasource';
// import Bus from '@/services/Bus';
import { mapState, mapGetters, mapActions } from 'vuex'
// import APIServices from '@/services/ApiServices';
import BaseDetailPopUp from '@/components/BaseComponents/BaseDetailPopUp'
export default {
  name: 'CSLSummaryDisplayFrm',
  components: {
    BaseDetailPopUp,
  },

  props: {
    headers: {
      type: Array,
      default: () => [],
    },

    data: {
      type: Array,
      default: () => {
        return [{ id: '1', notis: 'AABBCC', notes: 'This is a note' }]
      },
    },

    formtitle: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      search: '',
      msgAlert: false,
      msg: 'This is a Message',
      showDetailFrm: false,
    }
  },

  computed: {
    ...mapState('CSL', [
      'CSLCurrentFilter',
      'CSLGlobal',
      'CSLCart',
      'CSLFilter',
      'CSLCartIsLoading',
      'CSLCurrentDetail',
      'upDateDetailCart',
    ]),
    ...mapGetters('CSL', [' CSLCartIsLoaded']),

    tableData() {
      if (this.CSLFilter || this.CSLGlobal) {
        return this.CSLCurrentFilter
      } else {
        return this.CSLCart
      }
    },

    isLoading(){
      return this.CSLCartIsLoading
    },


    detailData() {
      if (this.CSLCurrentDetail) {
        return this.CSLCurrentDetail
      } else {
        return {}
      }
    },
  },

  methods: {
    ...mapActions('CSL', [
      'loadCSLCurrentDetail',
      'loadCSLCurrentDetailandUpDateDetailCart',
    ]),

    ...mapActions('Cart',['addDetailsFromCSL']),

    closePopUp() {
      this.showDetailFrm = false
    },

    loadDetailCart(event, item) {
      // eslint-disable-next-line no-debugger
      // debugger
      event.preventDefault()
      let resp = ''
      resp = confirm(`Add ${item.item.Notis} to Researcher Cart`)
      if (resp) {
        console.log(` ${item.item.Notis} added to Researcher Cart`)
        const payload = `'${item.item.Notis}'`
        this.addDetailsFromCSL(payload)
        this.showMsg(item.item.Notis)
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
      this.loadCSLCurrentDetail(`'${rowData.Notis}'`)
      if (this.CSLCurrentDetail) this.showDetailFrm = true
      // // this.loadCSLDetail(`'${rowData.notis}'`)
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
  padding: 1em;
  width: 100%;
  background-color: hsl(175, 35%, 75%);
  color:black;
  font-size: 1em;
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
