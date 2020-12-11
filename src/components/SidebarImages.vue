<template>
  <div
    class="sidebar"
    :images="images"
  >
    <img
      v-for="image in images"
      :key="image.img"
      :src="image.img"
      :alt="image.img"
      fit
      aspect-ratio="1"
    >
  </div>
</template>

<script>
const PRODIMGPATH = 'https://marmuseum.ca/mills/mills-list-server/images/'
const IMGPATH = 'https://marmuseum.ca/mills/mills-list-server/images/'

export default {
  name: 'SidebarImages',
  props: {
    images: {
      type: Array,
      default: function () {
        return []
      },
    },
  },
  data() {
    return {
      // images: [
      // { id: 1, url: `${IMGPATH}mills1.jpg`, alt: 'BenCampbellb' },
      // { id: 2, url: `${IMGPATH}mills2.jpg`, alt: 'lookout' },
      // { id: 3, url: `${IMGPATH}mills3.jpg`, alt: 'cayuga' },
      // { id: 4, url: `${IMGPATH}mills4.jpg`, alt: 'cayugacolor' },
      // ],
    }
  },
}
</script>

<style scoped>
.sidebar {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-content: center;
  justify-content: space-around;
}

img {
  width: 125px;
  height: 125px;
  padding: 1em 0;
  border-radius: 50%;
  transition: all 1s ease-in-out;
}

img:hover {
  transform: translateX(-500px) scale(3);
  border-radius: 0px;
}
</style>
