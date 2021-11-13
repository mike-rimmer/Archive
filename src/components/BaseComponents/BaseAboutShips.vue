<template>
  <div class="pagelayout">
    <transition name="slide">
      <div
        v-if="show"
        v-html="aboutdata"
      />
    </transition>
  </div>
</template>

<script>
// import gsap from 'gsap'
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
       show:false,
       showdata:this.aboutdata,
       animatedData:'',
       showhelp: this.showhint
      }
    },


  // Creates a nice easy transition when new data is received
  watch:{
    aboutdata(old, newval){
    if( newval !== old){
      this.animatedData=old
      this.show=false
      setTimeout(()=>{this.show=true}, .001)
    }
    }
  },


   methods:{
  //    beforeEnter(el){
  //      console.log('Enter')
  //      el.style.opacity=0
  //      el.style.transform="scale(0)"
  //      console.log('beforeEnter')
  //    },
  //    enter(el, done){
  //      console.log('Enter')
  //     gsap.to(el, {
  //       opacity:1,
  //       scale:1,
  //       x:0,
  //       duration:3,
  //       ease:'bounce',
  //       onComplete:done
  //     })
  //    },


  //    afterEnter(){
  //      console.log('Mikey After Enter')
  //    },

  //    leave(el, done){
  //      console.log('Leave', el)
  //      gsap.to(el,{
  //       scale:0,
  //       opacity:.5,
  //       duration:3,
  //      onComplete:done
  //      })

  //    },

  //    afterLeave(){
  //      console.log('After Leave')
  //    }
  //  }

  }
  }
</script>

<style scoped>

.v-btn > .filter-select{
  background-color:#39947f;
  border-radius:5px;

}
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

.slide-enter{
  opacity:0;
  transform:translateX(600px);
}

.slide-leave-to{
  transform:translateX(600px);
}

.slide-enter-to{opacity:1;  transform:translateX(0px)}

/* Timing for enter */
.slide-enter-active{transition:all 1s ease-out }

/* Timing for leave */
.slide-leave-active{transition:all 1s ease-in}



</style>
