<template>
  <ResearchBase>
    <template v-slot:images>
      <div class="imglayout">
        <img
          src="../assets/images/constructionpage.png"
        >
      </div>
    </template>
  </Researchbase>
</template>

<script>
import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
  export default {
    components:{
      ResearchBase
    },

    data(){
      return{

      }
    }

  }
</script>

<style scoped>


.imglayout{
  width:60%;
  transform:translate(24%, 0%);
}

img{
  object-fit: cover;
}
</style>
