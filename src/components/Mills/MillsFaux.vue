<template>
  <div class="fauxdiv">
    <v-data-table
      dense
      :headers="headers"
      fixed-header
      :loading="isLoading"
      loading-text="Data is loading ... please wait!"
      :items="data"
      height="60vh"
      :footer-props="{
        'items-per-page-options':[100,200,300,400,500,1000,-1]}"
      :items-per-page="-1"
      class="elevation-6"
    />
  </div>
</template>

<script>
  export default {

  props:{
    height:{
      type:[String, Number],
      required: true,
      default: '200'
    }
  },
    data(){
      return{
        isLoading:false,
        data:
        [
        {mills:'000010', vesselName:'A.B. Cook',	officialNum: '88639',	whereBuilt:'Port Robinson, Ontario, Canada', dateBuilt:'1885', reasonClosed:'Removed From Register - Burnt'},
        {mills:'000020', vesselName:'A.C. Whitney',	officialNum: '75821',	whereBuilt:'Boston, Massachusetts, U.S.A.',	dateBuilt:'1873',	reasonClosed:'Broken Up'},
        {mills:'000030', vesselName:'A.D. Cross',	officialNum: '97014',		whereBuilt:'Pt. Colborne, Ontario, Canada',	dateBuilt:'1897',	reasonClosed:''},
        {mills:'000040', vesselName:'A.E. Ames',	officialNum:'114449',		whereBuilt:'Newcastle, , England',	dateBuilt:'1903',		reasonClosed:'War Loss'},
        {mills:'000050', vesselName:'A.E. McKinstry',	officialNum: '129491',	whereBuilt:'Glasgow, , Scotland',	dateBuilt:'1910',	reasonClosed:'Scuttled'},
        {mills:'000060', vesselName:'A.F. Bowman',	officialNum:'116385',		whereBuilt:'Collingwood, Ontario, Canada', dateBuilt:'1906',	reasonClosed:'Removed From Register - Abandoned'},
        {mills:'000070', vesselName:'A.H. Baldwin',	officialNum:'71197',	whereBuilt:'Arnprior, Ontario, Canada',	dateBuilt:'1875',	reasonClosed:'Broken Up'},
        {mills:'000080', vesselName:'A.H. Jennie',	officialNum:'77820',		whereBuilt:'Port Rowan, Ontario, Canada',	dateBuilt:'1882',	reasonClosed:'Foundered'},
        {mills:'000090', vesselName:'A.J. Goddard',	officialNum:'107517',	whereBuilt:'Bennett Lake, Yukon, Canada',	dateBuilt:'1898',	reasonClosed:'Wrecked'},
        {mills:'000100', vesselName:'A.J. Lowe',	officialNum:'138467',		whereBuilt:'Killarney, Ontario, Canada',dateBuilt:'1920',reasonClosed:''	},
        {mills:'000110', vesselName:'A.M. German',	officialNum:'152649',	whereBuilt:'Midland, Ontario, Canada',	dateBuilt:'1926',	reasonClosed:'Broken Up'},
        {mills:'000120', vesselName:'A.M. Petrie',	officialNum:'100393',	whereBuilt:'Hamilton, Ontario, Canada', dateBuilt:'1892', reasonClosed : 'Broken Up'},
        ],
         headers: [
        { text: 'Mills #', class: 'sticky-header', value: 'mills', width:'10%' },
        { text: 'Vessel Name', class: 'sticky-header', value: 'vesselName', width:'15%' },
        { text: 'Official #', class: 'sticky-header', value: 'officialNum', width:'10%'},
        { text: 'Where Built', class: 'sticky-header', value: 'whereBuilt', width:'30%' },
        { text: 'Date Built', class: 'sticky-header', value: 'dateBuilt', width:'10%' },
        { text: 'Reason Closed', class: 'sticky-header', value: 'reasonClosed',width: '25%'}
         ]
  }
  }
  }
</script>

<style scoped>
.fauxdiv{
 opacity:1;
 backdrop-filter: blur(2px);
}



.v-data-table >>> table > tbody > tr > td {
font-size: 0.8rem !important;
}

/* Can use / deep / or >>> or ::v-deep to force style on classes within components */
.v-data-table >>> .sticky-header {
  position: sticky;
  top: 0px;
  height: 30px;
  font-weight: bold;
  background: linear-gradient(
    to right bottom,
    rgba(247, 248, 247, 0),
    rgba(252, 255, 252, 0)
  );
  opacity:1;
}

.glasslook{
   background: linear-gradient(
    to right bottom,
    rgba(247, 248, 247, 0),
    rgba(252, 255, 252, 0)
    );
 }

.v-data-table{
  font-size:.8em;
}

.theme--light.v-data-table{
   background: linear-gradient(
    to right bottom,
    rgba(100,128,64,0),
    rgba(100,128,64,.7)
  );
    backdrop-filter:blur(4px);
  /* background-color: rgba(100,128,64,.2); */
}


.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
