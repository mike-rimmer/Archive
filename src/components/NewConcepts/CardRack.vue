<template>
  <div>
    <v-sheet
      height="250"
      width="100vw"
      class="glasslook"
      style="padding:1em"
    >
      <h3>Vessels of Interest</h3>
      <v-row

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
 .glasslook{
   /* background: linear-gradient(
    to right bottom,
    rgba(247, 248, 247, .10),
    rgba(252, 255, 252, .10)
    ); */
   backdrop-filter: blur(4px);
 }

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
