<template>
  <div>
    <thead>
      <slot name="columns">
        <tr>
          <th
            v-for="col in columns"
            :key="col"
            class="actionRows"
          >
            {{ col }}
          </th>
        </tr>
      </slot>
    </thead>
    <tbody>
      <tr
        v-for="(row, index) in rows"
        :key="index"
        class="rows"
      >
        <slot
          name="row"
          :row="row"
        >
          <td>
            {{ index }}
          </td>
          <td>
            {{ row.artifact_name }}
          </td>
          <!-- <td>
            {{ row.loc }}
          </td> -->
        </slot>
      </tr>
    </tbody>
  </div>
</template>

<script>
  export default {
    name: 'Table',

    props:{
      columns:{
        type:Array,
        required:true,
        default:()=>[]
      },
      rows:{
        type:Array,
        required:true,
        default:()=>[]
        }
      }
    }

</script>

<style lang = 'css' scoped>
/* .actionRows{
  display:flex;
  justify-content:start;
} */

th, td{
  padding:10px;
}

thead, tbody{
  /* display:flex; */
}

.rows{
box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
}
</style>
