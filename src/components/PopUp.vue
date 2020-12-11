<template>
  <div id="popup">
    <h3>
      <slot name="msg" />
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    showPopup: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style  scoped>
#popup {
  position: absolute;
  padding: 0.5em;
  display: flex;
  line-height: 1em;
  justify-content: center;
  align-items: center;
  left: 20vw;
  top: 20vh;
  width: 250px;
  height: 100px;
  background-color: white;
  box-shadow: 5px 5px 5px 5px rgba(40, 40, 40, 0.7);
  color: red;
  z-index: 500;
}
</style>
