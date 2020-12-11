<template>
  <div class="msg">
    <h4>{{ message }}</h4>
  </div>
</template>

<script>
export default {
  name: 'BaseMessage',

  props: {
    message: {
      type: String,
      default: 'Message goes Here!',
    },
  },
}
</script>

<style  scoped>
.msg {
  position: absolute;
  top: 50%;
  left: calc(50% - 200px);
  background-color: lightgray;
  width: 400px;
  padding: 1em;
}
.msg > h4 {
  text-align: center;
}
</style>
