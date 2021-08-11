<template>
  <div
    style="padding:1em; background-Color:lightgrey; height:100vh;"
    @click.ctrl.exact="showMrOwl"
  >
    <h1>Details Cart</h1>
    <hr>

    <!-- <transition
      appear
      name="owlhelper"
      @enter="enter"
    >
      <div
        v-show="showOwl"
        class="mrwiseowl"
      >
        <svg
          width="118"
          height="98"
          viewBox="0 0 472 392"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="wiseowl">
            <g id="Owl">
              <path
                id="Vector"
                d="M251.397 300.107C319.814 300.107 375.276 244.936 375.276 176.879C375.276 108.823 319.814 53.6523 251.397 53.6523C182.98 53.6523 127.518 108.823 127.518 176.879C127.518 244.936 182.98 300.107 251.397 300.107Z"
                fill="#B69338"
              />
              <path
                id="Vector_2"
                d="M173.407 186.771C176.484 183.107 180.332 180.16 184.679 178.138C189.026 176.115 193.767 175.067 198.566 175.067C203.365 175.067 208.106 176.115 212.453 178.138C216.8 180.16 220.648 183.107 223.725 186.771C228.937 181.822 232.557 175.445 234.127 168.449C235.696 161.453 235.145 154.151 232.542 147.467C229.94 140.782 225.403 135.016 219.506 130.896C213.608 126.776 206.616 124.489 199.411 124.322C192.207 124.156 185.115 126.118 179.032 129.962C172.949 133.805 168.148 139.356 165.237 145.913C162.326 152.47 161.434 159.739 162.676 166.8C163.917 173.861 167.236 180.397 172.212 185.582C172.601 185.988 172.999 186.384 173.407 186.771Z"
                fill="white"
              />
              <path
                id="Vector_3"
                d="M271.782 186.771C274.859 183.107 278.707 180.16 283.054 178.138C287.401 176.116 292.142 175.067 296.941 175.067C301.74 175.067 306.481 176.116 310.828 178.138C315.175 180.16 319.023 183.107 322.1 186.771C327.312 181.822 330.932 175.445 332.501 168.449C334.071 161.453 333.519 154.151 330.917 147.467C328.315 140.782 323.778 135.016 317.881 130.896C311.983 126.776 304.991 124.489 297.786 124.322C290.582 124.156 283.49 126.118 277.407 129.962C271.324 133.805 266.523 139.356 263.612 145.913C260.701 152.47 259.809 159.739 261.051 166.8C262.292 173.861 265.611 180.397 270.587 185.582C270.976 185.988 271.374 186.384 271.782 186.771Z"
                fill="white"
              />
              <g id="eyes">
                <path
                  id="leye"
                  d="M186.137 160.682C193.059 160.682 198.67 155.1 198.67 148.214C198.67 141.329 193.059 135.747 186.137 135.747C179.215 135.747 173.604 141.329 173.604 148.214C173.604 155.1 179.215 160.682 186.137 160.682Z"
                  fill="#3F3D56"
                />
                <path
                  id="reye"
                  d="M284.508 160.682C291.43 160.682 297.041 155.1 297.041 148.214C297.041 141.329 291.43 135.747 284.508 135.747C277.586 135.747 271.975 141.329 271.975 148.214C271.975 155.1 277.586 160.682 284.508 160.682Z"
                  fill="#3F3D56"
                />
              </g>
              <path
                id="Vector_4"
                d="M162.131 222.183C170.18 222.183 176.705 215.692 176.705 207.686C176.705 199.679 170.18 193.188 162.131 193.188C154.082 193.188 147.557 199.679 147.557 207.686C147.557 215.692 154.082 222.183 162.131 222.183Z"
                fill="#BD5B55"
              />
              <path
                id="Vector_5"
                d="M329.732 222.183C337.781 222.183 344.306 215.692 344.306 207.686C344.306 199.679 337.781 193.188 329.732 193.188C321.683 193.188 315.158 199.679 315.158 207.686C315.158 215.692 321.683 222.183 329.732 222.183Z"
                fill="#BD5B55"
              />
              <path
                id="Vector_6"
                d="M245.931 178.69L235.001 225.807L253.218 207.686L245.931 178.69Z"
                fill="#101010"
              />
              <path
                id="Vector_7"
                d="M302.095 359.907L289.685 349.547L289.974 359.907H286.12L285.812 348.952L269.057 359.907H262.043L285.687 344.448L284.771 311.987L284.087 287.471L287.932 287.366L288.626 311.987L289.54 344.419L308.087 359.907H302.095Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_8"
                d="M243.794 359.907L231.385 349.547L231.674 359.907H227.83L227.522 348.952L210.766 359.907H203.752L227.387 344.448L226.472 311.987L225.788 287.471L229.641 287.366L230.335 311.987L231.24 344.419L249.788 359.907H243.794Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_9"
                d="M253.218 44.591C249.819 44.591 246.821 47.2175 244.816 51.2517C243.049 45.1854 239.336 40.9667 235.001 40.9667C234.706 40.9959 234.414 41.0447 234.126 41.113C232.459 34.6361 228.586 30.0938 224.07 30.0938C218.033 30.0938 213.14 38.2072 213.14 48.2154C213.14 58.2236 218.033 66.337 224.07 66.337C224.365 66.3079 224.657 66.259 224.945 66.1908C226.612 72.6677 230.485 77.21 235.001 77.21C238.4 77.21 241.398 74.5835 243.403 70.5493C245.17 76.6156 248.883 80.8343 253.218 80.8343C259.255 80.8343 264.149 72.7209 264.149 62.7126C264.149 52.7044 259.255 44.591 253.218 44.591Z"
                fill="#865D2D"
              />
              <path
                id="rarm"
                d="M134.6 180.713L66.3588 169.703C62.9199 169.148 59.4182 168.592 55.9684 169.075C52.5186 169.558 49.0652 171.248 47.3066 174.239C46.4614 175.677 46.0517 177.327 46.1265 178.99C46.2014 180.654 46.7578 182.261 47.7288 183.618C48.6998 184.975 50.0441 186.024 51.6 186.639C53.156 187.254 54.8573 187.409 56.4997 187.085C52.7747 186.965 48.8597 186.885 45.5542 188.598C42.2488 190.31 39.9082 194.47 41.5197 197.813C42.0033 198.735 42.6575 199.559 43.448 200.24C45.9355 202.458 49.0035 203.93 52.297 204.486C55.5905 205.041 58.9749 204.658 62.0584 203.38C59.5461 206.964 54.561 207.496 50.2488 208.326C45.9365 209.155 40.9514 211.582 40.7912 215.948C40.6111 220.854 46.4806 223.461 51.3126 224.46C77.1137 229.741 103.895 227.57 128.496 218.202C131.261 217.256 133.878 215.927 136.27 214.254C138.951 212.229 140.988 209.478 142.138 206.331C143.288 203.184 143.503 199.773 142.755 196.508C142.007 193.243 140.329 190.262 137.922 187.921C135.515 185.58 132.481 183.978 129.183 183.308"
                fill="#B69238"
              />
              <path
                id="larm"
                d="M429.152 236.354C417.889 212.667 400.049 192.679 377.738 178.75C375.316 177.121 372.675 175.839 369.893 174.942C366.655 174.028 363.22 174.061 360 175.038C356.78 176.015 353.912 177.895 351.738 180.451C349.564 183.008 348.176 186.134 347.742 189.454C347.307 192.775 347.844 196.15 349.288 199.175L343.947 196.427C354.669 216.718 365.391 237.009 376.112 257.3C377.733 260.367 379.391 263.486 381.852 265.938C384.314 268.391 387.747 270.121 391.207 269.721C392.581 269.568 393.898 269.089 395.047 268.324C396.196 267.56 397.144 266.532 397.811 265.328C398.478 264.124 398.846 262.778 398.882 261.403C398.918 260.029 398.622 258.665 398.018 257.428C399.523 259.538 401.502 261.269 403.798 262.485C407.16 264.084 411.909 263.445 413.626 260.155C414.077 259.216 414.346 258.201 414.418 257.163C414.705 253.852 414.044 250.528 412.511 247.576C410.978 244.623 408.636 242.163 405.756 240.48C410.145 240.323 413.569 243.967 416.827 246.897C420.086 249.826 425.031 252.332 428.636 249.835C432.686 247.03 431.254 240.796 429.152 236.354Z"
                fill="#B69238"
              />
            </g>
            <path
              id="floor"
              d="M427.4 361.906H44.5995C44.333 361.906 44.0774 361.801 43.889 361.613C43.7005 361.426 43.5947 361.172 43.5947 360.907C43.5947 360.642 43.7005 360.387 43.889 360.2C44.0774 360.013 44.333 359.907 44.5995 359.907H427.4C427.666 359.907 427.922 360.013 428.11 360.2C428.299 360.387 428.405 360.642 428.405 360.907C428.405 361.172 428.299 361.426 428.11 361.613C427.922 361.801 427.666 361.906 427.4 361.906Z"
              fill="#CACACA"
            />
          </g>
        </svg>
        <div
          id="help"
          style="line-height:.5em; font-size:1em;"
        >
          <p class="helpPrompt">
            Hi there! If you need help click on me.
          </p>
        </div>
      </div>
    </transition> -->


    <!-- <div
      class="futurePopup"
    >
      <p>The following cards have been selected by you.</p>
      <p>Card details can be either printed or saved in PDF format by scrolling to the bottom of the card; then selecting the 'Print'</p>
      <p>You now have the choice of printing to 'PDF' or to yours printer</p>
      <p>To remove the card from the 'Research Cart' left-mouse click on 'X' </p>
    </div> -->

    <div class="layout">
      <Card
        v-for="(item, index) in selectionData"
        :key="index"
        :record="item"
        @removeCard="deleteCardFromCart(index)"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/BaseComponents/BaseResearchCard'
