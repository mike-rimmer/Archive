<template>
  <div id ="addendum">
      <h3>Addendum:</h3>
      <hr style="margin:.5em;">
      <slot name='body'></slot>
  </div>
</template>

<script>
export default {

};
</script>

<style  scoped>
 #addendum{
   position:absolute;
   padding:.5em;
   line-height: 1em;
   left:calc(50% - 150px);
   top:calc(50% - 125px);
   width:300px;
   height:250px;
   background-image:url("../assets/parchment1.jpg");;
   /* background-color:white; */

   box-shadow: 5px 5px 5px 5px rgba(40,40,40,.7);
   overflow-y:auto;

 }
</style>
