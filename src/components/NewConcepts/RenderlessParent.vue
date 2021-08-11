<template>
  <div>
    <Renderless v-model="parenttags">
      <template v-slot:default="{tags, removeTag, inputAttrs, inputEvents, addTags}">
        <div>
          <h1 style="margin-top:2em">
            Layout A
          </h1>
          <span class="tags-input-tag">
            <span
              v-for="tag in tags"
              :key="tag"
              class="siblings"
            >
              {{ tag }}
              <button
                type="button"
                class="tags-input-remove"
                @click="removeTag(tag)"
              >
                &times;
              </button>
            </span>
            <input
              class="tags-input-text"
              placeholder="Add tag..."
              style="border:solid 1px; background-color:white;"
              v-bind="inputAttrs"
              v-on="inputEvents"
            >
            <button
              type="button"
              @click="addTags()"
            >Add</button>
          </span>
        </div>
      </template>
    </Renderless>
  </div>
</template>


<script>
import Renderless from '@/components/NewConcepts/Renderless'
  export default {
    components:{
      Renderless
},
data(){
  return{
    parenttags:['Testing', 'Design']
  }
}

  }
</script>

<style lang="css" scoped>
 .tags-input-tag{
   display:flex;
   flex-direction: row;
   justify-content:left;
   width:60%;
   height:40px;
   margin:0 auto;
   color:white;
   background-color:grey;
 }

 .siblings{
   margin:auto;
 }
</style>
