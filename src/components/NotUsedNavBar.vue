<template>
  <div class="dnavBar">
    <div class="menu">
      <!-- <img
        class="logo"
        src="../assets/museumlogo.gif"
        height="75"
        width="150"
        alt="Museum Logo"
        srcset=""
      > -->
      <MenuItems class="menu" />

      <!-- <v-btn class="growth">
        <span class="mr-2 primary">For Growth</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </div>
  </div>
</template>

<script>
import MenuItems from '@/components/MenuItem3.vue'
export default {
  components: {
    MenuItems,
  },

  data() {
    return {}
  },
}
</script>
<style scoped>
.navBar {
  /* background-color: blue; */
  width: 100vw;
}

/* .menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  flex: 80%;
}

.log0 {
  flex: 10%;
}

.growth {
  flex: 10%;
} */
</style>
