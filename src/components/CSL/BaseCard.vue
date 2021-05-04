<template>
  <div
    v-if="!showThumbNail"
    class="detailcard"
  >
    <p
      v-for="(value, key, index ) in record"
      :key="key"
    >
      <span
        v-show="value"
        style="font-weight:bold;"
      >
        {{ key }}:
      </span>
      {{ value }}
      <span v-if="index % 8 == 0">
        <hr>
      </span>
    </p>
  </div>
  <div
    v-else
    class="thumbnail"
  >
    <p
      v-for="(value, key, index ) in record"
      :key="key"
    >
      <span
        v-show="value"
        style="font-weight:bold;"
      >
        {{ key }}:
      </span>
      {{ value }}
      <span v-if="index % 8 == 0">
        <hr>
      </span>
    </p>
    <img
      src="../../assets/images/cayuga.jpg"
      alt="Cayuaga"
      width="200"
    >
  </div>
</template>

<script>
  // import cayuga from '../../assets/images/cayuga.jpg'
  export default {
    name:'BaseCard',

  props: {
    record: {
      type: Object,
      required: true,
      default: () => {},
    },

    // left:{
    //   type:Number,
    //   required:true,
    // },

    // top:{
    //   type:Number,
    //   required:true,
    // }
  },

  data(){
    return{
    //  image: cayuga,
     showThumbNail : true
    }
  },



  }
</script>

<style scoped>
.thumbnail{
  box-sizing: border-box;
  color:black;
   /* background: linear-gradient(
    to bottom right,
    rgba(116, 162, 223, 0.9),
    rgba(43, 98, 160, 0)
    ); */
  background-color:rgba(107, 134, 145, 0.72);
  backdrop-filter:blur(4px);
  background-size: cover;
  padding: 1em;
  font-size:.8em;
  line-height: 1em;
  width: 200px;
  max-height:70vh;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 2px rgba(20, 20, 20, 0.5);
  overflow:auto ;
  margin: 1em;
}

.detailcard {
  box-sizing: border-box;
  color:black;
   background: linear-gradient(
    to bottom right,
    rgba(116, 162, 223, 0.9),
    rgba(43, 98, 160, 0)
    );
  background-color:rgba(107, 134, 145, 0.72);
  backdrop-filter:blur(4px);
  background-size: cover;
  padding: 1em;
  font-size:.8em;
  line-height: 1em;
  width: 500px;
  max-height:60vh;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 2px rgba(20, 20, 20, 0.5);
  overflow:auto ;
  margin: 2em;
  }


.label {
  font-weight: bold;
}
hr {
  margin-bottom: 0.5em;
}

.btnchoice {
  display: flex;
  justify-content: space-around;
}

.btnchoice > button {

  margin: 0.5em;
  padding: 0.5em 1em 0.5em 1em;
  color: rgb(56, 43, 9);
}


ul {
  margin-bottom: 0.5em;
  list-style-type: none;
}

.popup-enter-active,
.popup-leave-active {
  transition: all 0.5s ease;
}

.popup-enter,
.popup-leave-to {
  transform: scale(0);
  opacity: 0;
}

@media (max-width: 800px) {
  .detailcard {
    margin: 0em 0.25em 1.5em 0.25em;
    padding: 0.4em;
  }
}
</style>
