<template>
  <div>
    <ResearchBase>
      <template v-slot:intro>
        <h3>ARTEFACTS</h3>
        <p>
          Much can be learned from the maritime material culture available to us.
          The Museum’s artefact collection encompasses over 4,000 objects and artworks; including a broad range of instruments, tools and equipment used by mariners, by shipbuilders and yachtsmen. A brief list of objects includes: navigation instruments, rigging gear, deck gear, steam engines, skiffs and other small craft, shipbuilding and boat building tools.
          This collection also includes a large number of ship models and clothing.
          The artefact collection also includes works of art. The art collection includes naval art of Grant Macdonald, works by Nicholas Henderson, Peter Rindlisbacher and many other professional and amateur and folk maritime artists.
        </p>
      </template>
    </ResearchBase>
  </div>
</template>

<script>
 import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
// import PlaceHolder from '@/components/BaseComponents/BasePlaceHolder'
export default {
  name: 'Artifacts',
  components:{
  ResearchBase,
  // PlaceHolder
}


}
</script>
