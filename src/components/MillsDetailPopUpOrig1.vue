<template>
  <div>
    <div
      class="detailcard"
      :record="record"
    >
      <p>
        <span class="label">Vessel Name: </span>
        {{ record.Name1 }}
      </p>
      <p>
        <span class="label">MillsNum: </span>
        {{ record.MillsNumber }}
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
        {{ record.dimensions }}
      </p>
      <p>
        <span class="label">Where Built: </span>
        {{ record.whereBuilt }} {{ record.builtDate }}
      </p>
      <h4
        v-if="record.Name2"
      >
        Other Vessel Names:
      </h4>
      <ul
        class="othernames"
      >
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
        <span>
          Date Closed:
        </span>
        {{ record.dateClosed }}
      </p>
      <p>
        <span
          key=" 1435"
        >
          Reason Closed:
        </span>
        {{ record.reasonClosed }}
      </p>
      <p>
        <span
          key="1445"
          class="label"
        >Place Closed: </span>
        {{ record.placeClosed }}
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
        {{ record.remarks }}
      </p>

      <!-- <BaseButton
          state1 ="Hide Addendum"
          state2 ="See Addendum"
          v-on:hide = "visible = !visible"
          >
          </BaseButton> -->

      <!-- <BaseButton
          state1 = "Close"
          state2 = "Close"
         >
          </BaseButton> -->

      <div
        class="btnchoice"
      >
        <button
          @click="visible = !visible"
        >
          {{ visible? 'Hide Addendum' : 'Show Addendum' }}
        </button>

        <button
          @click="CloseDetailPopUp"
        >
          Close Details
        </button>

        <transition name="popup">
          <addendum
            v-show="visible"
          >
            <template slot="body">
              {{ record.addendum }}
            </template>
          </addendum>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Addendum from '@/components/Addendum.vue'
import Bus from '@/services/Bus'
// import BaseButton from '@/components/BaseButton.vue';

export default {
  components: {
    Addendum,
    // BaseButton,
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
    }
  },

  methods: {
    CloseDetailPopUp() {
      this.visible = false
      Bus.$emit('closeDetailFrm')
    },
  },
}
</script>

<style scoped>
.detailcard {
  position: relative;
  width: auto;
  background-image: url('../assets/parchment1.jpg');
  margin: 1em;
  padding: 1em;
  line-height: 1em;
  left: calc(50% - 300px);
  top: 50px;
  width: 600px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 2px rgba(20, 20, 20, 0.5);
  z-index: 100;
}

.addendum {
  padding: 1em;
  width: 500px;
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
  border-top-style: solid;
  border-bottom-style: solid;
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
