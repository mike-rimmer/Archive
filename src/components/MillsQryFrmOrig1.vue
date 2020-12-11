<template>
  <div
    sm="12"
    class="queryform "
  >
    <h4>{{ aboutRegistry }}</h4>
    <h4>Select Search Type</h4>
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
    <!-- Used for testing -->
    <!-- <p> {{radio || 'null'}}</p> -->
    <hr style="margin-bottom:1.5em;">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <!-- <v-row> -->
      <v-select
        v-show="picked=='detailed'"
        v-model="millsSelected"
        :items="mills"
        label="Mill #"
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

      <v-select
        v-show="picked=='detailed'"
        v-model="officialNumberSelected"
        label="Select Official Numbers"
        required
        dense
      />

      <v-autocomplete
        v-show="picked=='general'"
        v-model="yearSelected"
        :items="years"
        label="Year Built"
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

      <v-select
        v-show="picked=='general'"
        v-model="generalSearch"
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

      <p><button>Clear Button</button></p>
    </v-form>
  </div>
</template>

<script>
import millsData from '@/data/datasource'
// import APIServices from '@/services/ApiServices';
import Bus from '@/services/Bus'

export default {
  components: {},
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
    formTitle: {
      type: String,
      required: true,
      default: 'Query Frm',
    },
    years: {
      type: Array,
      default: function () {
        return ['2020', '2021']
      },
    },
    aboutRegistry: {
      type: String,
      required: true,
      default: 'This is a registry',
    },
  },
  data() {
    return {
      searchVariable: '',
      shipsloading: false,
      millsData: [],
      fetchResults: '',
      officialNumbers: '',
      reasonClosedRemarkNotes: '',
      generalSearch: '',
      noTitle: true,
      picker: '',
      officialNumberSelected: '',
      millsSelected: '',
      shipSelected: '',
      yearSelected: '',
      provSelected: '',
      reasonSelected: '',
      valid: false,
      // This data is supplied by data/datasource.js
      prov: millsData.province,
      reasonList: millsData.reason4Closing,
      picked: 'general',
      multiple: true,
    }
  },
  computed: {
    radio() {
      Bus.$emit('switchforms', this.picked)
      return this.picked
    },
  },

  watch: {
    shipSelected(val, oldVal) {
      console.log(`New Value: ${val} Old Value: ${oldVal}`)
      if (val != oldVal) this.getMillsSummaryByShip(val)
    },

    yearSelected(val, oldVal) {
      console.log(`New Value: ${val} Old Value: ${oldVal}`)
      if (val != oldVal) this.getMillsSummaryByYear(val)
    },

    provSelected(val, oldVal) {
      console.log(`New Value: ${val} Old Value: ${oldVal}`)
      if (val != oldVal) this.getMillsSummaryByProv(val)
    },

    reasonSelected(val, oldVal) {
      console.log(`New Value: ${val} Old Value: ${oldVal}`)
      if (val != oldVal) this.getMillsSummaryByReason(val)
    },
  },
  mounted() {
    Bus.$on('shipsloaded', () => {
      this.shipsloading = false
    })
  },

  methods: {
    getMillsSummaryByReason(reason) {
      this.$emit('searchByReason', reason)
      this.searchVariable = 'reason'
      this.resetSearchVariables()
    },
    getMillsSummaryByYear(year) {
      this.$emit('searchByYear', year)
      this.searchVariable = 'year'
      this.resetSearchVariables()
    },

    getMillsSummaryByProv(prov) {
      this.$emit('searchByProv', prov)
      this.searchVariable = 'prov'
      this.resetSearchVariables()
    },

    getMillsSummaryByShip(ship) {
      this.shipsloading = true
      this.$emit('searchByShip', ship)
      this.searchVariable = 'ship'
      this.resetSearchVariables()
    },

    resetSearchVariables() {
      switch (this.searchVariable) {
        case 'reason':
          this.shipSelected = ''
          this.yearSelected = ''
          this.provSelected = ''
          this.searchVariable = ''
          break

        case 'ship':
          this.reasonSelected = ''
          this.yearSelected = ''
          this.provSelected = ''
          this.searchVariable = ''
          break

        case 'year':
          this.reasonSelected = ''
          this.shipSelected = ''
          this.provSelected = ''
          this.searchVariable = ''
          break

        case 'prov':
          this.reasonSelected = ''
          this.shipSelected = ''
          this.yearSelected = ''
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
  margin-top: 1em;
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
</style>
