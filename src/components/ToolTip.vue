<template>
  <div
    class="popup"
    :class="{turnRed : showRed}"
    :toolTip="toolTip"
    :top="top"
    :bottom="bottom"
    :left="left"
    :right="right"
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
        :class="{tp_left:left, tp_right:right, tp_top:top, tp_bottom: bottom, }"
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
    right: {
      type: Boolean,
      default: () => {
        return false
      },
    },
    top: {
      type: Boolean,
      default: () => {
        return false
      },
    },
    bottom: {
      type: Boolean,
      default: () => {
        return false
      },
    },
    left: {
      type: Boolean,
      default: () => {
        return false
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
      // setTimeout(() => {
      //   this.showTip = false
      // }, 3000)
    },
    mouseleave() {
      this.showTip = false
    },
    click() {
      // this.showRed = !this.showRed
      // console.log(this.showRed)
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
  /* margin: 1em; */
  border-radius: 10px;
  padding: 2px 5px 2px 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s 0.7s ease-in-out;
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
  min-width: 200px;
  color: black;
  border: solid 1px black;
  background-color: lightsteelblue;
  box-shadow: 5px 5px 5px rgba(40, 40, 40, 0.7);
  border-radius: 10px;
  padding: 2px 5px 2px 5px;
  z-index: 100;
}

.turnRed {
  background-color: red;
}

.tp_right {
  top: 40%;
  left: 110%;
}

.tp_left {
  top: 40%;
  right: 110%;
}

.tp_bottom {
  top: 110%;
  left: 0%;
}

.tp_top {
  top: -2.5em;
  left: 0%;
}
tp_middle {
  top: 25%;
}
</style>
