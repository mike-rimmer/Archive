<template>
  <div class="wrapper">
    <div class="navMenu">
      <button
        v-for="item in menu"
        :key="item.title"
        @click="item.submenuVisible = ! item.submenuVisible"
      >
        {{ item.title.toUpperCase() }}
        <div v-show="item.submenuVisible">
          <ul class="topmenu">
            <li
              v-for="submenu in item.children"
              :key="submenu.title"
              @click.stop=""
            >
              <router-link
                :to="submenu.route"
              >
                {{ submenu.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </button>
    </div>
    <img
      style="margin-right:6em;"
      class="logo"
      src="../assets/museumlogo.gif"
      height="75"
      width="150"
      alt="Museum Logo"
      srcset=""
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          title: 'ShipLists',
          submenuVisible: false,
          route: '/',
          children: [
            {
              visible: false,
              title: 'Canadian Registry List',
              route: '/CRL',
            },
            {
              visible: false,
              title: 'Canada Steamship Lines',
              route: '/CSL',
              children: [],
            },
            {
              visible: false,
              title: 'Mills',
              route: '/',
            },
            {
              visible: false,
              title: 'Ship Owners List',
              route: '/SOL',
            },
            {
              visible: false,
              title: 'Wallace',
              route: '/wallace',
            },
            {
              visible: false,
              title: "Snyder's Schooner Days Index",
              route: '/snyder',
            },
          ],
        },
        {
          title: 'Forged in Fire',
        },
        {
          title: 'Test Page',
        },
      ],
      showsubmenu: false,
    }
  },
}
</script>

<style scoped>
.wrapper{
  width:100vw;
  display:flex;
  justify-content: space-between;
  background-color:lightgray;
}

.navMenu {
  display: flex;
  align-items: flex-start;
  height:8vh;
  background-color:lightgray;
  color: black;
}

.topmenu {
  display: flex;
  position: fixed;
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
  color: black;
  text-decoration: none;
}

button {
  padding: 2px 5px;
  margin-left: 10px;
}
</style>
