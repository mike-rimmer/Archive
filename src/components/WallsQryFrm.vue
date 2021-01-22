<template>
  <div
    sm="12"
    class="queryform "
  >
    <div class="color grey lighten-2 pa-4">
      <h4>{{ registryName }}</h4>
      <h4>Select Search Criteria</h4>
      <div class="radioBtn">
        <div class="btn">
          <input
            id="General"
            v-model="picked"
            type="radio"
            value="general"
            name="selector"
          >
          <label for="General">General</label>
        </div>
        <div class="btn">
          <input
            id="Detailed"
            v-model="picked"
            type="radio"
            value="detailed"
            name="selector"
          >
          <label for="Detailed">Detailed</label>
        </div>
      </div>
    </div>
    <!-- Used for Testing {{ picked }} -->
    <!-- {{ picked }} -->
    <hr style="margin-bottom:1.5em;">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <!-- <v-row> -->
      <v-select
        v-show="picked=='detailed'"
        v-model="shipSelected"
        :items="ships"
        label="Vessel"
        required
        dense
      />

      <v-autocomplete
        v-show="picked=='general'"
        v-model="shipSelected"
        label="Vessel"
        :items="ships"
        required
        dense
      />

      <v-autocomplete
        v-show="picked=='general'"
        v-model="yearSelected"
        :items="years"
        label="Date Built"
        required
        dense
      />

      <v-autocomplete
        v-show="picked=='general'"
        v-model="provSelected"
        :items="prov"
        label="Province Built"
        required
        dense
      />

      <v-autocomplete
        v-show="picked=='general'"
        v-model="builderSelected"
        :items="builders"
        label="Ship Builders"
        required
        dense
      />

      <v-select
        v-show="picked=='general'"
        v-model="genSearch"
        :counter="10"
        label="Search all Fields by keyword(s)"
        required
        dense
      />

      <v-autocomplete
        v-show="picked=='general'"
        v-model="reasonSelected"
        :items="reasonList"
        label="Reason Closed"
        required
        dense
      />
    </v-form>

    <v-btn
      class=" color blue-grey lighten-3"
      @click="resetSearch"
    >
      Clear Search Filters
    </v-btn>
  </div>
</template>

<script>
import staticData from '@/data/datasource'
// import APIServices from '@/services/ApiServices';
import Bus from '@/services/Bus'
// import BaseButton from '@/components/BaseButton'

