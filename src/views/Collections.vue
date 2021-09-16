<template>
  <div>
    <ResearchBase>
      <template v-slot:slotbody>
        <SearchForm />
      </template>
    </ResearchBase>
  </div>
</template>

<script>
 import ResearchBase from '@/components/BaseComponents/ResearchBasePage'
 import SearchForm from '@/components/GeneralSearch'
// import PlaceHolder from '@/components/BaseComponents/BasePlaceHolder'
export default {
  name: 'Collections',
  components:{
  ResearchBase,
  SearchForm,
}


}
</script>
