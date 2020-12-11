<template>
  <div class="registry">
    <v-card>
      <v-card-title>Select Registry</v-card-title>
      <v-select
        v-model="activelist"
        class="pl-4"
        :items="shiplistTitle"
        label="Ship Registry"
        @change="registryChange"
      />
    </v-card>
  </div>
</template>
<script>
import millsData from '@/data/datasource'

export default {
  data() {
    return {
      activelist: '',
      shiplistTitle: millsData.shipListsTitle,
    }
  },
  methods: {
    registryChange(selected) {
      this.$emit('registryChange', `${selected}`)
    },
  },
}
</script>

 <style  scoped>
.registry {
  position: relative;
  margin-top: 1em;
  /* border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(20, 20, 20, 0.5); */
}
</style>
