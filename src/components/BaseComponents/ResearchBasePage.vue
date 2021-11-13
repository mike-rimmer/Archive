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
        <slot name="body" />
      </div>


      <div class="slotfooter">
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


    },

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


</style>
