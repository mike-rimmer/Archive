<template>
  <div id="app">
    <h3>Learning Functional Components</h3>
    <FuncTest
      :brands="['Tesla', 'Bentley', 'Ferrari', 'Ford']"
    />
    <Example @click="showClick">
      Click for More Cars
    </Example>
  </div>
</template>
<script>
import FuncTest from '@/components/NewConcepts/FunctionalTest.vue'
import Example from '@/components/NewConcepts/Example.js'
export default {
  name: 'App',
  components: {
    FuncTest,
    Example
  },
  methods:{
    showClick(){
      console.log('%cShow more cars Btn was Clicked','background-color:green; color:white;')
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
}
</style>
