<template>
  <div
    id="printMe"
    class="detailcard elevation-6"
    :record="record"
  >
    <div class="d-none d-print-block pa-4">
      <h3 style="text-align:center; margin-bottom:0px">
        With the Compliments of
      </h3>
      <h3 style="text-align:center;">
        the <br>Marine Musuem of the Great Lakes at Kingston
      </h3>
    </div>
    <p
      v-for="(value, key, index ) in record"
      :key="key"
    >
      <span
        v-show="value"
        style="font-weight:bold;"
      >
        {{ key }}:
      </span>

      {{ value }}

      <span v-if="index % 8 == 0">
        <hr>
      </span>
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
  components: {},

  filters:{

    titleCase: function (txt){
     if (!txt) return ''
     if (txt =='Addendum') { console.log(txt); return txt}
      txt=txt.trim()
      var sentence = txt.toLowerCase().split(" ");
      console.log(sentence.join(' '))
      if (sentence.length == 0) return
      for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
      return sentence.join(' ');
    }
  },

  props: {
    record: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      // millsData: [],
      // shipnames: [],
      // shiplistTitle: millsData.shipListsTitle,
      // shiplistDesc: millsData.shipListDesc,
      // millsyears: millsData.MillsDates,
    }
  },

  methods: {
    CloseDetailPopUp() {
      this.visible = false
      Bus.$emit('closeDetailFrm')
    },

    addItem2Store(){
      Bus.$emit("addItemToWallaceCart",this.record)
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
  line-height: 1em;
  left: 100px;
  top: 70px;
  width: 500px;
  border-radius: 10px;
  z-index: 500;
}

/* .addendum {
  padding: 1em;
  width: 500px;
} */

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
