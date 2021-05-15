<template>
  <div class="wrapper">
    <div
      class="navMenu"
    >
      <ul class="topmenu">
        <li
          v-for="item in menu"
          :key="item.title"
        >
          <router-link
            :to="item.route"
          >
            {{ item.title }}
          </router-link>
        </li>
        <a
          class="pa-0 ml-10"
          href="http://www.marmuseum.ca"
        ><p>Museum</p></a>
      </ul>

      <div style="display:flex; align-items:center; justify-content:end">
        <img
          style="margin-right:6em;"
          class="logo"
          src="../../assets/images/museumlogo.svg"
          height="80"
          alt="Museum Logo"
          srcset=""
        >
        <span style="font-size:.6em; margin-right:4em; margin-top:4em">Ver 1.4 Dated:04-29-2021</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
              {
                visible: false,
                title: 'Home',
                route: '/',
              },
              {
                visible: false,
                title: 'Canadian Registry List',
                route: '/crl',
              },
              {
                visible: false,
                title: 'Canada Steamship Lines',
                route: '/csl',
                children: [],
              },
              {
                visible: false,
                title: 'Mills',
                route: '/mills',
              },
              {
                visible: false,
                title: 'Ship Owners List',
                route: '/sol',
              },
              {
                visible: false,
                title: 'Wallace',
                route: '/wallace',
              },
              {
                visible: false,
                // title: "Snyder's Schooner Days Index",
                title: "Snider's Index",
                route: '/snider',
              },

              {
                visible: false,
                // title: "Snyder's Schooner Days Index",
                title: "Research Selection Cart",
                route: '/detail',
              },
              // {
              //   visible: false,
              //   title: "Museum",
              //   route: 'https://www.marmuseum.ca',
              // }
              ]
        }
  },
  hideShipSubMenu(){
    this.menu.submenuVisible = false
  }
}

</script>

<style scoped>
.wrapper{
  font-family:'Lato-LightItalic';
  font-size:1.1em;
  font-kerning:.4em;
  width:100vw;
  display:flex;
  justify-content: space-between;
  background-color:lightgray;
}

.navMenu {
  display: flex;
  align-items: center;
  height:10vh;
  background-color:lightgray;
  color: black;
}

.topmenu {
  display: flex;
  /* position: fixed; */
  list-style: none;
  list-style-type: none;
  padding: 2px 4px;
  margin-top: 0px;
  z-index: 100;
  color: white;
}

.topmenu li {
  margin-left: 30px;
  /* display: none; */
}

li a {
  color: black;  text-decoration: none;
}

a {
  color:black  !important;
  text-decoration:none;
  transition:all .500s ease-in-out
}

a:hover{
  color:white !important;
}

button:hover{
  color:white;
}

button {
  color:black;
  padding: 2px 5px;
  margin-left: 10px;
  transition:all .500s ease-in-out
}
</style>
