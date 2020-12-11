<template>
<div>
 <div :record="record">
   <v-hover>
     <template v-slot="{hover}" >
      <v-card
       :elevation="hover ? 24 : 10"
        class="mx-auto pa-6 detailcard"
      >
      <h1 style="margin-bottom:1em;">Original Vessel Data</h1>
      <div>
          <p><span class="label">Vessel Name: </span>
          {{record.vesselName}}</p>
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
    </v-card>
     </template>
  </v-hover>

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
      width:425px;
      background-image:url("../assets/parchment1.jpg");
      margin:1em;
      padding:1em;
      line-height: 1em;
      border-radius:10px;
      box-shadow:5px 5px 5px rgba(20,20,20,.7);
     }

    .addendum{
      padding:1em;
      width:500px;
    }

    label{
      font-weight:bold;
    }

</style>
