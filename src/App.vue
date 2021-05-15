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
  /* --image-theme-color: rgba(211, 190, 69, 0.85); */
  --image-theme-color:linear-gradient(to bottom right, hsl(120, 25%, 98%), hsla(226, 55%, 80%, 0.22));
  --menu-theme-color:linear-gradient(to bottom right, hsla(232, 29%, 95%, 0.5), hsla(232, 29%, 95%, 0.902));
  --image-primary-color:hsla(46, 84%, 17%, 0.994);
  --ship-list-theme-color: linear-gradient(to bottom right, hsl(120, 25%, 98%), hsla(226, 55%, 80%, 0.9));
  --component-background-theme:linear-gradient(to bottom right, hsla(232, 29%, 95%, 0.5), hsla(232, 29%, 95%, 0.902));
  /* --museum-blue:#091154;
  /* --image-theme-color: rgba(211, 190, 69, 0.85); */
  /* --image-theme-color:linear-gradient(to bottom right, hsl(120, 11%, 56%), hsla(120, 77%, 75%, 0.9)); */
  /* --menu-theme-color:linear-gradient(to bottom right, hsla(120, 27%, 100%,.1), hsla(120, 10%, 79%, 0.5)); */
  /* --image-primary-color:hsla(46, 84%, 17%, 0.994); */
  /* --ship-list-theme-color: linear-gradient(to bottom right, hsl(120, 3%, 45%), hsla(120, 77%, 75%, 0.9)); */
  /* --component-background-theme:linear-gradient(to bottom right, hsl(120, 11%, 56%), hsla(120, 77%, 75%, 0.9));  */
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
