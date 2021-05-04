<template>
  <div v-html="aboutInfo" />
</template>

<script>
  export default {
    props:['info'],
    data(){
      return{
        aboutInfo: info,
      }
    }
  }
</script>

<style scoped>

</style>
