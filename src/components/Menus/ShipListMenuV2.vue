<template>
  <div class="layout">
    <v-toolbar
      dense
      bottom
      height="64"
      color="var(--museum-blue)"
    >
      <v-toolbar-title
        class="pl-10"
        color="var(--museum-blue)"
      >
        <img
          style="margin-left:10px;"
          class="logo d-none d-lg-flex"
          src="../../assets/images/museumlogo.svg"
          height="80"
          alt="Museum Logo"
          srcset=""
        >
      </v-toolbar-title>
      <v-row>
        <v-col
          cols="8"
          class="d-flex justify-end align-center"
        >
          <v-menu
            v-for="item in mainmenu"
            :key="item.id"
            transition="scale-transition"
            content-class="dropdown"
            offset-y
            open-on-hover
            class="d-flex justify-space-between"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-if="item.title ==='MUSEUM'"
                text
                v-bind="attrs"
                v-on="on"
              >
                <a
                  href="https://marmuseum.ca"
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
        </v-col>
        <v-spacer />
        <v-col cols="4">
          <div class="logoandtheme">
            <v-switch
              v-model="$vuetify.theme.dark"
              class="mt-5"
              dark
              inset
              label="Theme"
              persistent-hint
            />
            <span style="font-size:.6em; color:white; ">Ver 1.16 Dated: 10-04-2021</span>
          </div>
        </v-col>

        <!-- <v-btn
          style="background-color: var(--museum-blue); color: grey"
          @click="toggleTheme"
        >
          <v-icon color="white">
            mdi-contrast-circle
          </v-icon>
        </v-btn> -->
        <!-- class="d-flex justify-space-between orange" -->
      </v-row>
    </v-toolbar>
  </div>
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
            {id:'1.1', title:'Archives', route:'/collections/archives'},
            {id:'1.2', title:'Artifacts', route:'/collections/artifacts'},
            {id:'1.3', title:'Biblio', route:'/collections/biblio'},
            {id:'1.4', title:'Library', route:'/collections/library'},
            {id:'1.5', title:'Pictorials', route:'/collections/pictorial'},
            {id:'1.6', title:'DSerials', route:'/collections/dserial'},
          ],
        },
        {
          id: 2,
          title: 'ShipLists',
          route: '/',
          submenu: [
            { title: 'Home', route: '/' },
            {
              title: 'Canadian Registry',
              route: '/shiplists/crl',
            },
            {
              title: 'CSL List',
              route: '/shiplists/csl',
            },
            {
              title: 'Mills List',
              route: '/shiplists/mills',
            },
            {
              title: 'Ship Owners List',
              route: '/shiplists/sol',
            },
            {
              title: 'Wallace List',
              route: '/shiplists/wallace',
            },
            {
              // title: "Snyder's Schooner Days Index",
              title: "Sniders Index",
              route: '/shiplists/snider',
            },
            {
              title: 'Wallace Images',
              route: '/shiplists/images',
            },

            {
              // title: "Snyder's Schooner Days Index",
              title: 'Research Selection Cart',
              route: '/shiplists/cart',
            },
          ],
        },
        { id: 3, title: 'Library', route: '/library', submenu: [] },
        {
          id: 4,
          title: 'About',
          route: '/about',
          submenu: [
          { id: '4.1', title: 'Support', route: '/support' },
          { id: '4.2', title: 'Research Fees', route: '/support/fees' },

          ],
        },
        { id: 5, title: 'MUSEUM', route: 'https://marmuseum.ca', submenu: [] },
        // { id: 6, title: 'TEST', route: '/gsap', submenu: [] }
      ],
    }
  },
  methods: {
    toggleTheme() {
      // this.$vuetify.theme.themes.dark.anchor ='#41B883'
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>

<style scoped>

.layout{
  font-family:'Roboto-Regular', sans-serif;
}

.logo{
  margin-top:15px;
}

.logoandtheme{
  display:flex;
  justify-content:space-around;
  align-items:center;
  height:64px;
 background-color:var(--museum-blue);
}
.v-toolbar {
  padding: 0px !important;
}

v-list-item{
  font-family: 'Roboto-Regular', sans-serif;
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
  font-family:'Roboto-Regular', sans-serif;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
}

a:hover {
  color: grey !important;
}
</style>
