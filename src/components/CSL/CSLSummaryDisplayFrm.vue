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
        class="glasslook elevation-6"
        @contextmenu:row="loadDetailCart"
        @click:row="getDetailedRecord"
      />

      <div
        v-show="msgAlert"
        style="text-align: center; color: green"
      >
        {{ msg }}}
      </div>

      <transition
        name="moveleft"
        origin="center center"
      >
        <BaseDetailPopUp
          v-show="showDetailFrm"
          :record="currentDetail"
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
    isLoading: {
      type: Boolean,
      default: false,
    },

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

      // Used to initially test the v-data-table

      // isLoading:false,
      showDetailFrm: false,
      detailData: {},
      fetchResults: '',
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

    //  showDetailFrm(){
    //    return this.CSLShowDetail
    //  },

    currentDetail() {
      if (this.CSLCurrentDetail) {
        return this.CSLCurrentDetail
      } else {
        return ''
      }
    },
  },

  methods: {
    ...mapActions('CSL', [
      'loadCSLCurrentDetail',
      'loadCSLCurrentDetailandUpDateDetailCart',
    ]),

    closePopUp() {
      this.showDetailFrm = false
    },

    showAlert() {
      alert()
    },

    loadDetailCart(event, item) {
      // eslint-disable-next-line no-debugger
      // debugger
      event.preventDefault()
      let resp = ''
      resp = confirm(`Add ${item.item.notis} to Researcher Cart`)
      if (resp) {
        console.log(` ${item.item.notis} added to Researcher Cart`)
        const payload = { id: `"${item.item.notis}"`, list: 'CSL' }
        this.loadCSLCurrentDetailandUpDateDetailCart(payload)
      }
      this.showMsg(item.item.notis)
    },

    showMsg(payload) {
      this.msg = `Details of ${payload} saved to Cart`
      this.msgAlert = true
      setTimeout(() => {
        this.msgAlert = false
      }, 2000)
    },

    getDetailedRecord(rowData) {
      this.loadCSLCurrentDetail(`'${rowData.notis}'`)
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
  font-size: 0.7em;
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
  /* background:var(--component-background-theme); */
}

.msgborder {
  border: solid green 2px;
}

/* .glasslook{
  background:var(--component-background-theme);
 } */

.v-data-table {
  font-size: 0.8em;
}

/* .theme--light.v-data-table{
   background:var(--component-background-theme);
    backdrop-filter:blur(4px);
} */
</style>
