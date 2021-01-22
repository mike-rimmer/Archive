<template>
  <v-card>
    <v-app-bar
      absolute
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="../assets/images/shipswheel.png"
      fade-img-on-scroll
      scroll-target="#scrolling-techniques-4"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        />
      </template>

      <v-app-bar-nav-icon />

      <v-toolbar-title>Welcome to the Maritime Museum of the Great Lakes </v-toolbar-title>

      <!-- <v-spacer />

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="yellow"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu> -->

      <template v-slot:extension>
        <ul>
          <li>
            <router-link :to="crlroute">
              Canadian Registry
            </router-link>
          </li>
          <li>
            <router-link :to="cslroute">
              Canada Steamship Lines
            </router-link>
          </li>
          <li>
            <router-link :to="millsroute">
              Mills
            </router-link>
          </li>
          <li>
            <router-link :to="solroute">
              Ship Owners List
            </router-link>
          </li>
          <li>
            <router-link :to="wallaceroute">
              Wallace
            </router-link>
          </li>
          <li>
            <router-link :to="snydersroute">
              Snyders Schooner Days Index
            </router-link>
          </li>
        </ul>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-4"
      class="overflow-y-auto"
      max-height="220"
    >
      <v-container style="height: 220px;" />
    </v-sheet>
  </v-card>
</template>
<script>
export default{
  components:{
  },
  data(){
    return{
      crlroute:'/CRL',
      cslroute:'/CSL',
      millsroute:'/',
      solroute:'/sol',
      snydersroute:'/snyder',
      wallaceroute:'/wallace',

    }
  }
}
</script>
<style scoped>
ul{
  display:flex;
}

a{
  text-decoration: none;
}

li{
  margin-right:2em;
  font-size:16px;
  list-style-type: none;
}
.v-application a{
  color:white;
}

</style>
