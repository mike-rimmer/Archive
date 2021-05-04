<template>
  <div class="background">
    <v-toolbar
      height="50"
    >
      <v-tabs
        slot="extension"
        v-model="tabs"
        extension-height="100"
      >
        <v-tab
          v-for="item in items"
          :key="item.title"
        >
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item
        v-for="item in items"
        :key="item.title"
        @click="selected = item.title"
      >
        <!-- <img
          :src="item.url"
          :alt="item.title"
        > -->
        <component :is="selected" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
// import Mills from '@/views/Mills'
// import Owners from '@/views/Owners'
// import Registry from '@/views/Registry'
// import Wallace from '@/views/Owners'
const IMGPATH = 'https://marmuseum.ca/shiplists2/list-db-server/images/'
  export default {
    name:'Menu',
    components:{

      Owners: ()=> import('@/views/Owners'),
      Mills: () => import('@/views/Mills'),
      Registry: () =>import('@/views/Registry'),
      Wallace: () => import('@/views/Registry'),
    },
    title:'ShipList Database',
    data(){
      return{
        images:[
          {url:IMGPATH +'sl1.jpg', alt:'CRL', title:"Canadian Registry", route:"/CRL"},
          {url:IMGPATH +'sl3.jpg', alt:'MILLS', title:"Mills", route:"/mills"},
          {url:IMGPATH +'sl4.jpg', alt:'SOL', title:"Ship Owners List", route:"SOL"},
          {url:IMGPATH +'sl5.jpg', alt:'WALLACE', title:"Wallace", route:"/Wallace"},
          // {url:IMGPATH +'sl2.jpg', alt:'CSL', title:"Canada Steamship", route:"/CSL"},
          // {url:IMGPATH +'sl6.jpg', alt:'SNYDERS', title:"Snyder's ", route:"/Snyder"},
        ],
          museumLogo: IMGPATH +'shipswheel.jpg',
          tabs: 0,

      items:[
        {title: 'Registry', content:'Registry'},
        {title: 'Mills', content:'Mills'},
        {title: 'Owners', content: 'Owners'},
        {title: 'Wallace', content: 'Wallace'},
      ],
      selected: 'Registry'
      }
    },
    methods:{
      swapComponent(tab){
        // alert(tab)
      }
    }
  }
</script>

<style scoped>
.img-container{
  height:0vh;
  width :100vw;
  overflow: hidden;
}

img{
  display:block;
  width:100%;
  object-fit: cover;

}

.background {
  position: relative;
  width: 100vw;
  min-height:90vh;
  z-index: 1;
  background: linear-gradient(
    rgba(75, 93, 150, 0.1),
    rgba(7, 74, 129, 0.9)
  );

}

/* .background::before {
  content: '';
  background: url('../assets/greatlakes.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -100;
  opacity: .5;
} */

.menulayout{
  display:flex;
  flex-direction: column;
  margin-top:.5;
  width:50vw;
  margin-left:100px;;
  justify-content:space-around;
  align-content: center;
  flex-wrap: wrap;

}

.glasslook{
   background: linear-gradient(
    to right bottom,
    rgba(247, 248, 247, .10),
    rgba(252, 255, 252, .10)
    );
    opacity:1
 }


 /* btn{
  background-color:#f5f5f500;
  backdrop-filter: blue(4px);
 } */

 a{
   text-decoration: none;
   color:teal;
   font-size:.8em;
}
.v-card {
  transition: all .4s ease-in-out;

}

.v-card:not(.on-hover) {
  opacity: 0.8;
  transform:scale(.9);
 }

/* .show-btns {
  color: rgba(255, 255, 255, 1) !important;
} */


</style>