import gsap from 'gsap'
import {mapActions} from 'vuex'

  export default {
    name:'CSLDetailStoreCard',

    components:{
   Card,
  //  Cart
    },

    props:{
      selectionData:{
        type :Array,
        required: true,
        default: ()=> []
    }
    },

    data(){
      return {
        showOwl:true,
        showHelpData:false,
        showHelpIntro:false,
    }
    },

    computed:{

    },

    methods:{
      ...mapActions('Cart', ['removeItemFromResearchCart']),
      showCard(id){
        this.record = this.CSLDetailCart.record.filter((ele)=>{
          return ele.Notis == id
        })
        // console.log(`%c The id: is  ${id} `,'background-color:green; color: white')
        this.cardVisible=true
      },

      deleteCardFromCart(index){
        this.removeItemFromResearchCart(index)
        // this.DeleteCardFromCart(index)
      },

      // showHelp(){
      //   this.showHelpData = true
      //   setTimeout(()=>{this.showHelpData= false}, 5000)
      // },

     enter(el){
       console.log("enter called")
      //  const front = document.querySelectorAll('#fwheel')
      // gsap.set(el,{y:-200, x:-200, scale:0})
       const tl = gsap.timeline()
       tl.from(el,{y:-100, x:-100, duration:1, opacity:0, scale:0, ease:'bounce.out'})
       tl.to('#leye',{rotation: 360, duration:.3, repeat:3, transformOrigin:'50% 30%'})
       tl.to('#reye',{rotation: -360, duration:.3, repeat:3, transformOrigin:'50% 30%'},'-=1.2')
       tl.to('#help',{y:0, x:0, scale:1, duration:1},'-=2')
       tl.to('#help',{duration:1, opacity:0, scale:0, delay:4})
       tl.from('#Owl',{opacity:0, scale:0,  duration:2.5 },'-=.5')
       },

     showMrOwl(){
       this.showOwl=true
       console.log('MrOwl Called')
       gsap.set('#help',{y:220, x:220})
       const tl = gsap.timeline()
       tl.fromTo('#wiseowl',{y:-100, opacity:0, scale:0}, { y:20, opacity:1, scale:1, duration:1.5, ease:'bounce'})
       tl.to('#leye',{rotation: 360, duration:.3, repeat:3, transformOrigin:'50% 30%'})
       tl.to('#reye',{rotation: -360, duration:.3, repeat:3, transformOrigin:'50% 30%'},'-=1.2')
       tl.to('#help, .helpPrompt',{y:-600, x:1, opacity:1, duration:1},'-=2')
       tl.to('.helpPrompt',{duration:1, opacity:1, scale:1, delay:4})
       tl.from('#wiseowl',{opacity:0, scale:0,  duration:2.5 },'-=.5')
       },


     helpData(){

       this.enter()
       this.showHelpData = true
       setTimeout(()=>{this.showHelpData = false},3000)

     }
    }
  }
</script>

<style scoped>
.layout{
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content: space-around;
  margin-top:2em;
}

.helpPrompt{
  display:inline;
  line-height:1em;
  background-color:#39947F;
  color:black;
  box-shadow:5px 5px 5px rgba(40,40,40,.7);
  opacity:1;
  padding:.5em;
  font-size:.8em;
}

.mrwiseowl{
  /* display: inline-block; */
  cursor:pointer;
  padding:1em;
  opacity:0;
  height:700px;
}

.futurePopup{
  opacity:0;
}




</style>
