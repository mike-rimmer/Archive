<template>
  <div
    id="basePop"
    ref="top"
    v-scroll.self="onScroll"
    class="detailcard"
    :record="record"
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
        </div>
        <div
          v-if="showImage"
          class="imagearea"
        >
          <img
            :src="IMGPATH+mapInfo.url"
            :alt="mapInfo.name"
          >
        </div>
      </div>
    </div>
    <v-row justify-lg="center">
      <div
        class="btnchoice d-print-none"
      >
        <v-btn
          fixed
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
          @click="printDiv"
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
            <v-icon>mdi-arrow-up-bold-circle</v-icon>
          </v-btn>
        </v-fab-transition>
      </div>
    </v-row>
  </div>
</template>

<script>

import Bus from '@/services/Bus'
import {mapActions}from 'vuex'
export default {
  name:"BaseDetailPopUp",
  components: {},

  filters:{

    titleCase: function (txt){
      if (!txt) return ''
     if (txt =='Addendum') {
       //  console.log(txt); return txt
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
      type: Object,
      default: ()=>{},
      required: true,
    },
    mapInfo:{
      type:Object,
      default: () =>({url:'', name:''})

    }
  },

  data() {
    return {
      fab:false,
      IMGPATH:"http://localhost/shiplists2/list-db-server/images/wallaceships/",

    }
  },

  methods: {
     ...mapActions('CSL', ['loadCSLDetailToCart']),

    showImage(){
    if(this.mapInfo.url){
      return true
    }
    return false
    },


    CloseDetailPopUp() {
      this.visible = false
      this.$emit('closefrm')
    },

    addItem2Store(){
      // alert(this.record.Notis)
      this.loadCSLDetailToCart(this.record)
    },

    printCard(){
      this.$htmlToPaper('printMe')
      Bus.$emit('closeDetailFrm')
      },

    printDiv(){
    var divToPrint=document.getElementById('printMe');
    var newWin=window.open('','Print-Window');
    newWin.document.open();
    newWin.document.write('<html style="padding:2em" ><body onload="window.print()">'+divToPrint.innerHTML+'</body></html>');
    newWin.document.close();
    setTimeout(function(){newWin.close();},10);
    },


    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 20
    },

    goToTop() {
      let tag = document.getElementById('basePop')
      tag.scroll(0,0)

      }
  },

}


// }
</script>

<style scoped>
.detailcard {
  position: absolute;

  /* width: auto; */
  box-sizing: border-box;
  background: linear-gradient(
    to bottom right,
    rgba(247, 248, 247, .9),
    rgba(252, 255, 252, 0)
    );
  background:var(--component-background-theme);
  backdrop-filter:blur(4px);
  background-size: cover;
  padding: 1em;
  padding-right:15px;
  line-height: 1.2em;
  left: 90px;
  /* top: 55px; */
  top: 2vh;
  width: 800px;
  overflow-y:scroll;
  max-height: 68vh;
  /* border-radius: 10px; */
   box-shadow: 5px 5px 10px 2px rgba(20, 20, 20, 0.5);
  z-index: 500;
}

.details{
  display:grid;
  grid-template-columns: 40% 5% 55%;
  grid-template-areas:
  't . i';
}

.textarea{
  grid-area:'t'
}


.imagearea{
  grid-area:'i';
  padding-left:2em;
}

.imagearea img{
  width:300px;
  object-fit:fit;
}

.frostedglass{
  position: absolute;
  /* width: auto; */
  box-sizing: border-box;
  background:linear-gradient(
    rgba(225, 220, 220, .4),
    rgba(176, 173, 173, .4)
  );
  backdrop-filter: blur(3px);
  /* background-color: lightgray; */
  /* background-image: url('../assets/parchment1.jpg'); */
  background-size: cover;
  padding: 1em;
  line-height: 1.2em;
  left: 100px;
  top: 550px;
  width: 500px;
  overflow: auto;
  max-height: 60vh;
  border-radius: 10px;
  z-index: 500;
}

/* .fixedbtn{
  position:absolute;
  top:0;
  right:0;
  background-color:red;
} */


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
  position:relative;
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
 @media print{
   .detailedcard {
    position:relative;
    line-height: 1.2em;
    left: 100px;
    top: 70px;
    width: 500px;
    overflow: auto;
    max-height: 60vh;
    border-radius: 10px;
    z-index: 500;
    font-size:12px;
     padding:2em;
 }
 .details{
   padding:2em;
   font-size:3em;
 }
 }
</style>
