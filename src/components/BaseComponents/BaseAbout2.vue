<template>
  <div class="pagelayout">
    <transition
      name="drop"
      appear
    >
      <h3
        v-if="showhint"
      >
        <v-icon>mdi-arrow-left</v-icon>
        Just hover over a Card to the left to See more...
      </h3>
    </transition>

    <transition
      name="fade"
    >
      <div
        v-html="animated"
      />
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap'
  export default {

  props:{
    aboutdata:{
      type:String,
      default:''
    },
    showhint:{
      type:Boolean,
      default:false
    }
    },

    data(){
      return{

      }
    },

    computed:{
      animated(){
        return this.aboutdata
      },

      showPrompt(){
        return this.showhint
      }
     },



  watch:{
    aboutdata(old, newval){
    if( newval !== old){
      this.showhint=false
      this.show=false
      this.animatedData=old
      setTimeout(() => {
        // console.timeStamp('In timeout')
        this.show=true
      },500);
    // console.timeStamp('Outside timeout')
    }

    // console.log("In the Watch", newval)
    }
  },

  // mounted(){
  //   setTimeout(() => {
  //     this.showhint=true
  //   },500);
  // },

   methods:{
     beforeEnter(el){
       console.log('Enter')
       el.style.opacity=0
       el.style.transform="scale(0)"

     },
     enter(el, done){
       console.log('Mikey Enter')
      gsap.to(el, {
        opacity:1,
        scale:1,
        x:0,
        duration:3,
        ease:'bounce',
        onComplete:done
      })
     },


     afterEnter(){
       console.log('Mikey After Enter')
     },

     leave(el, done){
       console.log('Leave', el)
       gsap.to(el,{
        scale:0,
        opacity:.5,
        duration:3,
       onComplete:done
       })

     },

     afterLeave(){
       console.log('After Leave')
     }
   }

  }
</script>

<style scoped>
/* .pagelayout{

} */

 .drop-enter,
 .drop-leave-to{
   opacity:0;
   transform:translateY(-60px);
 }

.drop-leave-active{translate:all .4 ease-out;}
.drop-enter-active{
  animation: dropdown 1s ease-in-out;
}

@keyframes dropdown {
  0%  {opacity:.4; transform:translateY(-60px)}
  40% {opacity: 1; transform:translateY(0px)}
  50% {transform:translateX(-10px)}
  60% {transform:translateX(0px)}
  70% {transform:translateX(-20px)}
  80% {transform:translateX(0px)}
  90% {transform:translateX(-30px)}
  100% {transform:translateX(0)}
}

/* Animation Starting Point */

.test-enter{
  opacity:0;
  transform:translateX(600px);
}

.test-leave-to{
  transform:translateX(600px);
}

.test-enter-to{opacity:1; transform:translateX(0px)}

/* Timing for enter */
.test-enter-active{transition:all 1s ease-out }

/* Timing for leave */
.test-leave-active{transition:all 1s ease-in}


</style>
