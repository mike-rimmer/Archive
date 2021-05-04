<template>
  <div>
    <BaseFrm>
      <template v-slot:Cart>
        <CartIndicator />
      </template>
      <template v-slot:QryFrm>
        <div>
          <MillsQryFrm
            :formtitle="qryformtitle"
          />
        </div>
      </template>
      <template v-slot:summaryFrm>
        <div>
          <MillsDisplayFrm
            :formtitle="formtitle"
            :headers="headers"
            :height="tableheight"
          />
        </div>
      </template>
    </basefrm>
  </div>
</template>

<script>
// import ApiServices from '../services/ApiServices'
// import millsData from '../../data/MillsDataSource';
const BaseFrm = () => import('@/components/BaseComponents/BaseShipListFrm.vue')
// import BaseFrm from '@/components/BaseComponents/BaseShipListFrm.vue';
const MillsQryFrm = () => import('@/components/Mills/MillsQryFrm.vue')
// import MillsQryFrm from '@/components/Mills/MillsQryFrm.vue';
const MillsDisplayFrm = () => import('@/components/Mills/MillsDisplayFrm.vue')
const CartIndicator = () => import('@/components/BaseComponents/BaseDetailCartIndicator.vue')
// import MillsDisplayFrm from '@/components/Mills/MillsDisplayFrm.vue';
import {mapActions} from 'vuex'


export default {
  name:'MillsPage',
  title:"Mills List",
  components: {
  BaseFrm,
  MillsQryFrm,
  MillsDisplayFrm,
  CartIndicator
  },

  data() {
    return {
       items:['Graphs', 'Saved Searches'],
       headers: [
        { text: 'Mills #', class: 'sticky-header', value: 'mills', width:'10%'  },
        { text: 'Owner', class: 'sticky-header', value: 'owners', width:'15%' },
        { text: 'Vessel Name', class: 'sticky-header', value: 'vesselName', width:'15%' },
        { text: 'Official #', class: 'sticky-header', value: 'officialNum', width:'10%'},
        { text: 'Where Built', class: 'sticky-header', value: 'whereBuilt', width:'30%' },
        { text: 'Date Built', class: 'sticky-header', value: 'dateBuilt', width:'10%' },
        {
          text: 'Reason Closed',
          class: 'sticky-header',
          value: 'reasonClosed',
          width: '25%'
        },
      ],
      errMsg:'',
      tableheight:'380',
      formtitle:"The New Mills List Canadian Coastal and Inland Steam Vessels, 1809 -1930",
      qryformtitle:"Mills Registry",
    }
  },

    // computed:{
    //   ...mapState(['MillsCart', 'MillsLatestFilter', 'MillsCartIsLoading']),

    //   millsdata(){
    //       return this.MillsLatestFilter
    //   },

    //   showSummary() {
    //     return !this.showIntro
    //   }

    // },

    // beforeCreate(){
    //    console.time()
    //    console.log('%cMills Before Created', 'background-color:green; color:white')
    // },

    // created(){
    //      this.loadCart()
    //      console.timeLog()
    //      console.log('%cMills Created', 'background-color:green; color:white')
    //    },

    // beforeMount(){
    //   console.timeLog()
    //   console.log('%cMills Before Mounted', 'background-color:green; color:white')
    // },

    // mounted(){
    //   this.$nextTick(() =>{
    //     console.log('%cNextTick', 'background-color:red; color:white')
    //     console.log('%cMills Mounted', 'background-color:green; color:white')
    //     console.timeLog()
    //     console.timeEnd()

    //   })
    // },

    // beforeUpdate(){
    //   console.timeLog()
    //   console.log('%cMills Before UpDated', 'background-color:green; color:white')
    // },

    // upDated(){
    //   this.$nextTick(() =>{
    //   console.timeLog()
    //   console.log('%cMills UpDated', 'background-color:green; color:white')
    //   })
    // },

    // activated(){
    //   console.timeLog()
    //   console.log('%cMills Activated', 'background-color:green; color:white')
    // },

    // deActivated(){
    //   console.timeLog()
    //   console.log('%cMills DeActivated', 'background-color:green; color:white')
    // },

    // beforeUnmount(){
    //   console.timeLog()
    //   console.log('%cMills Before Unmount', 'background-color:green; color:white')
    // },

    // errorCaptured(){
    //   console.timeLog()
    //   console.log('%cMills errorCaptured', 'background-color:green; color:white')
    // },

    // renderTracked(){
    //   console.timeLog()
    //   console.log('%cMills renderTracked', 'background-color:green; color:white')
    // },

    // renderTriggered(){
    //   console.timeLog()
    //   console.log('%cMills renderTriggered', 'background-color:green; color:white')
    //   console.timeEnd()
    // },

    created(){
      this.loadCart()
    },

    methods: {
    ...mapActions('Mills', ['setMillsFilterClearingFalse', 'addItemsToMillsCart', 'loadMillsCart', 'setMillsCartIsLoading' ]),

    loadCart(){
      // if(! this.MillsCart.length > 1){
        this.setMillsCartIsLoading(true)
        this.loadMillsCart()
      // }
     },



    }
}

</script>

<style  scoped>
 .chartContainer{
   display:flex;
   flex-wrap: wrap;
   width:100%;
   height:400px;
   background-color:white;
   justify-content: space-around;
 }

 .card{
   width:350px;
 }
</style>
