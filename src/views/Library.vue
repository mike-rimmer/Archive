<template>
  <div>
    <ResearchBase>
      <template v-slot:intro>
        <h3>LIBRARY</h3>
        <p>
          The Museum's library includes:
          •	material pertaining to museums and museology
          •	underwater archaeology
          •	British, American and Canadian naval history
        </p>
        <p>
          The library subject areas cover all aspects of Canadian shipping and marine heritage: yachting; canal systems; shipping registers, including a near complete run of Lloyds and Department of Transport List of Shipping; ship histories, lists and directories; shipping company fleet histories; steam technology; naval history; navigation; pilot guides; shipwreck directories; transactions of nautical societies; some ethnographic studies; naval architecture; shipbuilding general; shipbuilding of the Great Lakes; shipyard hull lists; yacht design and construction; boat building; ocean liner histories; steamboats; sails and rigging and engineering.

          The library also receives serials. Currently there are over 250 titles on file covering a range of marine topics.
        </p>
      </template>
    </ResearchBase>
  </div>
</template>

<script>
 import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
// import PlaceHolder from '@/components/BaseComponents/BasePlaceHolder'
export default {
  name: 'Library',
  components:{
  ResearchBase,
  // PlaceHolder
}


}
</script>
