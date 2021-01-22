<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>
        Awesome Shop
      </v-toolbar-title>
      <v-spacer />

      <span class="hidden-sm-and-up">
        <v-btn @click="drawer=!drawer">Menu</v-btn>
      </span>

      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          text
        >
          <v-icon
            small
            left
          >
            fa-{{ item.icon }}
          </v-icon>
          {{ item.tile }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>
              fa-{{ item.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    name:'ScrimNB',
    data(){
      return {
        drawer: false,
        items:[
          {title: 'Home', link:'/', icon:  "home"},
          {title: 'Store', link:'store', icon:  "shopping-basket"},
          {title: 'Cart', link:'cart', icon:  "shopping-cart"},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
