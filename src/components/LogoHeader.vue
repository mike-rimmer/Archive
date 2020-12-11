<template>
  <div>
    <slot
      name="header"
      :logo="logoImage"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoImage: require('../../public/cayuga.jpg'),
    }
  },
}
</script>

<style scoped>
</style>
