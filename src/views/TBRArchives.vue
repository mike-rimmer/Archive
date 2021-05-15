<template>
  <div>
    <ResearchBase>
      <template v-slot:intro>
        <h3>Archive</h3>
        <p> The Museum's Archives maintains collections documenting Canadian maritime heritage on the Great Lakes from the early 19th century through to the present. Material covering all aspects of ships and shipping are represented from the original vessel design, through its building, its working life and its final paying off (or shipwreck). This collection consists of over 3,500 linear feet of records and over 50,000 ship plans.</p>
        <p>
          These various aspects of the marine trades and industry are reflected in collections originating from the draughting offices of naval architects, from the shipyards which built the ships, from the vessels themselves, and from the corporate headquarters of companies operating the fleets. The textual and ships plans are further supplemented by photographs and audio-visual recordings. Use the link below to be directed to our research portal where you can search our online database.
          Please note that we do not hold corporate personnel records and are therefore often unable to assist with genealogical requests.
        </p>
      </template>
    </ResearchBase>
  </div>
</template>

<script>
 import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
// import PlaceHolder from '@/components/BaseComponents/BasePlaceHolder'
export default {
  name: 'Archives',
  components:{
  ResearchBase,
  // PlaceHolder
}


}
</script>
