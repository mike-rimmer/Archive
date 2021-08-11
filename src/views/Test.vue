<template>
  <div>
    <div id="app">
      <h3 id="title">
        Learning Functional Components
      </h3>
      <FuncTest
        :brands="['Tesla', 'Bentley', 'Ferrari', 'Ford']"
      />
      <Example
        id="examp"
        @click="showClick"
      >
        This is example
      </Example>

      <RenderlessParent
        id="render"
      />
    <!-- <WaitTransition /> -->
    </div>
    <button @click="startAnimation">
      Click to Start Animation
    </button>
  </div>
</template>
<script>
import gsap from'gsap'
import RenderlessParent from '@/components/NewConcepts/RenderlessParent'
import FuncTest from '@/components/NewConcepts/FunctionalTest.vue'
import Example from '@/components/NewConcepts/Example.js'
// import WaitTransition from '@/components/NewConcepts/WaitTransition'
export default {
  name: 'App',
  components:{
    RenderlessParent,
    FuncTest,
    Example,

    // WaitTransition
  },

  methods:{
    showClick(){
      console.log('%cShow more cars Btn was Clicked','background-color:green; color:white;')
    },


    startAnimation(){
      let tl = gsap.timeline({repeat:2, repeatDelay:1})
      tl.from('#title',{y:-100, opacity:0, duration:1})
      tl.from('#examp',{x:260, opacity:0, duration:1})
      tl.to('#render',{x:260, opacity:0, duration:1})
    }


  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color:black;
  color:white;
}

#title, #examp, #render{
  opacity:1
}
</style>
