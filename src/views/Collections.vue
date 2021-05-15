<template>
  <div>
    <ResearchBase>
      <template v-slot:body>
        <SearchForm />
      </template>
    </ResearchBase>
  </div>
</template>

<script>
 import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
 import SearchForm from '@/components/SearchForm'
// import PlaceHolder from '@/components/BaseComponents/BasePlaceHolder'
export default {
  name: 'Collections',
  components:{
  ResearchBase,
  SearchForm
  // PlaceHolder
}


}
</script>
