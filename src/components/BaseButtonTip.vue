<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn :color="color" v-bind="attrs" v-on="on" @click="raiseClickEvent()">
        <v-icon :color="iconcolor">{{ icon }}</v-icon>
        {{ text }}
      </v-btn>
    </template>
    <span>{{ tooltip }}</span>
  </v-tooltip>
</template>
<script>
export default {
  name: 'BaseButtonTip',
  props: {
    text: { type: String, required: false, default: 'Search' },
    icon: { type: String, required: false, default: '' },
    color: { type: String, required: false, default: '' },
    iconcolor: { type: String, required: false, default: 'white' },
    tooltip: { type: String, required: false, default: 'This is a tooltip' },
    eventname: { type: String, required: false, default: 'clickclicky' },
  },
  methods: {
    raiseClickEvent() {
      this.$emit(this.eventname)
    },
  },
}
</script>

<style scoped></style>
