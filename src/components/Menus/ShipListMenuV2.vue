<template>
  <v-toolbar
    dense
    bottom
    color="var(--museum-blue)"
    height="60"
  >
    <v-row justify-lg="space-around">
      <v-toolbar-title
        class="my-3 justify-start color var(--museum-blue)"
      >
        <span class="white--text">
          MARINE MUSEUM RESEARCH PORTAL
        </span>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-list
          v-for="item in mainmenu"
          :key="item.id"
          color="var(--museum-blue)"
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
        <v-row
          class="white--text ml-2 mt-4"
          align="center"
          justify="end"
        >
          <v-switch
            v-model="$vuetify.theme.dark"
            dark
            inset
            label="Theme"
            persistent-hint
          />
        </v-row>
        <!-- <v-btn
          style="background-color: var(--museum-blue); color: grey"
          @click="toggleTheme"
        >
          <v-icon color="white">
            mdi-contrast-circle
          </v-icon>
        </v-btn> -->
      </v-toolbar-items>
    </v-row>
  </v-toolbar>
</template>
        <script>
        export default {
          name: 'ShipListMenuV2',
        data() {
        return {
        abs:true,
        mainmenu: [
        { id: 0, title:'MUSEUM', route: 'https://marmuseum.ca', submenu:[]},
        { id: 1, title:'Collections', route: '/collections', submenu:[
            {id:'1.1', title:'Collections', route:'/collections'},
            {id:'1.2', title:'Artifacts', route:'/collections/artifacts'},
            {id:'1.3', title:'Archives', route:'/collections/archives'},
            {id:'1.4', title:'Photos', route:'/collections/photos'}
        ]},
        {id:2, title:'ShipLists', route:'/',
            submenu:[
            {title: 'Home',route: '/', },
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
            }
            ]
        },
        { id: 3, title: 'Library', route: '/library', submenu:[] },
        { id: 4, title: 'About',   route: '/about',   submenu:[] }
        ],
      }
    },
    methods:{
      toggleTheme(){
         this.$vuetify.theme.dark = !this.$vuetify.theme.dark

      }
    }
  }

</script>

<style scoped>
.v-toolbar{
  padding:0px ! important;
}


li{
list-style-type: none;
background-color:var(--museum-blue);
}

li a {
background-color:var(--museum-blue);
text-decoration: none;
/* color:black; */
}

a {
color:white !important;
text-decoration:none;
transition:all .500s ease-in-out
}

a:hover{
color:grey !important;
}


</style>

