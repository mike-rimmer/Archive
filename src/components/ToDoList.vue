<template>
  <ul>
    <li
      v-for="item in todoList"
      :key="item.id"
    >
      <slot :itemvalue="item">
        {{ item.test }}
      </slot>
    </li>
  </ul>
</template>

<script>
  export default {
    name:"Todolist",

    props:{
      todos: Array

    },


    data(){
      return{
        todoList:this.todos
      }

    }
  }
</script>

<style  scoped>

</style>
