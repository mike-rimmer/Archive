<template>
  <div style="margin-top:100px;">
    <BaseFrm>
      <template v-slot:Cart>
        <CartIndicator />
      </template>
      <template v-slot:QryFrm>
        <RegistryQryFrm
          :title="title"
          @hidePopUp="hidePopUp"
          @clearRegistrySummaryFrm="resetRegistryData"
        />
      </template>
      <template v-slot:summaryFrm>
        <RegistrySummaryDisplayFrm
          :height="height"
          :headers="headers"
          :data="registryData"
          :title="title"
        />
      </template>
    </BaseFrm>
  </div>
</template>

  <script>
import BaseFrm from '@/components/BaseComponents/BaseShipListFrm.vue';
import RegistryQryFrm from '@/components/Registry/RegistryQryFrm';
import RegistrySummaryDisplayFrm from '@/components/Registry/RegistrySummaryDisplayFrm'
import CartIndicator from '@/components/BaseComponents/BaseDetailCartIndicator.vue'
import {mapState, mapActions} from 'vuex'

export default {
  title:"Canadian Ship Registry List",
  name:'RegistryVue',
  components: {
      BaseFrm,
      RegistryQryFrm,
      RegistrySummaryDisplayFrm,
      CartIndicator
      // popUp,
      // CardRack
  },

    data() {
      return {
        height:'380',
        csl:[],
        title:"CANADIAN SHIP REGISTRY LIST",
        // registryTitle:'CANADIAN SHIP REGISTRY LIST',
        showPopUp:false,
        registryData:[],
        errMsg:'',
        headers: [
        { text: 'Official Num', value: 'officialnum', width:'15%'},
        { text: 'Vessel', value: 'vessel', width:'18%'},
        { text: 'Registration', value: 'reg', width:'18%'},
        { text: 'Reg Date', value: 'regyear', width:'10%' },
        { text: 'Builder', value: 'builder', width:'25%'},
        { text: 'Rig', value: 'rig', width: '10%'},
      ],

      }
    },



  computed: {
      ...mapState('Registry', ['RegistryCart']),
    //  loadingDataFinished(){
    //    return ! this.gettingData
    //  }
    },


 created(){
   this.loadCart()
   },

  mounted() {
    // Bus.$on('addItemToRegistryCart', payload => {
    //   this.$store.dispatch("addItemToRegistyCart", payload)
    // })

  },

  methods: {
    ...mapActions('Registry', ['loadRegistryCart', 'setRegistryCartIsLoading' ]),

    loadCart(){
      this.setRegistryCartIsLoading(true)
      this.loadRegistryCart()
    },

    resetRegistryData(){
      this.registryData=[]
    },

  //  getRegistryDataByAll(){
  //      this.registryData = []
  //     ApiServices.getRegistrySummaryList()
  //        .then((response) => {
  //         if (!response.data.message) {
  //           this.errMsg = ''
  //           this.showPopUp = false
  //           this.registryData = response.data
  //           this.showIntro = false
  //           // console.log(this.millsData.length);
  //         } else {
  //           this.errMsg = response.data.message
  //           this.showPopUp = true
  //         }
  //       })
  //       .catch((error) => {
  //         this.errMsg = error
  //         this.showPopUp = true
  //       })

  //  },



    // getRegistrySummaryByGlobalSearch(payload){
    //    this.registryData = []
    //   if (payload == '') {
    //     return
    //   }

    //   ApiServices.getRegistrySummaryByGlobalSearch(`'${payload}'`)
    //     .then((response) => {
    //       if (!response.data.message) {
    //         this.showPopUp = false
    //         this.errMsg = ''
    //         this.registryData = response.data
    //         this.showIntro = false
    //       } else {
    //         this.errMsg = response.data.message
    //         this.showPopUp = true
    //       }
    //     })
    //     .catch((error) => {
    //       this.errMsg = error
    //       this.showPopUp = true
    //     })
    // },




    hidePopUp() {
      this.showPopUp = false
    },

  },
}
</script>

<style scoped>

</style>


