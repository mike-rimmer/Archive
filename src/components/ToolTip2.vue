<template>
  <div
    class="popup"
    :class="{turnRed : showRed}"
    :toolTip="toolTip"
  >
    <slot
      name="activator"
      :on="on"
    >
      <transition name="fade">
        <div
          v-show="showTip"
          class="toolTip"
          :class="{tp_left: left, tp_top: top, tp_right: right, tp_bottom: bottom}"
        >
          {{ toolTip }}
        </div>
      </transition>
    </slot>
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
      left: false,
      top: false,
      right: false,
      bottom: false,
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
      console.log(this.showRed)
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

.toolTip {
  display: flex;
  position: absolute;
  top: 10%;
  left: 110%;
  width: 100%;
  color: black;
  border: solid 1px black;
  background-color: lightsteelblue;
  box-shadow: 5px 5px 5px rgba(40, 40, 40, 0.7);
  border-radius: 10px;
  padding: 2px 5px 2px 5px;
  z-index: 100;
}

.red {
  background-color: red;
}

.tp_right {
  left: 100%;
}

.tp_left {
  right: 100%;
}

.tp_bottom {
  top: 100%;
}

.tp_top {
  bottom: 100%;
}
</style>
