<template>
  <v-toolbar
    dense
    bottom
    height="64"
    class="d-flex justify space-between purple"
  >
    <v-toolbar-title
      class="pl-10 color pink "
    >
      <span class="white--text">
        RESEARCH PORTAL
      </span>
    </v-toolbar-title>


    <v-toolbar-items
      class="d-flex justify-space-around"
    />
    <v-list
      v-for="item in mainmenu"
      :key="item.id"
      class="d-flex justify-space-around align-center color red"
    >
      <v-menu
        content-class="dropdown"
        offset-y
        open-on-hover
        dark
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-if="item.title ==='MUSEUM'"
            text
            v-bind="attrs"
            v-on="on"
          >
            <a
              href="http://marmuseum.ca"
            >{{ item.title }}</a>
          </v-btn>
          <v-btn
            v-else
            text
            v-bind="attrs"
            v-on="on"
          >
            <router-link
              :to="item.route"
            >
              {{ item.title }}
            </router-link>
            <v-icon
              v-show="item.submenu.length>0"
              right
              color="white"
            >
              mdi-chevron-down
            </v-icon>
          </v-btn>
        </template>
        <v-list
          v-if="item.submenu.length > 0"
          color="var(--museum-blue)"
        >
          <v-list-item
            v-for="(sub, index) in item.submenu"
            :key="index"
          >
            <router-link
              :to="sub.route"
            >
              {{ sub.title }}
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-list>
    <div
      class="class= d-flex align-center justify-space-between brown"
    >
      <v-switch
        v-model="$vuetify.theme.dark"
        class="mt-5 mx-5"
        dark
        inset
        label="Theme"
        persistent-hint
      />

      <img
        style="margin-left:10px;"
        class="logo"
        src="../../assets/images/museumlogo.svg"
        height="70"
        alt="Museum Logo"
        srcset=""
      >
      <span style="font-size:.6em; color:white; ">Ver 1.4 Dated:05-13-2021</span>
    </div>
    </v-toolbar-items>
    <!-- <v-btn
          style="background-color: var(--museum-blue); color: grey"
          @click="toggleTheme"
        >
          <v-icon color="white">
            mdi-contrast-circle
          </v-icon>
        </v-btn> -->
    <!-- class="d-flex justify-space-between orange" -->
  </v-toolbar>
</template>
<script>
export default {
  name: 'ShipListMenuV2',
  data() {
    return {
      abs: true,
      mainmenu: [
        {
          id: 1,
          title: 'Collections',
          route: '/collections',
          submenu: [
            // {id:'1.1', title:'Collections', route:'/collections'},
            // {id:'1.1.5', title:'Support', route:'/collections/support'},
            // {id:'1.2', title:'Artifacts', route:'/collections/artifacts'},
            // {id:'1.3', title:'Archives', route:'/collections/archives'},
            // {id:'1.4', title:'Photos', route:'/collections/photos'}
          ],
        },
        {
          id: 2,
          title: 'ShipLists',
          route: '/',
          submenu: [
            { title: 'Home', route: '/' },
            {
              title: 'Canadian Registry List',
              route: '/shiplists/crl',
            },
            {
              title: 'Canada Steamship Lines',
              route: '/shiplists/csl',
            },
            {
              title: 'Mills',
              route: '/shiplists/mills',
            },
            {
              title: 'Ship Owners List',
              route: '/shiplists/sol',
            },
            {
              title: 'Wallace',
              route: '/shiplists/wallace',
            },
            {
              // title: "Snyder's Schooner Days Index",
              title: "Snider's Index",
              route: '/shiplists/snider',
            },

            {
              // title: "Snyder's Schooner Days Index",
              title: 'Research Selection Cart',
              route: '/shiplists/detail',
            },
          ],
        },
        { id: 3, title: 'Library', route: '/collections/library', submenu: [] },
        {
          id: 4,
          title: 'About',
          route: '/about',
          submenu: [{ id: '4.1', title: 'Support', route: '/support' }],
        },
        { id: 0, title: 'MUSEUM', route: 'https://marmuseum.ca', submenu: [] },
      ],
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>

<style scoped>
.v-toolbar {
  padding: 0px !important;
}

li {
  list-style-type: none;
  background-color: var(--museum-blue);
}

li a {
  background-color: var(--museum-blue);
  text-decoration: none;
  /* color:black; */
}

a {
  color: white !important;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
}

a:hover {
  color: grey !important;
}
</style>