export default {
  components: {
      },
  props: {
    ships: {
      type: Array,
      default: function () {
        return ['Ship A', 'Ship B']
      },
    },
    mills: {
      type: Array,
      default: function () {
        return ['Mills1', 'Mills2']
      },
    },
    // formTitle: {
    //   type: String,
    //   required: true,
    //   default: 'Query Frm',
    // },
    years: {
      type: Array,
      default: function () {
        return ['2020', '2021']
      },
    },

  },
  data() {
    return {
      registryName:'Wallace Registry ',
      radioGroup:'detailed',
      visible: false,
      searchVariable: '',
      builders:staticData.WallaceBuilders,
      // shipsloading: false,
      millsData: [],
      officialNumbers: '',
      reasonClosedRemarkNotes: '',
      generalSearch: '',
      noTitle: true,
      picker: '',
      officialNumberSelected: '',
      idSelected: '',
      shipSelected: '',
      yearSelected: '',
      provSelected: '',
      builderSelected:'',
      regSelected:'',
      genSearch:'',
      reasonSelected: '',
      valid: false,
      // This data is supplied by data/datasource.js
      prov: staticData.province,
      reasonList: staticData.wallsReason4Closing,
      picked: 'general',
      multiple: true,
    }
  },
  computed: {
    // radio() {
    //   Bus.$emit('switchforms', this.picked)
    //   return this.picked
    // },
  },

  watch: {
    shipSelected(val, oldVal) {
      // console.log(`New Value: ${val} Old Value: ${oldVal}`)
      if (val!='' && val != oldVal) this.getWallsSummaryByShip(val)
    },

    yearSelected(val, oldVal) {
      // console.log(`New Value: ${val} Old Value: ${oldVal}`)
      if (val!='' && val != oldVal) this.getWallsSummaryByYear(val)
    },

    provSelected(val, oldVal) {
      // console.log(`New Value: ${val} Old Value: ${oldVal}`)
      if (val!='' && val != oldVal) this.getWallsSummaryByProv(val)
    },


    builderSelected(val, oldVal) {
      // console.log(`New Value: ${val} Old Value: ${oldVal}`)
      if (val!='' && val != oldVal) this.getWallsSummaryByBuilder(val)
    },

    genSearch(val, oldVal) {
      // console.log(`New Value: ${val} Old Value: ${oldVal}`)
      if (val!='' && val != oldVal) this.getWallsSummaryByGenSearch(val)
    },
    reasonSelected(val, oldVal) {
      // console.log(`New Value: ${val} Old Value: ${oldVal}`)
      if (val!='' && val != oldVal) this.getWallsSummaryByReason(val)
    },
  },

  mounted() {
    // Bus.$on('shipsloaded', () => {
    //   this.shipsloading = false
    // })
  },

  methods: {
    resetSearch(){
      this.$emit('clearWallsSummaryFrm')
      this.searchVariable=''
      this.resetSearchVariables()
    },

    getWallsSummaryByShip(ship) {
      // this.shipsloading = true
      this.$emit('searchByShip', ship)
      this.searchVariable = 'ship'
      this.resetSearchVariables()
    },

    getWallsSummaryByYear(year) {
      this.$emit('searchByYear', year)
      this.searchVariable = 'year'
      this.resetSearchVariables()
    },

    getWallsSummaryByProv(prov) {
      this.$emit('searchByProv', prov)
      this.searchVariable = 'prov'
      this.resetSearchVariables()
    },

    getWallsSummaryByBuilder(builder) {
      this.$emit('searchByBuilder', builder)
      this.searchVariable = 'prov'
      this.resetSearchVariables()
    },

    getWallsSummaryByRegistration(prov) {
      this.$emit('searchByReg', prov)
      this.searchVariable = 'reg'
      this.resetSearchVariables()
    },
    getWallsSummaryByGenSearch(payload){
      this.$emit('searchGeneral', payload)
      this.searchVariable = 'gensearch'
      this.resetSearchVariables()
    },

    getWallsSummaryByReason(reason) {
      this.$emit('searchByReason', reason)
      this.searchVariable = 'reason'
      this.resetSearchVariables()
    },

    resetSearchVariables() {
      // close the popupfrm showing record details
      this.$emit('hidePopUp')
      switch (this.searchVariable) {
        case '':
          this.shipSelected = ''
          this.yearSelected = ''
          this.provSelected = ''
          this.regSelected = ''
          this.genSearch = ''
          this.reasonSelected = ''
          this.searchVariable = ''
          break

        case 'ship':
          // this.shipSelected = ''
          this.yearSelected = ''
          this.provSelected = ''
          this.regSelected = ''
          this.genSearch = ''
          this.reasonSelected = ''
          this.searchVariable = ''
          break

        case 'year':
          this.shipSelected = ''
          // this.yearSelected = ''
          this.provSelected = ''
          this.regSelected = ''
          this.genSearch = ''
          this.reasonSelected = ''
          this.searchVariable = ''
          break


        case 'prov':
          this.shipSelected = ''
          this.yearSelected = ''
          // this.provSelected = ''
          this.regSelected = ''
          this.genSearch = ''
          this.reasonSelected = ''
          this.searchVariable = ''
          break

        case 'reg':
          this.shipSelected = ''
          this.yearSelected = ''
          this.provSelected = ''
          // this.regSelected = ''
          this.genSearch = ''
          this.reasonSelected = ''
          this.searchVariable = ''
          break

        case 'gensearch':
          this.shipSelected = ''
          this.yearSelected = ''
          this.provSelected = ''
          this.regSelected = ''
          // this.genSearch = ''
          this.reasonSelected = ''
          this.searchVariable = ''
          break

        case 'reason':
          this.shipSelected = ''
          this.yearSelected = ''
          this.provSelected = ''
          this.regSelected = ''
          this.genSearch = ''
          // this.reasonSelected = ''
          this.searchVariable = ''
          break



        default:
      }
    },
  },
}
</script>

<style scoped>
.queryform {
  border-radius: 10px;
  box-sizing: border-box;
  /* margin-top: 1em; */
  margin-left:1em;
  padding: 1em;
  position: relative;
  background-color: white;
  box-shadow: 5px 5px 5px rgba(20, 20, 20, 0.5);
}

.radioBtn {
  display: flex;
  justify-content: flex-start;
}

.radioBtn label {
  margin-left: 0.5em;
}

.btn {
  margin-right: 1em;
}

.clrbtn {
  padding: 0.2em 0.5em;
  text-align: center;
  border-top-style: solid 1px grey;
  border-bottom-style: solid 1px grey;
}
</style>
