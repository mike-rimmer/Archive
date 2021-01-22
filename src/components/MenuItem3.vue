<template>
  <div
    class="menu"
  >
    <div class="nav">
      <ul>
        <!-- <v-hover> -->
        <li
          v-for="item in items"
          :key="item.title"
        >
          <router-link
            :to="item.route"
          >
            {{ item.title }}
          </router-link>
        </li>
        <!-- </v-hover> -->
      </ul>
    </div>
    <div class="logo">
      <img
        src="../assets/museumlogo.gif"
        height="75"
        width="150"
        alt="Museum Logo"
        srcset=""
      >
    </div>
  </div>
</template>

<script>
export default {
  component: {},
  props: {
    items: {
      type: Array,
      default() {
        return [
          { title: 'Mills Ships', icon: 'home', route: '/' },
          { title: 'Canadian Registry', icon: 'home', route: '/CRL' },
          { title: 'Canada Steamship Lines', icon: 'home', route: '/CSL' },
          { title: 'Ship Owners List', icon: 'home', route: '/SOL' },
          { title: 'Wallace', icon: 'home', route: '/wallace' },
          {
            title: 'Snyders Schooner Days Indexs',
            icon: 'home',
            route: '/snyder',
          },
          { title: 'Forged in Fire', icon: 'folder', route: '/forged' },
          { title: 'Growth', icon: 'folder', route: '/growth' },
          { title: 'Test', icon: 'test', route: '/test' },
        ]
      },
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.menu {
  display: flex;
  flex-wrap: wrap;
  padding: 1em 0 1em 0;
  color: black;
  justify-content: space-between;
  box-shadow: 0px 5px 5px 5px rgba(20, 20, 20, 0.7);
}

.nav {
  align-self: center;
}
ul {
  align-items: center;
  list-style-type: none;
  color: black;
  display: flex;
  justify-content: flex-start;
  /* max-width:300px; */
}

.logo {
  margin-right: 3em;
}

li {
  margin-right: 1em;
}

a {
  color: black;
  text-decoration: none;
  transition: all 2 ease-in-out !important;
}

a:hover {
  transform: scale(1.5) !important;
  color: lightgray !important;
}

@media (max-width: 800px) {
  .nav,
  .logo {
    flex: 100%;
  }
}

/* https://markus.oberlehner.net/blog/vue-router-page-transitions/ */
</style>
