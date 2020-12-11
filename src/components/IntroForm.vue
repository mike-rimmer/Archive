<template>
  <div class="container">
    <div class="body">
      <slot name="body" />
    </div>
    <div class="sidebar">
      <slot name="sidebar" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.body {
  flex: 80%;
}

.sidebar {
  text-align: center;
  flex: 20%;
}
</style>
