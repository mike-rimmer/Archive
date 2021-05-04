<template>
  <div>
    <button @click="previous">
      <slot name="previouspage">
        ⬅️Previous Page
      </slot>
    </button>
    <button @click="next">
      <slot name="nextpage">
        Next Page ➡️
      </slot>
    </button>
  </div>
</template>
<script>
export default {
  methods: {
    previous() {
      console.log('Previous Page')
      // fetch previous page in result set
    },
    next() {
      console.log('Next Page')
      // fetch next page in result set
    },
    //more code and logic for pagination
  },
}
</script>
