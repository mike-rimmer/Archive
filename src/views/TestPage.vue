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
      msg: 'This is a Page to be used for Testing!',
    }
  },
}
</script>

<style  scoped>
</style>
