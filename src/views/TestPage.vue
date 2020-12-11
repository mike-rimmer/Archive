<template>
  <div>
    <MillsQryFrm :about-registry="about" />
  </div>
</template>

<script>
import MillsQryFrm from '@/components/MillsQryFrm.vue'
export default {
  components: {
    MillsQryFrm,
  },
  data() {
    return {
      about: 'Registry Testing',
    }
  },
}
</script>

<style  scoped>
</style>
