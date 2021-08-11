<template>
  <div>
    <ul>
      <slot
        v-for="item in listItems"
        name="listSlot"
        :item="item"
      >
        <li :key="item">
          {{ item }} <!--fallback content goes here -->
        </li>
      </slot>
    </ul>
  </div>
</template>

<script>
  export default {
   name: 'Lists',

   props:{
     listItems:{
       type:Array,
       required:true,
       default: ()=>[]
     }
   }
  }
</script>

<style lang="css" scoped>

</style>
