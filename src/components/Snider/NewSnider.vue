<template>
  <div>
    <BaseFrm
      :err-msg="errMsg"
      :show-pop="showPopUp"
    >
      <template v-slot:QryFrm>
        <div>
          <SnyderQryFrm
            :formtitle="qryformtitle"
            :years="millsYears"
            :prov="millsProv"
            :reason-list="millsReasonClosed"
            @filterByProv="filterByProv"
            @filterByYear="filterByYear"
            @filterByReason="filterByReason"
            @resetData="resetMillsData"
          />
        </div>
      </template>
      <template v-slot:summaryFrm>
        <div>
          <SnyderDisplayFrm
            :formtitle="formtitle"
            :headers="headers"
            :table-data="millsdata"
            :height="tableheight"
            :isloading="isLoading"
          />
        </div>
      </template>
    </BaseFrm>
  </div>
</template>

<script>
import ApiServices from '../services/ApiServices'
import millsData from '../data/MillsDataSource'

import BaseFrm from '@/components/BaseComponents/BaseFrm.vue'
import SnyderQryFrm from '@/components/BaseComponents/BaseQryFrm.vue';
import SnyderDisplayFrm from '@/components/BaseComponents/BaseDisplayFrm.vue';
import {mapState, mapActions, mapGetters} from 'vuex'

export default {
  title:"Snyder List",
  name:"NewSnyder",
  components: {
  BaseFrm,
  SnyderQryFrm,
  SnyderDisplayFrm
  },

  data() {
    return {
       headers: [
        { text: 'Mills #', class: 'sticky-header', value: 'mills', align:'center', width:'10%'  },
        { text: 'Vessel Name', class: 'sticky-header', value: 'vesselName', width:'10%' },
        { text: 'Official #', class: 'sticky-header', value: 'officialNum', width:'10%'},
        { text: 'Where Built', class: 'sticky-header', value: 'whereBuilt', width:'20%' },
        { text: 'Date Built', class: 'sticky-header', value: 'dateBuilt', width:'10%' },
        {
          text: 'Reason Closed',
          class: 'sticky-header',
          value: 'reasonClosed',
          width: '40%'
        },
      ],
      errMsg:'',
      showPopUp:false,
      latestFilter:[],
      tableheight:'540',
      isLoading:false,
      formtitle:"The New Mills' List Registered Canadian Steamships 1817 - 1930 over 75 feet",
      qryformtitle:"Mills Registry",
      millsProv:millsData.province,
      millsYears:millsData.years,
      millsReasonClosed:millsData.reason4Closing
    }
  },

    computed:{
      ...mapState(['MillsCart']),

      millsdata(){
        return this.latestFilter;
      },

      showSummary() {
        return !this.showIntro
      }

    },

    mounted(){
    // if(this.MillsCart.length > 1){
      if(this.MillsCartIsLoaded()){
        this.isLoading = true
        this.latestFilter = this.MillsCart.concat()
        this.isLoading = false
        return
      }
      this.isLoading=true
      ApiServices.getSnydersSummaryList()
      .then((response) => {
      if (!response.data.message) {
        this.errMsg = ''
        this.showPopUp = false
        this.latestFilter = response.data
        this.isLoading = false
        this.loadMillsCart()
      } else {
        this.errMsg = response.data.message
        this.showPopUp = true
      }
    })
    .catch((error) => {
      this.errMsg = error
      this.showPopUp = true
    })

    },

    methods: {
      ...mapActions(['setMillsFilterClearingFalse']),
    ...mapGetters(['MillsCartIsLoaded']),

    loadMillsCart(){
      this.$store.dispatch("addItemsToMillsCart", this.millsdata)
    },

    resetMillsData(){
      this.latestFilter = this.MillsCart.concat()
      this.setMillsFilterClearingFalse()
    },

    hidePopUp() {
      this.showPopUp = false
    },

    toggleIntroSummary() {
      this.showWhenNotSearch = !this.showWhenNotSearch
      this.toggleIntroSummary = !this.toggleIntroSummary
    },

    filterByProv(prov){
      let tmp

      tmp = this.latestFilter.filter( (ele) => ele.prov == prov)
      this.latestFilter = tmp
    },

    filterByYear(date){
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

<style  scoped>
</style>
