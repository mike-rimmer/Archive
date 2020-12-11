<template>
  <div class="construction">
    <h3>{{ dbName }} Under Construction</h3>
    <img
      src="../assets/images/db1.jpg"
      alt="DB Image"
    >
  </div>
</template>

<script>
export default {
  name: 'Construction',
  props: {
    dbName: {
      type: String,
      required: true,
      default: 'No DB Selected',
    },
  },
}
</script>

<style scoped>
.construction {
  text-align: center;
}
.construction img {
  height: 200px;
  width: 300px;
  box-shadow: 5px 5px 5px rgba(20, 20, 20, 0.5);
}
</style>
