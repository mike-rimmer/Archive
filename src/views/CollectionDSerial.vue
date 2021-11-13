<template>
  <div>
    <ResearchBase>
      <template v-slot:banner>
        <div class="banner" />
      </template>
      <template v-slot:body>
        <BaseMessage message="Collection DSerial Search Page" />
      </template>
    </ResearchBase>
  </div>
</template>

<script>
  import BaseMessage from '../components/BaseComponents/BaseMessage';
  import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
  export default {
    components:{
      BaseMessage,
      ResearchBase
    }
  }
</script>

<style scoped>
.banner{
  height:665px;
  width:auto;
  background-image: url('../../src/assets/images/underconstruction.png');
  background-size:100% auto;
  background-position: 10% 57%;
  object-fit:cover;
  margin-bottom:2em;
}

</style>
