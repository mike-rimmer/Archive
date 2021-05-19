<template>
  <v-app>
    <v-app-bar
      app
    >
      <ShipListsMenu />
    </v-app-bar>
    <transition
      name="fade"
      mode="out-in"
      appear
    >
      <router-view />
    </transition>
  </v-app>
</template>

<script>

import ShipListsMenu from '@/components/Menus/ShipListMenuV2'
export default {
  name: 'App',

  components: {
    ShipListsMenu,
    // Footer
  },

  data() {
    return {
      // items: millsData.menuItems,
    }
  },

  computed:{
    // ...mapState( ['snackbar'])
  },
  methods:{
    // ...mapActions(['upDateSnackBar'])
  }
}
</script>
<style >
:root{
  --museum-blue:#091154;
  --museum-green:#39947f;
}

@font-face{
 font-family:'Lato-Light';
 src:local('Lato-Light'),
 url(./fonts/Lato-Light.ttf) format('truetype');
}

@font-face{
 font-family:'Lato-LightItalic';
 src:local('Lato-LightItalic'),
 url(./fonts/Lato-LightItalic.woff2) format('woff2');
}


@font-face{
 font-family:'Lato-Regular';
 src:local('Lato-Regular'),
 url(./fonts/Lato-Regular.woff2) format('woff2');
}

@font-face{
 font-family:'Roboto-Light';
 src:local('Roboto-Light'),
 url(./fonts/Roboto-Light.ttf) format('truetype');
}

@font-face{
 font-family:'Roboto-Regular';
 src:local('Roboto-Regular'),
 url(./fonts/Roboto-Regular.ttf) format('truetype');
}


.fade-enter-active,
.fade-leave-active {
  transition: all .4s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  /* transform: translateX(1300px) translateY(540px); */
  opacity: 0;
}

.moveleft-enter{
  opacity: 0;
  transform:translateX(900px);
}

/* .moveleft-leave,
.moveleft-enter-to{
  opacity:1;
  transform:translateX(0px);
} */

.moveleft-enter-active{
  transition: all .7s ease;
}

.moveleft-leave-active {
  transition: all .7s ease;
}

.moveleft-leave-to{
  opacity:0;
  transform:translateX(-900px)
}

</style>
