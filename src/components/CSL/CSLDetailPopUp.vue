<template>
  <div
    id="basePop"
    v-scroll.self="onScroll"
    class="detailcard"
  >
    <div
      id="printMe"
    >
      <div
        class="d-print-block "
      >
        <h3 style="text-align:center; margin:5px">
          With Compliments from
        </h3>
        <h3 style="text-align:center; margin:5px">
          the
        </h3>
        <h3 style="text-align:center; margin-top:5px;">
          Marine Museum of the Great Lakes at Kingston
        </h3>
      </div>
      <div
        id="dataHere"
        class="mt-4 pa-4"
      />
      <p
        v-for="(row, index ) in record"
        :key="index"
      >
        {{ row }}
      </p>
    </div>
    <div
      class="d-print-none"
    >
      <v-row
        justify-lg="center"
      >
        <div
          class="btnchoice  pa-4"
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
          <!--
          <v-btn
            @click="addItem2Store"
          >
            <v-icon>mdi-cart-plus</v-icon>
            Cart
          </v-btn> -->

          <v-btn
            @click="printCard"
          >
            <v-icon>mdi-printer</v-icon>
            Print
          </v-btn>

          <v-fab-transition>
            <v-btn
              v-show="fab"
              fab
              dark
              fixed
              center
              right
              color="light-green lighten-4"
              @click="goToTop"
            >
              <v-icon>keyboard_arrow_up</v-icon>
            </v-btn>
          </v-fab-transition>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
import Bus from '@/services/Bus'

export default {
  name:'CSLDetailPopUp',
  components: {},

  filters:{

    testFunc: function(row){
      let exp2 = /\b[\w+ ']*\b:/g
      if (!exp2.test(row)) return
      let newrow = row.replace(exp2, this.makeBold)
      return newrow;
    },

    titleCase: function (txt){
     if (!txt) return ''
     if (txt =='Addendum') {
        // console.log(txt); return txt
        }
      txt=txt.trim()
      var sentence = txt.toLowerCase().split(" ");
      // console.log(sentence.join(' '))
      if (sentence.length == 0) return
      for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
      return sentence.join(' ');
    }
  },

  props: {
    record: {
      type: Array,
      required: true,
      default: () => [],
    },
  },

  data() {
    return {
      fab:false,
    //  dataStr:record
    }
  },


  methods: {

    makeBold(payload){
    return `<strong>${payload}</strong>`;
  },

    CloseDetailPopUp() {
      this.visible = false
      Bus.$emit('closeDetailFrm')
    },

    addItem2Store(){
      Bus.$emit("addItemToCSLCart",this.record)
      Bus.$emit('closeDetailFrm')
    },

    printCard(){
      this.$htmlToPaper('printMe')
      Bus.$emit('closeDetailFrm')
      },

 onScroll(e) {
      //  console.log(e.target.scrollTop)
       if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
      // console.log(top)
      // console.log(this.fab)
    },

    goToTop() {
      let tag = document.getElementById('basePop')
      tag.scroll(0,0)

      }

    }

}
</script>

<style scoped>
.detailcard {
  position: absolute;
  box-sizing: border-box;

  color:black;
   background: linear-gradient(
    to bottom right,
    rgba(247, 248, 247, .9),
    rgba(252, 255, 252, 0)
    );
  background-color:rgba(144,154,140, 0.72);
  backdrop-filter:blur(4px);
  background-size: cover;
  padding: 1em;
  font-size:.8em;
  line-height: 1em;
  left: 100px;
  top: 70px;
  width: 700px;
  max-height:72vh;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 2px rgba(20, 20, 20, 0.5);
  z-index: 450;
  overflow:auto ;
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
