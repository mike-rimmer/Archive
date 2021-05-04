<template>
  <div class="cart">
    <h3>Total Items in Cart: Qty({{ itemsInCart }}) </h3>
    <div>
      <ul style="display:flex; flex-direction:column;">
        <li
          v-for="item in cartData"
          :key="item.details.notis"
          class="no-bullets"
        >
          <v-btn
            class="listbtn mx-0 my-1"
            :class="{active : isActive}"
            color="blue lighten-4"
            @click="showDetail(item.details.Notis)"
          >
            <p
              :class="{ csl :item.list=='CSL'}"
            >
              <span> <b>Notis:</b> {{ item.details.Notis }}  <b>Ship:</b>{{ item.details.Name }} <b>List:</b>{{ item.list }}</span>
            </p>
          </v-btn>

          <v-tooltip
            top
            color="rgba(137, 172, 137, .9)"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon
                  style="color:gba(43, 98, 240, 0)"
                  @click="deleterecord(item.Notis)"
                >
                  mdi-delete
                </v-icon>
              </v-btn>
            </template>
            <span>Delete Item</span>
          </v-tooltip>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
   name:'BaseCart',

  data(){
     return{
       isActive:false,
     }
   },

  computed:{
    ...mapState('CSL', ['CSLDetailCart']),

    itemsInCart(){
      return this.CSLDetailCart.length
    },

    cartData(){
     return  this.CSLDetailCart

    }
  },

methods: {
  ...mapActions('CSL',['deleteRecord', 'CSL_ActiveDetail']),

   deleterecord(notis){
    let resp =''
    resp = confirm(`Remove ${notis} from Desktop`)
    if(resp){
      this.deleteRecord(notis)
    }

  },

  showDetail(id){
    this.CSL_ActiveDetail(id)
  }
    }
}

</script>
<style scoped >

.listbtn{
  padding:4px,8px;
  border-style: solid 1px black;
  background-color:hsla(115, 68%, 53%,.9)!important;
}



li.no-bullets{
  display:flex;
  justify-content: space-between;
  list-style-type: none; /* Remove bullets */
  padding: 0; /* Remove padding */
  margin: 0; /* Remove margins */
  cursor: pointer;
}

.selected{
  color:white;
  background-color:green;
}

.cart{
  margin-top:1em;
  /* display:inline-block; */
  /* width:500px; */
   min-width:500px;
  background:var(--component-background-theme);
  box-shadow:5px 5px 5px rgba(40,40,40, .4);
  border-radius:10px;
  padding:5px;
  color:black;
}

.active{
  background-color: green;
}

.csl{
  color:green;
}

</style>
