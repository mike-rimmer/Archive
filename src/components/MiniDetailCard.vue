<template>
  <div style="position:relative">
    <v-card
      elevation="7"
      color="color grey lighten-2"
      height="150px"
      width="250px"
      class="pa-4"
    >
      <div style="line-height:.6em">
        <p><b>DataBase:</b> {{ record.DB }}</p>
        <p><b>Ship:</b> {{ record.Vessel }}</p>
        <p><b>Mills #:</b> {{ record.MillsNum }}</p>
        <p><b>Id:</b> {{ record.RecordId }}</p>
      </div>
      <v-divider class="mb-2" />

      <v-row justify="space-around">
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
      let w = window
      w.print(this.record)
      console.log(this.record)

    }
  }
  }
</script>

<style scoped>
.v-card{
  margin:.5em;
}


</style>
