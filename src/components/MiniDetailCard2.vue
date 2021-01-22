<template>
  <div>
    <div
      style="position:relative"
      class="d-print-none"
    >
      <v-hover
        v-slot="{ hover }"
        open-delay="200"
        close-delay="200"
      >
        <v-card
          :elevation="hover ? 16 : 2"
          color="hover ? color grey lighten-1 : color grey lighten-2"
          :class="{'on-hover': hover}"
          class="pa-4"
          height="150px"
          width="250px"
        >
          <div style="line-height:.6em">
            <p><b>DataBase:</b> {{ localrecord.DB }}</p>
            <p><b>Ship:</b> {{ localrecord.Vessel }}</p>
            <p><b>Mills #:</b> {{ localrecord.MillsNum }}</p>
            <p><b>Id:</b> {{ localrecord.RecordId }}</p>
          </div>
          <v-divider class="mb-2" />

          <v-row justify="space-around d-print-none">
            <v-btn
              color="blue-grey lighten-3"
              x-small
              @click="removeItem"
            >
              <v-icon small>
                mdi-delete
              </v-icon>
            </v-btn>
            <v-btn
              color="blue-grey lighten-3"
              x-small
              @click="printCard"
            >
              <v-icon small>
                mdi-printer
              </v-icon>
            </v-btn>
          </v-row>
        </v-card>
      </v-hover>
    </div>
    <div
      v-show="show"
      :id="vessel"
      class="detailcard elevation-6 mills1 d-print-block  pa-4"
    >
      <h3 style="text-align:center; margin-bottom:0px">
        With the Compliments of
      </h3>
      <h3 style="text-align:center;">
        the <br>Marine Musuem of the Great Lakes at Kingston
      </h3>
      <p
        v-for="(value, key, index ) in localrecord"
        :key="key"
      >
        <span
          v-show="value"
          style="font-weight:bold;"
        >
          {{ key }}:
        </span>

        {{ value }}

        <span v-if="index % 8 == 0">
          <hr>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
// import Bus from '../services/Bus'
  export default {
  props:{
    record:{
      type:Object,
      default:() =>{
        return {Name1:"Assiniboia", id:"5519"}
      },
      required: true,
  }
  },
  data(){
    return{
     localrecord: this.record,
     vessel:this.record.vessel,
     show:false,
    }
  },
  methods:{
    removeItem(){
      switch(this.record.DB){
        case 'Wallace':
          this.$store.dispatch('removeItemFromWallaceCart', this.record)
        break;
        case 'Mills':
          this.$store.dispatch('removeItemFromMillsCart', this.record)
        break;
        default:
      }
    },

    printCard(){
      this.show=!this.show
      this.$htmlToPaper('toPrint')
    }
  }
  }
</script>

<style scoped>
.v-card{
  margin:.5em;
}

.v-card.on-hover.theme--dark{
  background-color: rgba(#FFF, 0.8)
}

</style>
