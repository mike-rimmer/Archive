<template>
  <div>
    <h2>CRL Page</h2>
    <!-- <BaseMessage :message="msg" /> -->
    <!-- <mills-pop-up-test :record="record" /> -->
    <div>
      <h2>Previous component call</h2>
      <todolist :todos="todosafter">
        <template v-slot:default="{itemvalue}">
          <!-- {{ itemvalue.test }} -->
          <span
            v-if="itemvalue.iscomplete"
          >{{ itemvalue.test }} ✓
          </span>
        </template>
      </todolist>
    </div>

    <div>
      <v-divider />
      <v-btn @click="toggleShow">
        Transitions
      </v-btn>
      <v-divider />
      <div class="display:flex">
        <v-scroll-x-transition>
          <p
            v-show="show"
            style="display:inline-block"
            class="mx-4"
          >
            Scroll x Transition
          </p>
        </v-scroll-x-transition>
        <v-divider vertical />
        <v-scroll-y-transition>
          <p
            v-show="show"
            style="display:inline-block"
            class="mx-4"
          >
            Scroll y Transition
          </p>
        </v-scroll-y-transition>
        <v-divider vertical />

        <v-fade-transition>
          <p
            v-show="show"
            style="display:inline-block"
            class="mx-4"
          >
            V Fade Transition
          </p>
        </v-fade-transition>
        <v-divider vertical />

        <v-expand-transition>
          <p
            v-show="show"
            style="display:inline-block"
            class="mx-4"
          >
            V Expand Transition
          </p>
        </v-expand-transition>
        <v-divider vertical />

        <v-scale-transition>
          <p
            v-show="show"
            style="display:inline-block"
            class="mx-4"
          >
            V Scale Transition
          </p>
        </v-scale-transition>
        <v-divider />
      </div>
    </div>
  </div>
</template>

<script>
// import BaseMessage from '@/components/BaseMessage.vue'
// import MillsPopUpTest from '@/components/BaseDetailPopUp.
import todolist from '@/components/ToDoList'
export default {
  components: {
    todolist
  },

  data() {
    return {
      show:false,
       todosbefore:[
  {
   test:"Ask for time",   id:12312313123
  },  {
   test:"Agent 1",   id:123123123423423
  },  {
   test:"I'll see you at the end of your love",   id:12312313123234234
  },  {
   test:"Time 2",   id:1231231312323333
  },  {
   test:"Teacher-student sentiment is a market",   id:12313333333
  }
  ],

  todosafter:[
  {test:"Ask for time",  iscomplete:true,  id:12312313123},
  {test:"Agent 1",   iscomplete:false,   id:123123123423423},
  {test:"I'll see you at the end of your love", iscomplete:false, id:12312313123234234},
  {test:"Time 2",   iscomplete:true,   id:1231231312323333},
  {test:"Teacher-student sentiment is a market", iscomplete:true, id:12313333333}
  ],

      trees:['Birch', 'Poplar', 'Maple'],
      msg: 'This is page is for Canadian Registry',
      record: {
        MillsNumber: '004630',
        Name1: 'Battleford',
        Date1: '1900',
        Name2: null,
        Date2: null,
        Name3: null,
        Date3: null,
        Name4: null,
        Date4: null,
        Name5: null,
        Date5: null,
        Name6: null,
        Date6: null,
        Name7: null,
        Date7: null,
        Propulsion: '?',
        OfficialNum: 'U',
        dimensions: '[  x  -  tons ]',
        whereBuilt: 'Edmonton, Alberta, Canada ',
        builtDate: '1900',
        PreReg: '',
        NamePreReg: '',
        DateFirstCdnReg: '',
        dateClosed: '',
        CountryRegAfterCanada: '',
        NextCountryRegAfterCanada: '',
        NextDateRegisteredAfterCanada: '',
        RegId: null,
        DateClosedEvent: 'c.1907',
        reasonClosed: 'Abandoned',
        placeClosed: 'Battleford, Saskatchewan, Canada',
        remarks: 'Catamaran',
        addendum:
          'Battleford;  Dimensions unknown. Owned by Dominion Government Built by Walter & Humberstone, Edmonton Alta. 1900. Floated down Saskatchewan River to Battleford Sask. Catamaran (sternwheel?). Never registered.',
        EntryDate: '',
        id: '',
      },
    }
  },
  methods:{
    toggleShow(){
      this.show = !this.show
    }
  },
}
</script>

<style  scoped>
</style>
