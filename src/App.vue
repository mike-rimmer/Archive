<template>
  <v-app>
    <NavBar />
    <!-- <DeskTopNavBar :items="items" /> -->
    <v-main>
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </v-main>
  </v-app>
</template>

<script>
// import NavBar from '@/components/NavBar.vue';
import DeskTopNavBar from '@/components/DeskTopNavBar.vue'
import millsData from './data/datasource'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',

  components: {
    // DeskTopNavBar,
    NavBar,
  },

  data() {
    return {
      items: millsData.menuItems,
    }
  },
}
</script>
<style >
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
</style>
