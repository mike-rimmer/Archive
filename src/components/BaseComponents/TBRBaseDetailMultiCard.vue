<template>
  <div v-show="display">
    <div class="card1" />
    <div class="card2" />
    <div class="card3" />
    <div class="card4" />
    <div class="card5" />
    <div
      class="detailcardlayout"
    >
      <div class="textside">
        <section
          v-for="(value, key ) in record"
          :key="key"
        >
          <p
            v-show="key!= 'Comments'"
          >
            <span
              v-show="value"
              style="font-weight:bold;"
            >
              {{ key }}:
            </span>
            {{ value }}
            <span
              v-if="key.match(/Section*/)"
            >
              <hr style="width:90%; margin: 10px auto;">
            </span>
          </p>
        </section>
      </div>

      <div class="commentsarea">
        <section
          v-for="(value, key, index ) in record"
          :key="key"
        >
          <p
            v-show="key == 'Comments'"
            style="font-size:1.2em;
                line-height:1.4em"
          >
            <span
              v-show="value"
              style="font-weight:bold; "
            >
              {{ key }}:
            </span>
            {{ value }}
            <span v-if="index % 8 == 0">
              <hr>
            </span>
          </p>
        </section>

        <footer style="text-align:center;" />
      </div>

      <div class="imageside">
        <img
          v-show="showThumbNail"
          :src="imgsrc"
          alt="Cayuaga"
          width="100%"
        >
      </div>
    </div>
  </div>
</template>

<script>
  // import cayuga from '../../assets/images/cayuga.jpg'
  import { mapState, mapGetters } from 'vuex'
  export default {
    name:'BaseCard',

    props: {
    // record: {
    //   type: Object,
    //   required: true,
    //   default: () => {},
    // },

    imgsrc:{
      type:String,
      required:true,
      default:"../../assets/images/cayuga.jpg"
    }

  },

    data(){
      return{
      //  image: cayuga,
       showThumbNail : true,
       display:true
      }
    },


  computed:{
    ...mapState('CSL',['CSLDetailCart']),
    ...mapGetters('CSL', ['activeDetails']),

    record(){
      const temp = this.activeDetails
      return temp
    }

  },

  }
</script>

<style scoped>

.card1{
  position: absolute;
  width: 624px;
  height: 800px;
  left: 810px;
  top: -20px;
 background:var(--component-background-theme);
 box-shadow: 5px 5px 10px 2px rgba(20, 20, 20, 0.5);
  border-radius: 20px;
  transform: rotate(90.12deg);
}
.card2{
  position: absolute;
  width: 624px;
  height: 800px;
   left: 800px;
  top: -10px;
 background:var(--component-background-theme);
 box-shadow: 5px 5px 10px 2px rgba(20, 20, 20, 0.5);
  border-radius: 20px;
  transform: rotate(90.12deg);
}
.card3{
  position: absolute;
  width: 624px;
  height: 800px;
   left: 790px;
  top: 0px;
 background:var(--component-background-theme);
 box-shadow: 5px 5px 10px 2px rgba(20, 20, 20, 0.5);
  border-radius: 20px;
  transform: rotate(90.12deg);
}
.card4{
  position: absolute;
  width: 624px;
  height: 800px;
  left: 780px;
  top: 10px;
 background:var(--component-background-theme);
  box-shadow: 5px 5px 10px 2px rgba(20, 20, 20, 0.5);
  border-radius: 20px;
  transform: rotate(90.12deg);
}
.card5{
  position: absolute;
  width: 624px;
  height: 800px;
  left: 770px;
  top: 20px;
 background:var(--component-background-theme);
  box-shadow: 5px 5px 10px 2px rgba(20, 20, 20, 0.5);
  border-radius: 20px;
  transform: rotate(90.12deg);
}


.detailcardlayout {
  display:grid;
  grid-template-columns: 50%  50%;
  grid-template-rows:auto;
  grid-template-areas:
  'txt photo'
  'cmts cmts'
  ;
  box-sizing: border-box;
  color:black;
   /* background: linear-gradient(
    to bottom right,
    rgba(116, 162, 223, 0.9),
    rgba(43, 98, 160, 0)
    ); */
  /* background: linear-gradient(180deg, #8ED5E2 0%, #6FB0E1 100%); */
  background:var(--component-background-theme);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  /* background-color:rgb(140,217,140); */
  backdrop-filter:blur(4px);
  background-size: cover;
  padding: 2em 1em 2em 1em;
  font-size:.8em;
  line-height: 1em;
  position:relative;
  left:0px;
  width: 790px;
  height:66vh;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 2px rgba(20, 20, 20, 0.5);
  overflow:auto ;
    }

  /* .vl {
  border-left: 2px solid lightgray;
  height: 70vh;
  grid-area:vr;
} */


  .textside{
    grid-area:txt;
  }

  .imageside{
    grid-area:photo;
    padding:0em 2em;
  }

  .commentsarea{
    grid-area :cmts
  }

  .imageside > img{
    border-radius: 10px;
    margin:1em;
    box-shadow: 5px 5px 10px 2px rgba(20, 20, 20, 0.5);
    object-fit: cover;
  }



/* .label {
  font-weight: bold;
} */

hr {
  margin-bottom: 0.5em;
}

.btnchoice {
  display: flex;
  justify-content: space-around;
}

footer > button {
  margin: 0 auto;
  padding: 0.5em 1em 0.5em 1em;
  color: rgb(56, 43, 9);
  background: linear-gradient(
    to bottom right,
    rgba(116, 162, 223, 0.9),
    rgba(43, 98, 160, 0)
    );
  margin-bottom:1em;
  transition: all .5s ease-in-out;
}

footer > button:hover{
  font-weight:bold;
  color:black;
  transform:scale(1.05);

}

/* .onfocus-enter-active,
.onfocus-leave-active{
  font-weight:bold;
  color:black;
  transform:scale(1.1);
  border-style:solid 4px black;
}

.onfocus-enter,
.onfocus-leave-to{
  transform:scale(1);
  color:rgb(56, 43, 9)
} */

/* ul {
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
} */

.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  /* transform: translateX(1300px) translateY(540px); */
  opacity: 0;
  color:transparent;
}

@media (max-width: 800px) {
  .detailcard {
    margin: 0em 0.25em 1.5em 0.25em;
    padding: 0.4em;
  }
}
</style>
