<template>
  <div class="navMenu">
    <ul
      v-for="item in menu"
      :key="item.title"
      class="topMenuItem"
    >
      <li
        @click="submenuSelected = !submenuSelected"
      >
        {{ item.title }}
      </li>
      <div
        v-if="item.children.length>0"
      >
        <ul
          :class="submenuSelected ? 'display:visible':''"
          class="bottomMenuItem"
        >
          <li
            v-for="child in item.children"
            :key="child.title"
            @click="item.children.visible = true"
          >
            <a
              :href="child.link"
            >{{ child.title }}</a>
          </li>
        </ul>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submenuSelected: 'false',

      menu: [
        {
          title: 'ShipLists',
          children: [
            {
              visible: false,
              title: 'Mills',
              route: '/mills',
              children: [],
            },
            {
              visible: false,
              title: 'Wallis',
              route: '/wallis',
              childern: [],
            },
            {
              visible: false,
              title: 'Canada Ship Lines',
              route: '/csl',
              children: [],
            },
            {
              visible: false,
              title: 'Snyder',
              route: '/snyder',
              children: [],
            },
          ],
        },
        {
          title: 'Forged in Fire',
          link: '/fire',
          children: [],
        },
        {
          title: 'Future Growth',
          link: '/growth',
          children: [
            { visible: false, title: 'sub1', link: '/sub1', children: [] },
            { visible: false, title: 'sub2', link: '/sub1', children: [] },
            { visible: false, title: 'sub3', link: '/sub1', children: [] },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
.navMenu {
  display: flex;
  justify-content: space-between;
}
.topMenuItem {
  display: flex;
  position: relative;
  list-style-type: none;
  width: auto;
  list-style: none;
}

.bottomMenuItem {
  position: fixed;
  top: 60px;

  display: flex;
  /* flex-direction: column; */
  width: clamp(350px, 400px, 600px);
  justify-content: space-between;
  /* color: black; */
  list-style: none;
  /* display: none; */
}
</style>
