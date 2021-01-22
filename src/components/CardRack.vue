<template>
  <div>
    <v-sheet
      height="200"
      width="100vw"
      color="white"
      style="padding:1em"
    >
      <h3>Vessels of Interest</h3>
      <v-row
        class="color white"
        align="center"
      >
        <div
          v-for="item in cart"
          :key="item.id"
        >
          <v-fade-transition>
            <MiniDetailCard
              :record="item"
            />
          </v-fade-transition>
        </div>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
// import {mapState} from 'vuex'
import MiniDetailCard from '@/components/MiniDetailCard2';
  export default {
    name:'CardRack',
    components:{
      MiniDetailCard
    },
    props:{
      cart:{
        type:Array,
        default: ()=>{
          return {}
        },
        required:true,
      }
    },
    computed:{

    }

  }
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  transform: scale(0);
  opacity: 0;
}
</style>
