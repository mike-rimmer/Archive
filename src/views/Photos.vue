<template>
  <div>
    <ResearchBase>
      <template v-slot:intro>
        <h3>PHOTOGRAPHS</h3>
        <p>The photograph collection at the Marine Museum contain images collected or photographed by professional and amateur photographers over many decades and as far back as the late 19th century.</p>
        <p>The collection also includes historic photographs collected by researchers, images taken or commissioned by shipping company advertising departments and images purchased or given away to commemorate special events.</p>
        <p>
          The Museum has also taken its own photographs or collected images that document ships and shipwrecks, marine industry, ship passages and traditional marine trades.
          The Museum is in the process of digitizing many of these images to improve access. These can be accessed below via the Museum's research portal.
        </p>
      </template>
    </ResearchBase>
  </div>
</template>

<script>
import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
// import PlaceHolder from '@/components/BaseComponents/BasePlaceHolder'
export default {
  name: 'Photos',

  components:{
  ResearchBase,
  // PlaceHolder
},


}
</script>
