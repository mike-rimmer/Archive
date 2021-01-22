<template>
  <div
    id="printMe"
    class="detailcard"
    :record="record"
  >
    <div class="d-none d-print-block">
      <h3 style="text-align:center; margin-bottom:0px">
        With the Compliments of
      </h3>
      <h3 style="text-align:center;">
        the <br>Marine Musuem of the Great Lakes at Kingston
      </h3>
    </div>
    <p>
      <span class="label">Vessel Name: </span>
      {{ record.Vessel }}
    </p>
    <p>
      <span class="label">MillsNum: </span>
      {{ record.MillsNum }}
    </p>
    <p>
      <span class="label">Propulsion: </span>
      {{ record.Propulsion }}
    </p>
    <p>
      <span class="label">Official Num: </span>
      {{ record.OfficialNum }}
    </p>
    <p>
      <span class="label">Dimensions: </span>
      {{ record.Dimensions }}
    </p>
    <p>
      <span class="label">Where Built: </span>
      {{ record.WhereBuilt }} {{ record.BuiltDate }}
    </p>
    <h4
      v-if="record.Name2"
      style="margin-bottom:.5em"
    >
      Other Vessel Names:
    </h4>
    <ul>
      <li
        v-if="record.NamePreReg"
      >
        Previous Registration: {{ record.NamePreReg }}, {{ record.DateFirstCdnReg }}
      </li>
      <li
        v-if="record.Name2"
      >
        {{ record.Name2 }}, {{ record.Date2 }}
      </li>
      <li
        v-if="record.Name3"
      >
        {{ record.Name3 }}, {{ record.Date3 }}
      </li>
      <li
        v-if="record.Name4"
      >
        {{ record.Name4 }}, {{ record.Date4 }}
      </li>
      <li
        v-if="record.Name5"
      >
        {{ record.Name5 }}, {{ record.Date5 }}
      </li>
      <li
        v-if="record.Name6"
      >
        {{ record.Name6 }}, {{ record.Date6 }}
      </li>
      <li
        v-if="record.Name7"
      >
        {{ record.Name7 }}, {{ record.Date7 }}
      </li>
    </ul>
    <h4
      style="margin-bottom:1em;"
    >
      Closing Information
    </h4>
    <hr>
    <p>
      <span
        class="label"
      >
        Date Closed:
      </span>
      {{ record.DateClosed }}
    </p>
    <p>
      <span
        key=" 1435"
        class="label"
      >
        Reason Closed:
      </span>
      {{ record.ReasonClosedEvent }}
    </p>
    <p>
      <span
        key="1445"
        class="label"
      >Place Closed: </span>
      {{ record.PlaceClosed }}
    </p>
    <p>
      <span
        class="label"
      >Entry Closed Date: </span>
      {{ record.EntryDate }}
    </p>
    <p>
      <span
        class="label"
      >Remarks: </span>
      {{ record.Remarks }}
    </p>
    <hr>
    <p class="label">
      Addendum:
    </p>
    <p class="addendum">
      {{ record.Addendum }}
    </p>
    <v-row justify-lg="center">
      <div
        class="btnchoice d-print-none"
      >
        <v-btn
          absolute
          top
          right
          x-small
          @click="CloseDetailPopUp"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-btn
          @click="addItem2Store"
        >
          <v-icon>mdi-cart-plus</v-icon>
          Cart
        </v-btn>

        <v-btn
          @click="printCard"
        >
          <v-icon>mdi-printer</v-icon>
          Print
        </v-btn>
      </div>
    </v-row>
  </div>
</template>

<script>
import Bus from '@/services/Bus'
export default {
  components: {

  },

  props: {
    record: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      visible: false,
      centerText:"center"

    }
  },

  methods: {

    CloseDetailPopUp() {
      // this.visible = false
      Bus.$emit('closeDetailFrm')
    },

    addItem2Store(){
      Bus.$emit("addItemToMillsStore", this.record)

      Bus.$emit('closeDetailFrm')
    },

    printCard(){
      this.$htmlToPaper('printMe')
      Bus.$emit('closeDetailFrm')
      },



    }
}
</script>

<style scoped>
.detailcard {
  position: absolute;
  /* width: auto; */
  box-sizing: border-box;
  background-color: lightgray;
  /* background-image: url('../assets/parchment1.jpg'); */
  background-size: cover;
  padding: 1em;
  line-height: .6em;
  left: 120px;
  top: 120px;
  width: 500px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 2px rgba(20, 20, 20, 0.5);
  z-index: 500;
}

.addendum {
  line-height: 1.1em;
}

.label {
  font-weight: bold;
}
hr {
  margin-bottom: 0.5em;
}

.btnchoice {
  display: flex;
  justify-content: space-around;
}

.btnchoice > button {
  margin: 0.5em;
  padding: 0.5em 1em 0.5em 1em;
  color: rgb(56, 43, 9);
  /* border-top-style: solid;
  border-bottom-style: solid; */
}

ul {
  margin-bottom: 0.5em;
  list-style-type: none;
}

.popup-enter-active,
.popup-leave-active {
  transition: all 0.5s ease;
}

.popup-enter,
.popup-leave-to {
  transform: scale(0);
  opacity: 0;
}

@media (max-width: 800px) {
  .detailcard {
    margin: 0em 0.25em 1.5em 0.25em;
    padding: 0.4em;
  }
}
</style>
