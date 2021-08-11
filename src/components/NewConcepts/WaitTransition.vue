<template>
  <transition
    name="wait"
  >
    <div>
      <button @click="startWaiting">
        Start Animation
      </button>
      <svg
        id="mainSVG"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
      >
        <g id="whole">
          <g
            id="dotGroup"
            fill="#F9EBE0"
          >
            <circle
              id="endDot"
              cx="100"
              cy="500"
              r="25"
              opacity="0"
            />
            <circle
              cx="300"
              cy="500"
              r="25"
            />
            <circle
              cx="500"
              cy="500"
              r="25"
            />
            <circle
              id="startDot"
              cx="700"
              cy="500"
              r="25"
            />
          </g>
          <path
            id="connector"
            d="M700,500c0-165.69-134.31-300-300-300S100,334.31,100,500"
            fill="none"
            stroke="#F9EBE0"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="50"
          />
        </g>
      </svg>
    </div>
  </transition>
</template>



<script>
import gsap from 'gsap'
  export default {
    methods:{
      startWaiting(){
        console.log('startWaiting Called')
        gsap.set('svg', {
          visibility: 'visible'
        })

      let tl = gsap.timeline({repeat: 1}).timeScale(2);
      tl.to('#whole', {
        duration: 2,
        x: 200,
        ease: 'linear'
      })
      .set('#startDot', {
        opacity: 0
      }, 0)
      .from('#connector', {
        duration: 1,
        drawSVG: '0% 0%',
        ease: 'linear'
      }, 0)
      .to('#connector', {
        drawSVG: '100% 100%',
        ease: 'expo'
      }, 0.5)
      .set('#endDot', {
        opacity: 1
      }, '-=1.1')
      .to('#endDot', {
        y: -5,
        duration: 1.1,
        ease: 'wiggle({type:easeOut, wiggles:1})'
      }, '-=1.1')

      console.log(tl.duration())
      }
}
  }

</script>

<style scoped>
body {
  background-color: #208AAE;
 overflow: hidden;
}

body,
html {
 height: 100%;
 width: 100%;
 margin: 0;
 padding: 0;
}

svg {
 width: 15%;
 height: 15%;
 visibility: hidden;

}
</style>
