<template>
  <div
    class="detailcard"
    :record="record"
  >
    <div
      class="pa-5 ma-5"
      color="blue"
      height="auto"
    >
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
            {{ notis }}
            <p
              v-for="(value, key, index ) in record.details"
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
          <div
            v-if="showImage"
            class="imagearea"
          >
            <!-- <img
              :src="IMGPATH+mapInfo.url"
              :alt="mapInfo.name"
            > -->
          </div>
        </div>
      </div>
      <v-row justify-lg="center">
        <div
          class="btnchoice d-print-none"
        >
          <v-btn
            @click="CloseDetailPopUp"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>


          <v-btn
            @click="printDiv"
          >
            <v-icon>mdi-printer</v-icon>
            Print
          </v-btn>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
import Bus from '@/services/Bus'
import { mapActions } from 'vuex'
export default {
  name: 'BaseDetailPopUp',
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
    mapInfo: {
      type: Object,
      default: () => ({ url: '', name: '' }),
    },
  },
  // data(){
  //   return{
  //     notis:this.record.details.Notis
  //   }
  // },

  data() {
    return {
      notis:this.record.details.Notis,
      fab: false,
      showbtn:true,
      // IMGPATH:
      //   'http://localhost/shiplists2/list-db-server/images/wallaceships/',
    }
  },

  methods: {
    ...mapActions('CSL', ['loadCSLDetailToCart']),

    showImage() {
      if (this.mapInfo.url) {
        return true
      }
      return false
    },

    CloseDetailPopUp() {
      this.visible = false
      console.log('Close Frm', this.notis)
      this.$emit('closefrm')
    },


    printCard() {
      this.$htmlToPaper('printMe')
      Bus.$emit('closeDetailFrm')
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
      let tag = document.getElementById('basePop')
      tag.scroll(0, 0)
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
  padding: .5em;
  /* padding-right: 15px; */
  line-height: 1.2em;
  min-width:400px;
  max-width:450px;
  overflow-y: auto;
  max-height: 600px;
  margin:1em;
  padding-right:2em;
  box-shadow:5px 5px 5px, rgba(40, 40, 40, .7);
  font-size:14px;
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
