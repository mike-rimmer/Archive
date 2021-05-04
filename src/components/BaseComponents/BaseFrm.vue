<template>
  <div class="background">
    <v-row
      no-gutters
      class="mb-4"
    />

    <v-row
      no-gutters
    >
      <v-col
        lg="3"
        md="12"
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
        lg="9"
        md="12"
      >
        <v-card class="ma-4">
          <slot name="summaryFrm" />
        </v-card>
      </v-col>
    </v-row>

    <v-row class="color red">
      <v-col cols="12">
        <slot name="millsCharts" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import popUp from '@/components/PopUp'

export default {
  name:'BaseFrmVue',

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
    hidePopUp() {
      this.showPopUp = false
    },

    filterByProv(prov){
      let tmp

      tmp = this.latestFilter.filter( (ele) => ele.prov == prov)
      this.latestFilter = tmp
    },

    filterByDate(date){
      let tmp
       tmp = this.latestFilter.filter( (ele) => ele.dateBuilt == date)
       this.latestFilter = tmp
    },

    filterByReason(reason){
      let tmp
      tmp= this.latestFilter.filter( (ele) => ele.reasonClosed == reason)
      this.latestFilter = tmp
    },

  }




  }
</script>

<style scoped>

/* .background {
  position: relative;
  width: 100vw;
  height:100vh;

  z-index: 1;
}


.background::before {
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
  opacity: .1;
}

 .glasslook{
   background: linear-gradient(
    to right bottom,
    rgba(247, 248, 247, 0),
    rgba(252, 255, 252,.7)
    );
 }

.theme--light.v-card{
   background: linear-gradient(
    to right bottom,
    rgba(247, 248, 247, 0),
    rgba(252, 255, 252,.7)
    );
} */

.background {
  position: relative;
  width: 100vw;
  height:100vh;

  z-index: 1;
}


.background::before {
  content: '';
  /* background: url('../../assets/greatlakes.jpeg'); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -100;
  opacity: .1;
}

 .glasslook{
   /* var(--component-background-theme) */
   background: linear-gradient(
    to right bottom,
    rgba(247, 248, 247, 0),
    rgba(252, 255, 252,.7)
    );
 }

.theme--light.v-card{
  /* var(--component-background-theme) */
   background: linear-gradient(
    to right bottom,
    rgba(247, 248, 247, 0),
    rgba(252, 255, 252,.7)
    );
}

@media print {
  .noPrint{
    display:none;
  }
}
</style>
