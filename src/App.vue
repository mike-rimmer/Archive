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
 font-family:'Lora-VariableFont_wght';
 src:local('Lora-VariableFont_wght'),
 url(./fonts/Lora-VariableFont_wght.ttf) format('truetype');
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

h1, h2, h3, h4, h5{
   font-family:'Roboto-Regular', sans-serif;
}

body{
  font-size:1em;
}

.v-application a {
  color: white;
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
