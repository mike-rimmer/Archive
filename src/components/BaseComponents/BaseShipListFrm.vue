<template>
  <div class="background">
    <v-row justify="end">
      <slot name="Cart" />
    </v-row>
    <v-row
      no-gutters
    />

    <v-row
      no-gutters
    >
      <v-col
        md="2"
        sm="12"
      >
        <slot name="QryFrm" />
        <h4
          v-show="isloading"
          style="text-align:center; color:white"
        >
          Data Table is Loading ... please wait
        </h4>
        <popUp v-show="showPopUp">
          {{ errMsg }}
        </popup>
      </v-col>
      <v-col
        md="9"
        sm="12"
        class="ml-10"
      >
        <v-card class="mt-4">
          <slot name="summaryFrm" />
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <slot name="charts" />
        <v-col />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import popUp from '../../components/PopUp'

export default {
  name:'BaseShipListFrm',

  components: {
    popUp,

    // ToolTip,
  },

  props:{
    errMsg:{
      type:String,
      default:''
    },
    showPopUp:{
      type:Boolean,
      default:false
    },
    isloading:{
      type:Boolean,
      default:false
    }
  },
  data(){
     return{

     }
  },

  mounted() {
  },

  methods: {
    // hidePopUp() {
    //   this.showPopUp = false
    // },

    // filterByProv(prov){
    //   let tmp

    //   tmp = this.latestFilter.filter( (ele) => ele.prov == prov)
    //   this.latestFilter = tmp
    // },

    // filterByDate(date){
    //   let tmp
    //    tmp = this.latestFilter.filter( (ele) => ele.dateBuilt == date)
    //    this.latestFilter = tmp
    // },

    // filterByReason(reason){
    //   let tmp
    //   tmp= this.latestFilter.filter( (ele) => ele.reasonClosed == reason)
    //   this.latestFilter = tmp
    // },

  }




  }
</script>

<style scoped>

.background {
  margin-top:4em;
  position: relative;
  width: 100vw;
  height:auto;
 /* height:100vh; */
  z-index: 1;
}


/* .background::before {
  content: '';
  background: url('../../assets/greatlakes.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -100;
  opacity: .4;
} */

 .glasslook{
    background: var(--ship-list--theme-color);
   /* background: linear-gradient(
    to right bottom,
    rgba(247, 248, 247, 0),
    rgba(252, 255, 252,.7)
    ); */
 }

.theme--light.v-card{
   background: var(--ship-list--theme-color);
   /* linear-gradient(
    to right bottom,
    hsla(120, 7%, 97%, 0),
    hsla(120, 100%, 99%, 0.7)
    ); */
}

@media print {
  .noPrint{
    display:none;
  }
}
</style>
