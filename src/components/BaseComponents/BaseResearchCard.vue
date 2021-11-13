<template>
  <div
    ref="scrollToMe"
    class="detailcard"
    :record="record"
  >
    <v-card
      class="pa-5"
    >
      <h3>{{ record.list }}</h3>
      <div
        id="printMe"
      >
        <div
          class="d-none d-print-block pa-4"
        >
          <h2 style="text-align:center; margin:0px">
            With Compliments from
          </h2>
          <h2 style="text-align:center; margin:0px" />
          <h2 style="text-align:center; margin-top:0px;">
            Marine Museum of the Great Lakes at Kingston
          </h2>
        </div>
        <div class="details mt-4">
          <div class="textarea">
            <p
              v-for="(value, key, index ) in record.data"
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
          </div>
        </div>
      </div>
      <v-row justify-lg="center">
        <div
          class="btnchoice d-print-none"
        >
          <v-btn
            @click="removeCard"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <!-- <v-btn
            @click="addItem2Store"
          >
            <v-icon>mdi-cart-plus</v-icon>
            Cart
          </v-btn> -->

          <v-btn
            @click="printDiv"
          >
            <v-icon>mdi-printer</v-icon>
            Print
          </v-btn>
        </div>
      </v-row>
    </v-card>
  </div>
</template>

<script>
// import Bus from '@/services/Bus'
import { mapActions } from 'vuex'
export default {
  name: 'BaseResearchCard',
  components: {},

  filters: {
    titleCase: function (txt) {
      if (!txt) return ''
      if (txt == 'Addendum') {
        //  console.log(txt); return txt
      }
      txt = txt.trim()
      var sentence = txt.toLowerCase().split(' ')
      // console.log(sentence.join(' '))
      if (sentence.length == 0) return
      for (var i = 0; i < sentence.length; i++) {
        sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1)
      }
      return sentence.join(' ')
    },
  },

  props: {
    record: {
      type: Object,
      default: () => {},
      required: true,
    },
    // mapInfo: {
    //   type: Object,
    //   default: () => ({url:'none', name:'none'}) ,
    // },
  },

  data() {
    return {
      fab: false,
      showbtn:true,
    }
  },

  computed:{

  },

  methods: {
    ...mapActions('CSL', ['loadCSLDetailToCart']),



    removeCard() {
      this.$emit('removeCard')
    },



    printCard() {
      this.$htmlToPaper('printMe')

    },

    printDiv() {
      var divToPrint = document.getElementById('printMe')
      var newWin = window.open('', 'Print-Window')
      newWin.document.open()
      newWin.document.write(
        '<html style="padding:2em" ><body onload="window.print()">' +
          divToPrint.innerHTML +
          '</body></html>'
      )
      newWin.document.close()
      setTimeout(function () {
        newWin.close()
      }, 10)
    },

    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },

    goToTop() {
      const el = this.$refs.scrollToMe
      if (el){
        el.scrollTop =  20
      }
      },
  },
}

// }
</script>

<style scoped>
.detailcard {
  box-sizing: border-box;
  background-color: #d8d5d5;
  border-radius: 5px;
  padding: 1em;
  margin:1em;
  /* padding-right: 15px; */
  line-height: 1.2em;
   width: 400px;
  overflow-y: scroll;
  max-height: 40vh;
  /* border-radius: 10px; */
  box-shadow: 5px 5px 10px 2px rgba(20, 20, 20, 0.5);

}

.details {
  display: flex;
}

.textarea {
  flex-basis: 1,1, 45%;
}

.imagearea {
 flex-basis: 1, 1, 45%;
  padding-left: 2em;
}

.imagearea img {
  width: 300px;
  object-fit: fit;
}



.label {
  font-weight: bold;
}

hr {
  margin-bottom: 0.5em;
}

.btnchoice {
  position: relative;
  display: flex;
  justify-content: space-around;
}

.btnchoice > button {
  margin: 0.5em;
  padding: 0.5em 1em 0.5em 1em;
  /* color: rgb(56, 43, 9); */
}

ul {
  margin-bottom: 0.5em;
  list-style-type: none;
}


@media (max-width: 800px) {
  .detailcard {
    margin: 0em 0.25em 1.5em 0.25em;
    padding: 0.4em;
  }
}

@media print {
  .detailedcard {
    position: relative;
    line-height: 1.2em;
    left: 100px;
    top: 70px;
    width: 500px;
    overflow: auto;
    max-height: 60vh;
    border-radius: 10px;
    z-index: 500;
    font-size: 12px;
    padding: 2em;
  }

}
</style>
