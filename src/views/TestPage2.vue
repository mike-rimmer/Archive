<template>
  <div class="test">
    <div
      class="tool"
    >
      <h3>MyToolTip Goes Here</h3>
      <ToolTip
        :tool-tip="tip"
        left="true"
      >
        <template
          v-slot:activator="
            {on,
             attrs}"
        >
          <div
            v-bind="attrs"
            v-on="on"
          >
            <div v-show="attrs.showRed">
              "Red Class Selected"
            </div>
            <h3>This is a slot prop sample</h3>
            <ul>
              <li>One</li>
              <li>Tow</li>
              <li>Three</li>
              <li>Four</li>
            </ul>
          </div>
        </template>
      </toolTip>
    </div>
  </div>
</template>

<script>
// import ToolTip from '@/components/ToolTip'
// import LogoHeader from '@/components/LogoHeader'
import ToolTip from '@/components/ToolTip'
// import Pagination from '@/components/Pagination'
export default {
  components: {
    // ToolTip,
    // LogoHeader,
    // Pagination,
    ToolTip,
  },
  data() {
    return {
      tip: 'Click to turn List red!',
      tip1: 'Place any tool tip in this list of tool tips.',
      src: '../assets/images/Mills_400.png',
    }
  },
}
</script>
<style>
.test {
  position: relative;
  background-color: lightgrey;
  width: 100vw;
  height: 100vh;
}

.tool {
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>
