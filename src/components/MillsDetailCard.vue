<template>
 <div class="detailcard" :record="record">
      <h3 style="margin-bottom:1em;">Original Vessel Data</h3>
      <hr>
      <div>
          <p><span class="label">Vessel Name: </span>
          <p>{{record.vesselName}}</p>
          <p><span class="label">Vessel Date: </span>
          {{record.vesselDate}}</p>
          <p><span class="label">MillsNum: </span>
          {{record.MillsNum  }}</p>
          <p><span class="label">Propulsion: </span>
          {{record.Propulsion}}</p>
          <p><span class="label">Official Num: </span>
          {{record.OfficialNum}}</p>
          <p><span class="label">Dimensions: </span>
          {{record.dimensions}}</p>
          <p><span class="label">Where Built: </span>
          {{record.whereBuilt}}</p>
          <p><span class="label">Built Date: </span>
          {{record.builtDate}}</p>
          <p><span class="label">Date Closed: </span>
          {{record.dateClosed}}</p>
          <p><span class="label">Reason Closed: </span>
          {{record.reasonClosed}}</p>
          <p><span class="label">PlaceClosed: </span>
          {{record.placeClosed}}</p>

          <BaseButton
          state1 ="Hide Addendum"
          state2 ="See Addendum"
          v-on:hide = "visible = !visible"
          >
          </BaseButton>

          <Addendum v-show="visible">
            <template slot ="body">
            {{record.addendum}}
            </template>
          </Addendum>
    </div>
    </div>
</template>

<script>
import Addendum from '@/components/Addendum.vue';
import BaseButton from '@/components/BaseButton.vue';

export default {
  data() {
    return {
      visible: false,
    };
  },
  components: {
    Addendum,
    BaseButton,
  },

  props: ['record'],

};
</script>

<style scoped>

 .detailcard{
   position:relative;
      width:auto;
      background-image:url("../assets/parchment1.jpg");
      margin:1em;
      padding:1em;
      line-height: 1em;
      border-radius:10px;
      box-shadow: 5px 5px 10px 2px rgba(20,20,20,.5);
      z-index:100
     }

    .addendum{
      padding:1em;
      width:500px;
    }

    .label{
      font-weight:bold;
    }
    hr{
      margin-bottom:1em;
    }

  @media(max-width: 800px) {
  .detailcard{
    margin:0em .25em 1.5em .25em;
    padding:.4em;
  }

}
</style>
