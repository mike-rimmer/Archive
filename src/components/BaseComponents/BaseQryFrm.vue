<template>
  <div
    sm="12"
    class="queryform"
  >
    <div>
      <h4>{{ formtitle }}</h4>
    </div>
    <hr style="margin-bottom:1.5em; border:0; border-top: 1px solid black;">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-autocomplete
        v-model="vesselSelected"
        :items="vessel"
        label="Vessel Name"
        required
        dense
      />
      <v-autocomplete
        v-model="yearSelected"
        :items="years"
        label="Year Built"
        required
        dense
      />

      <v-autocomplete
        v-model="provSelected"
        :items="prov"
        label="Province Built"
        required
        dense
      />

      <v-autocomplete
        v-model="reasonSelected"
        :items="reasonList"
        label="Reason Closed"
        required
        dense
      />

      <v-text-field
        v-model="globalSearchSelected"
        prepend-icon="mdi-book-search"
        label="General Search"
        placeholder="Enter Key words for your Search "
        @keypress.enter="performGlobalFilter"
      >
        {{ globalSearch }}
      </v-text-field>
    </v-form>

    <!-- <BaseButton -->
    <v-row class="justify-center">
      <v-btn
        class=" color blue-grey lighten-3"
        @click="resetSearch"
      >
        Clear Search Filters
      </v-btn>
    </v-row>
    <v-row
      v-show="isClearing"
      class="justify-center white--text mt-2"
    >
      <p>
        {{ msg }}
      </p>
    </v-row>

    <!-- </BaseButton> -->
  </div>
</template>

<script>

import{ mapState, mapActions} from "vuex"

export default {
  components: {
    // BaseButton
     },

  props: {
    ships: {
      type: Array,
      default: function () {
        return ['Ship A', 'Ship B']
      },
    },

    reasonList: {
      type: Array,
      default: function () {
        return ['Abandoned', 'Burnt']
      },
    },

    formtitle : {
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

    prov: {
      type: Array,
      default: function () {
        return ['Aberta','Ontario' ]
      },
    },

  },
  data() {
    return {
      officialNumberSelected: '',
      millsSelected: '',
      shipSelected: '',
      yearSelected: '',
      provSelected: '',
      reasonSelected: '',
      globalSearchSelected:'',
      valid: false,
      msg:"Clearing Filters",
      picked: 'general',
      // multiple: true,
    }
  },
  computed: {
    ...mapState(['ClearingMillsFilters']),
    isClearing(){
      return this.ClearingMillsFilters
    }

  },

  watch: {
    yearSelected(val, oldVal) {
      // console.log(`New Value: ${val} Old Value: ${oldVal}`)
      if (val!='' && val != oldVal)
      this.$emit('filterByYear', val)
    },

    provSelected(val, oldVal) {
      // console.log(`New Value: ${val} Old Value: ${oldVal}`)
      if (val!='' && val != oldVal)  this.$emit('filterByProv', val)
    },

    reasonSelected(val, oldVal) {
      // console.log(`New Value: ${val} Old Value: ${oldVal}`)
      if (val!='' && val != oldVal) this.$emit('filterByReason', val)
    },
  },

  methods: {
    ...mapActions(
      [
        'setMillsFilterClearingTrue'
         ]),

    performGlobalFilter(){

    },

    resetSearch(){
     this.setMillsFilterClearingTrue()
     this.$emit("resetData")
    }
      }


}
</script>

<style scoped>
.queryform {
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 1em;
  padding: 1em;
  position: relative;
    background: linear-gradient(
     to bottom right,
    rgba(247, 248, 247, 0),
    rgba(252, 255, 252, .9)
    );
  backdrop-filter:blur(4px);
  box-shadow: 5px 5px 5px rgba(20, 20, 20, 0.5);
  width:90%;
  margin-left:1em;
}

 .glasslook{
  background: linear-gradient(
    to bottom right,
    rgba(247, 248, 247, 0),
    rgba(252, 255, 252, .9)
    );
   backdrop-filter:blur(4px);
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
