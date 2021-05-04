<template>
  <div class="container">
    <div class="card">
      <LineChart
        :chartdata="closingData"
        :options="closingOptions"
      />
    </div>
    <div class="card">
      <BarChart
        :chartdata="closingData"
        :options="closingOptions"
      />
    </div>

    <div class="card">
      <MillsBarChart />
    </div>

    <div class="card">
      <PieChart
        :chartdata="whereBuiltData"
        :options="whereBuiltOptions"
      />
    </div>
  </div>
</template>

<script>
 import LineChart from '@/components/charts/BaseLineChart.vue';
 import BarChart from '@/components/charts/BaseBarChart.vue';
 import PieChart from '@/components/charts/BasePieChart.vue';
 import MillsBarChart from '@/components/charts/MillsBarChart.vue';

 export default {
    name:'DisplayMillsChart',
    components:{
      LineChart,
      BarChart,
      PieChart,
      MillsBarChart
    },

    data(){
      return{
        closingData: {
          labels: ['Broken Up', 'Burnt', 'Wrecked', 'Retired', 'Foundered', 'Abandoned', 'Rebuilt Barge'],
            datasets: [{
              label: 'Reasons for Closing',
                data:[1238, 670, 555, 306, 247, 241, 113],
                backgroundColor: context => {
                  var index = context.dataIndex;
                  var value = context.dataset.data[index];
                  var trans = Math.random() * 1
                  var red = value % (Math.random() * 255)
                  var green = value % (Math.random() * 255)
                  const blue = value % (Math.random() * 255)
                    // return `rgba(${red},${green},${blue},.6}`
                  return 'rgba('+red+','+green+','+blue +','+trans+')'
                },
                borderColor: [
                  'rgba( 0,  255, 0, 1)'
                ],
                borderWidth: 1
            }
            ]
          },

          closingOptions:{
            title:{
            display:true,
            position:'top',
              text:["Mills Record Reasons", "for", "Ships Removal"]
            },

           layout:{
             padding:{
            left:0, right:0, top:0, bottom:0,
             }
           },
          },

          whereBuiltData:{
            labels: ['Canada','USA', 'England', 'Scotland', 'Norway', 'France', 'Germany', 'Netherlands', 'Northern Island', 'Ireland', 'Sweden'],
            datasets: [{
              label: 'Mills List by Countries Built',
              fill:true,
                data:[4607,    885,   373,        242,        26,          15,       10,            8,              9,            5,        3],
                backgroundColor: context => {
                var index = context.dataIndex;
                var value = context.dataset.data[index];
                var trans = Math.random() * 1
                var red = value % (Math.random() * 255)
                var green = value % (Math.random() * 255)
                const blue = value % (Math.random() * 255)
                  // return `rgba(${red},${green},${blue},.2}`
                return 'rgba('+red+','+green+','+blue +','+trans+')'
              },

            borderColor: [
                  'rgba( 40,  40, 40, 1)'
                ],
                borderWidth: 1
            }
            ]
          },


      whereBuiltOptions: {
        title:{
          display:true,
          position:'top',
          text:["Country Where", "Vessel;", "Built"]
        },


        layout:{
          padding:{
            left:0, right:0, top:0, bottom:0
            }
          },


      }
    }
    },

    methods:{
      autoColor(context){
        var index = context.dataIndex;
        var value = context.dataset.data[index];
        var trans = Math.random() * 1
        var red = value % (Math.random() * 255)
        var green = value % (Math.random() * 255)
        const blue = value % (Math.random() * 255)
                  // return `rgba(${red},${green},${blue},.2}`
        return 'rgba('+red+','+green+','+blue +','+trans+')'
      }
    },

      getRandomColorHex() {
        var hex = "0123456789ABCDEF",
            color = "#";
        for (var i = 1; i <= 6; i++) {
          color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    },

    colors(){
        var color=[]
        const tmpArry = this.countriesBuilt.labels
        tmpArry.forEach( ele =>{
        var hex_color = ele.getRandomColorHex()
        color.push(hex_color)
    })
      return color
   },

  }


</script>

<style scoped>
 .container{
   display:flex;
   flex-wrap: wrap;
   justify-content :space-between;
 }

 .card{
   max-width:350px;
   margin: 50px, auto;
 }
</style>
