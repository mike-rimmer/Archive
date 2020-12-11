<template>
  <div
    class="popup"
    :class="{turnRed : showRed}"
    :toolTip="toolTip"
  >
    <slot
      name="activator"
      :on="on"
      :attrs="attrs"
    />
    <transition name="fade">
      <div
        v-show="showTip"
        class="toolTip"
      >
        {{ toolTip }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    toolTip: {
      type: String,
      required: true,
      default: () => {
        return 'Please supply a toolTip'
      },
    },
  },
  data() {
    return {
      showTip: false,
      showRed: false,
    }
  },
  computed: {
    on() {
      return {
        mouseover: this.mouseover,
        mouseleave: this.mouseleave,
        click: this.click,
      }
    },
    attrs() {
      return {
        showRed: this.showRed,
      }
    },
  },

  methods: {
    mouseover() {
      this.showTip = true
    },
    mouseleave() {
      this.showTip = false
    },
    click() {
      this.showRed = !this.showRed
    },
  },
}
</script>
<style scoped>
.popup {
  display: inline-block;
  position: relative;
  /* background-color: steelblue;
  color: white; */
  width: auto;
  margin: 1em;
  border-radius: 10px;
  padding: 2px 5px 2px 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.7s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
  transform: translateX(20px);
}

.turnRed {
  background-color: red;
}

.toolTip {
  position: absolute;
  top: 2em;
  left: 110%;
  width: 200px;
  color: black;
  background-color: pink;
  border-radius: 10px;
  padding: 2px 5px 2px 5px;
  z-index: 100;
}
</style>
