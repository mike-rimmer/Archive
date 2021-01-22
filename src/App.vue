<template>
  <v-app>
    <ShipListsMenu />
    <!-- <ScrimbaNB /> -->
    <v-main>
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </v-main>
    <v-snackbar
      v-model="snackbar.show"
      :multi-line="true"
      :right="true"
      :top="true"
      :timeout="6000"
      :color="snackbar.variant"
      absolute
      app
    >
      {{ snackbar.message }}
      <v-btn
        dark
        text
        @click="updateSnackbar,{show:false}"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
// import NavBar from '@/components/NavBar.vue';
// import DeskTopNavBar from '@/components/DeskTopNavBar.vue'
import millsData from './data/datasource'
import {mapState} from 'vuex'
import {mapActions} from 'vuex'
import ShipListsMenu from '@/components/ShipListsMenu'
// import NActions from '@/components/MenuItems2'
// import MenuLists from '@/components/MenuLists.vue';
// import Typography from '@/components/Vuetify/Typography.vue';
// import Buttons from '@/components/Vuetify/Buttons.vue';
// import ScrimbaNB from '@/components/Vuetify/ScrimNB.vue';
export default {
  name: 'App',

  components: {
    ShipListsMenu,
    // ScrimbaNB
    // Typography
    // Buttons,

    // DeskTopNavBar,
    // MenuLists
  },

  data() {
    return {
      items: millsData.menuItems,
    }
  },

  computed:{
    ...mapState( ['snackbar'])
  },
  methods:{
    ...mapActions(['upDateSnackBar'])
  }
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
