<template>
  <div class="background" />
</template>

<script>
  export default {
    data(){
      return{

      }
    }

  }
</script>

<style scoped>
.background {
  position: relative;
  width: 100vw;
  height:80vh;
  z-index: 1;
}


.background::before {
  content: '';
  background: url('../assets/images/underconstruction.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -100;
  opacity: 1;
}
</style>
