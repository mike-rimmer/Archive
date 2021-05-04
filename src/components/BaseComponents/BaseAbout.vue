<template>
  <div v-html="aboutdata" />
</template>

<script>

  export default {

  props:{
    aboutdata:{
      type:String,
      default:''
    }
    },

    data(){
      return{

      }
    },

  }
</script>

<style scoped>

</style>
