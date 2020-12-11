<template>
  <BaseMessage :message="msg" />
</template>

<script>
import BaseMessage from '@/components/BaseMessage.vue'
export default {
  components: {
    BaseMessage,
  },
  data() {
    return {
      msg: 'Potential Page for Forged in Fire',
    }
  },
}
</script>

<style  scoped>
</style>
