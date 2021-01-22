<template>
  <BaseView>
    <template v-slot:header>
      <h3>This is a Header</h3>
    </template>

    <template v-slot:main>
      Main Body
    </template>

    <template v-slot:images>
      Images
    </template>

    <template v-slot:sidebar>
      <img
        class="mills-image"
        src="../assets/images/Mills_400.png"
        width="250px"
        alt="Mill List"
      >
      <MillsQryFrm />
    </template>

    <template v-slot:cardrack>
      <CardRack />
    </template>
  </BaseView>
</template>

<script>
import millsData from '../data/datasource.js'
import lists from '../data/dbListsIntroData.js'
import ApiServices from '../services/ApiServices'

import BaseView from '../components/BaseVue';
import CardRack from '../components/CardRack.vue'
import MillsQryFrm from '../components/MillsQryFrm.vue'
import SidebarImages from '../components/SidebarImages'
import MillsSummaryDisplayFrm from '../components/MillsSummaryDisplayFrm'
// import UnderConstruction from '../components/UnderConstruction'
import ToolTip from '../components/ToolTip'
import popUp from '../components/PopUp'
  export default {
    name: 'Mills',
   components:{
     BaseView,
    MillsQryFrm,
    CardRack,
    // SidebarImages,
    // RegistryMenu,
    // MillsSummaryDisplayFrm,
    // UnderConstruction,
    // ToolTip,
    // popUp,
   }
  }
</script>

<style scoped>

</style>
