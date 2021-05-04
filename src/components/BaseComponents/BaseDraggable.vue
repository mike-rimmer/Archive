<template>
  <!-- DragStart and Drop event both add event.data.Transfer where we (set the id) of data we want to draf and get the same id of the data we want to drop -->
  <div>
    <div
      class="drop-zone"
      @drop="onDrop($event, 1)"
      @dragenter.prevent
      @dragover.prevent
    >
      <h2>Researcher's Selection</h2>
      <div
        v-for="item in getList(1)"
        :key="item.list"
        class="drag-el"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>

    <div
      class="drop-zone"
      @drop="onDrop($event, 2)"
      @dragenter.prevent
      @dragover.prevent
    >
      <h2>Send to Garbage</h2>

      <div
        v-for="item in getList(2)"
        :key="item.list"
        class="drag-el"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
        <button>Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
  export default {
    setup(){
      const items = ref ([
        {id:1, title: 'Item a', list: 1},
        {id:2, title: 'Item b', list: 1},
        {id:3, title: 'Item c', list: 1},
      ])

    const startDrag =(event, item) =>{
      console.log(item)
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'true'
      event.dataTransfer.setData('itemID', item.id)
    }

    const onDrop = (event, list) => {
      const itemID = event.dataTransfer.getData('itemID')
      const item = items.value.find((item)=> item.id == itemID)
      item.list = list
    }

    const getList = (list) =>{
      return items.value.filter((ele)=>  ele.list == list)
    }

    return { getList, startDrag, onDrop}
    }
  }
</script>

<style lang="css" scoped>
.drop-zone{
  width:50%;
  margin: 50px;
  background-color:#ecf0f1;
  padding:10px;
  min-height:10px;
}

.drag-el{
  background-color:#3498db;
  color:white;
  padding:5px;
  margin-bottom:10px;
}

.drag-el:nth-last-of-type(1){
  margin-bottom:0;
}

.lists{
  background-color:aqua;
}

</style>
