<template>
  <div class='home'>
    <v-card max-width='375'
    class='cols 12 col-sm-3"
    lightblue my-16'>
      <v-select
        v-model="activelist"
        :items = 'shiplistTitle'
        label = 'Please pick your Ship Registry'
      ></v-select>
    </v-card>
    <QueryFrm
      v-bind:ships = "shipnames"
      v-bind:years = "millsyears"
      v-bind:formTitle = 'activelist'
    ></QueryFrm>
  </div>
</template>

<script>
// @ is an alias to /src
// import QueryFrmMills from '@/components/QueryFrmMills.vue';

import QueryFrm from '@/components/QueryFrm.vue';

export default {
  components: {
    QueryFrm,

  },

  data() {
    return {
      activelist: 'Please Select Ship Registry',
      shiplistTitle: [
        'Canadian Registry List',
        'Canada Steamship Lines Fleet List',
        'Mills List',
        'Wallace List',
        'Ship Owners List',
      ],

      shiplistDesc: [
        'The Canadian Registry List',
        'Canada Steamship Lines - Old Ship Register',
        "The New Mills' List Registered Canadian Steamships 1817 - 1930 over 75 feet",
        'Wallace Ship List',
        'Ship Owners List',
      ],
      shipnames: [],
      millsyears: [],
    };
  },
  methods: {
    // getDataBase(db) {
    //   alert(`${db} Selected`);
    // },
    getMillsShipName() {
      fetch('http://localhost/phpRestArchive/serve/api/Mills/readshipnames.php')
        .then(
          (response) => response.json(),
        )
        .then(
          (data) => {
            this.shipnames = data;
            console.log('Mikey was here');
          },
        );
    },
  },
  created() {
    fetch('http://localhost/phpRestArchive/serve/api/Mills/readshipnames.php')
      .then(
        (response) => response.json(),
      )
      .then(
        (data) => {
          this.shipnames = data;
          console.log('Mikey was here');
        },
      );
    fetch('http://localhost/phpRestArchive/serve/api/Mills/getdates.php')
      .then(
        (response) => response.json(),
      )
      .then(
        (data) => {
          this.millsyears = data;
          console.log('Mikey was here');
        },
      );
  },
};
</script>
<style scoped>
.home{
  width:80%;
  margin:0 auto;
}
li:hover {
}
</style>
