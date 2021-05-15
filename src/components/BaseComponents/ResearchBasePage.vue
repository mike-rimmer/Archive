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

      <transition
        name="rbtest"
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <div
          class="slotbody"
          :class="{gray : isgray}"
        >
          <slot name="body" />
        </div>
      </transition>
      <div class="footer">
        <slot name="footer">
          <Footer />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>

  import Footer from '@/components/BaseComponents/BaseFooter'
  export default {
    name:'ResearchBasePage',
    components:{
      Footer,
    },
    props:{
      isgray:{
        type:Boolean,
        default:true
      }
    },

    methods:{
      beforeEnter(el){
       console.log(el)
      },

      enter(el){
        console.log(el)
      }
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

  .slotintro, .slotimage, .slotbody{
    width:90%;
    margin: 4em auto;
    height:auto;
  }

  .slotimages{
    display:flex;
    justify-content: center;

  }
  .gray{
    background-color:rgb(211, 209, 209);
  }

  .slotbody{
    padding:1em;
    min-height:320px;
    box-shadow: 5px 5px 5xp rgba(40,40,40, .7);
  }

</style>
