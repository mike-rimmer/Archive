<template>
  <div>
    <slot name="banner">
      <div class="banner" />
    </slot>

    <div class="pagelayout">
      <div class="slotintro">
        <slot name="intro" />
      </div>

      <div class="slotimage">
        <slot name="images" />
      </div>


      <div
        class="slotbody"
      >
        <slot name="slotbody" />
      </div>


      <div class="footer">
        <slot name="footer">
          <Footer />
        </slot>
      </div>
    </div>
  </div>
</template>

<script >

  import Footer from '@/components/BaseComponents/BaseFooter'
  export default {
    name:'ResearchBasePage',
    components:{
      Footer,
    },
    props:{
      isgray:{
        type:Boolean,
        default:false
      },

      showSlot:{
        type:Boolean,
        default:false
      }
    },

    // beforeEnter(el){
    //    el.style.opacity=0
    //    el.style.transform="translateX(600px)"
    //    el.style.scale="scale(0)"

    //  },

  //  enter(el, done){
  //     gsap.to(el, {
  //       opacity:1,
  //       scale:1,
  //       x:0,
  //       duration:1,
  //       ease:'linear'
  //     },
  //     {complete:done}
  //     )
  //    },

  //    leave(el){
  //      gsap.to(el,{
  //        opacity:0,
  //        scale:0,
  //        x:-600,
  //        duration:1,
  //        ease:'linear'
  //      })
    //  }






    methods:{
      // beforeEnter(el){
      //  console.log(el)
      //   el.style.opacity =0
      //   el.style.transform="scale(0)"
      //   console.log('Before Event')
      //  },



      // enter(el){
      //   gsap.to(el,{
      //     opacity:1,
      //     scale:1,
      //     duration:1,
      //     backgroundColor:'grey'

      //   })
      // },

      // enter(el){
      //   console.log('Enter')
      //   var tl = gsap.timeline()
      //   tl.from(el,{opacity:0, scale:0, duration:1, backgroundColor:'grey'})
      //   .to(el, {scale:.9, backgroundColor:'plum', duration:.5},"+=0.5")
      // },



      // afterEnter(el){
      //    console.log('After Enter', el)
      //    gsap.to(el, {
      //      delay:1,
      //      scale:.9,
      //     backgroundColor:'plum',
      //      duration:.5,
      //    })
      // },

      // beforeLeave(el){
      //    console.log('Before Leave', el)
      //    gsap.to(el,{
      //      backgroundColor:'plum',
      //      scale:1,
      //    })
      // },

      // leave(el){
      //   console.log('Leave',el)
      //   var tl = gsap.timeline()
      //   tl.to(el,{duration:.9, opacity:0, scale:0})
      // },

      // afterLeave(el){
      //    console.log('After Leave',el)
      // }

    }
  }
</script>

<style lang="css" scoped>

.banner{
  height:400px;
  width:auto;
  background-image: url('../../assets/images/gleniffer.png');
  background-size:100% auto;
  background-position: 10% 57%;
  object-fit:cover;
  margin-bottom:2em;
}

  h3{
    color:#39947f;
  }

  .slotintro, .slotimage, .slotgray, .slotbody{
    width:90%;
    margin: 4em auto;
    }

  .slotimages{
    display:flex;
    justify-content: center;
  }




 /* .rbtest-enter{transform:scale(0); opacity:0; background-color:white}
 .rbtext-enter-to{transform:scale(1);opacity:1; }
 .rbtest-enter-active{transition: all 1s ease-in-out}

 .rbtest-leave-to{transform:scale(0); opacity:0;background-color:white}
 .rbtest-leave-active{transition: all 1s ease-in-out} */

</style>
