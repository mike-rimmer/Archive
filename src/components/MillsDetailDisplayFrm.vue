<template>
<div class="displayform" :detailData ="detailData">
<div
   v-for="record in detailData"
  :key="record.MillsNum"
  >
  <MillsDetailCard :record="record"></MillsDetailCard>
  </div>
</div>

</template>

<script>
import MillsDetailCard from '@/components/MillsDetailCard.vue';

export default {
  components: {
    MillsDetailCard,
  },
  data() {
    return {
      visible: false,
    };
  },
  props: {
    detailData: Array,
  },

  mounted() {

  },

};
</script>

<style scoped>
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}

.displayform{
    position:relative;
    display:flex;
    flex-wrap: wrap;
    border-radius:10px;
    margin-top:1em;
    padding: 0 1em 0 1em;
   }

    .label{
     font-size:1.1em;
     font-weight:bold;

    }

    @media(max-width: 800px) {
      .displayform{
        padding:0 .125em 0 .125em;
        justify-content:center;
      }
    }

</style>
