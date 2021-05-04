<template>
  <div class="layout">
    <!-- <div class="box color primary white--text">
        Primary
      </div>
      <div class="box color seconday">
        Secondary
      </div>
      <div class="box color accent">
        Accent
      </div>
      <div class="box color error">
        Error
      </div>
      <div class="box color info">
        Info
      </div>
      <div class="box color success">
        Success
      </div>
      <div class="box color warning">
        Warning
      </div>
      <div class="box color lightblue">
        LightBlue
      </div>
      <div class="box color yellow">
        Yellow
      </div>
      <div class="box color pink">
        Pink
      </div>
      <div class="box color orange">
        Orange
      </div>
      <div class="box color magenta">
        Magenta
      </div>
      <div class="box color darkblue">
        DarkBllue
      </div>
      <div class="box color gray">
        gray
      </div>
      <div class="box color neutralgray">
        NuetralGray
      </div> -->
    <h1>
      FUTURE SITE FOR MARINE MUSEUM'S
      <span>
        {{ title.toUpperCase() }}
      </span>
    </h1>

    <!-- <div class="box color green">
      Green
    </div>
    <div class="box color red">
      Red
    </div>
    <div class="box color darkblueshade">
      Darkblueshade
    </div>
    <div class="box color lightgray">
      LightGray
    </div>
    <div class="box color lightpink">
      Light Pink
    </div>
    <div class="box color ligthwhite">
      White
    </div> -->
  </div>
</template>

<script>
export default {
 name: 'BasePlaceholder',
 props:{
   title:{
   type: String,
   default:'Enter View Title'

   }
 }
}
</script>

<style lang="css">
  .layout{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  height:93vh;
  background: linear-gradient(
     hsla(0, 0%, 80%,1),
     hsla(0, 0%, 100%,.9),
   )
  }

.box{
  display:inline;
  width:100px;
  height:100px;
  border: solid 1px gray;
}

  h1{
   font-family:'Lato-LightItalic';
    margin:auto;
  }
</style>
