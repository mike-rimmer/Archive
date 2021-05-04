<template functional>
  <div>
    <p
      v-for="brand in props.brands"
      :key="brand"
    >
      {{ brand }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'FunctionalTest',
  functional: true,
  props: {
  brands: {
    type:Array,
    default: () => ()=>[]
  }
  },
}
</script>

<style scoped>

</style>
