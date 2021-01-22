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
      msg: 'This is page is for Canada Steamship Lines',
    }
  },
}
</script>

<style  scoped>
</style>
