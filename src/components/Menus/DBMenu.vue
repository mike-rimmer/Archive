<template>
  <v-card
    class="mx-auto"
    width="300"
  >
    <v-list>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Return</v-list-item-title>
      </v-list-item>

      <v-list-group
        :value="true"
        prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title>Ships Lists</v-list-item-title>
        </template>

        <v-list-group
          :value="true"
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Ship Lists</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in lists"
            :key="i"
            link
          >
            <v-list-item-title v-text="title" />

            <v-list-item-icon>
              <v-icon v-text="icon" />
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group
          no-action
          sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Actions</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon], i) in cruds"
            :key="i"
            link
          >
            <v-list-item-title v-text="title" />

            <v-list-item-icon>
              <v-icon v-text="icon" />
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data(){
      return{
          btns: [
        ['Ship Lists', '0'],
        ['Growth', 'lg'],
        ['Forged in Fire', 'b-xl'],
      ],
      colors: ['deep-purple accent-4', 'error', 'teal darken-1'],
      items: [...Array(4)].map((_, i) => `Item ${i}`),

        lists: [
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
      }
    }
  }
</script>

<style scoped>

</style>
