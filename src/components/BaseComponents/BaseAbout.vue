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
      name="test"
      mode="out-in"
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <div
        v-if="show"
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
    showhelp:{
      type:Boolean,
      default:false
    }
    },

    data(){
      return{
       show:true,
       showdata:this.aboutdata,
       animatedData:'',
       showhint:this.showhelp
      }
    },

    computed:{
      animated(){
        return this.animatedData
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
       el.style.opacity=0
       el.style.transform="translateX(600px)"
       el.style.scale="scale(0)"

     },
     enter(el, done){
      gsap.to(el, {
        opacity:1,
        scale:1,
        x:0,
        duration:1,
        ease:'linear'
      },
      {complete:done}
      )
     },

     leave(el){
       gsap.to(el,{
         opacity:0,
         scale:0,
         x:-600,
         duration:1,
         ease:'linear'
       })
     }
   }

  }
</script>

<style scoped>
.pagelayout{

}

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
</style>
