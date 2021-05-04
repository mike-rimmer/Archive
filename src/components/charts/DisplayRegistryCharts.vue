<template>
  <div class="container">
    <div class="card">
      <BarChart
        :chartdata="whereClosedData"
        :options="closingOptions"
      />
    </div>

    <div class="card">
      <BarChart
        :chartdata="topBuilderData"
        :options="topBuildersOptions"
      />
    </div>
  </div>
</template>

<script>
//  import LineChart from '@/components/charts/BaseLineChart.vue';
 import BarChart from '@/components/charts/BaseBarChart.vue';
//  import PieChart from '@/components/charts/BasePieChart.vue';

 export default {
   name: 'DisplayRegistryCharts',
   components:{
      // LineChart,
      BarChart,
      // PieChart,
   },

   data(){
     return{
       whereClosedData:{
        labels:[
          'MONTREAL', 'KINGSTON', 'TORONTO', 'ST. CATHARINES', 'OTTAWA', 'PETERBOROUGH', 'PORT ARTHUR',
          'HAMILTON', 'WALLACEBURG', 'PORT DOVER','PICTON','WINDSOR','BROCKVILLE','PORT BURWELL','GODERICH',
          'CHATHAM','LINDSAY','BELLEVILLE','PORT HOPE','COLLINGWOOD','OWEN SOUND','PORT ROWAN','DESERONTO',
          'OAKVILLE','NEWCASTLE','SARNIA','PRESCOTT','ERIEAU','SAUGEEN','COBOURG','SAULT STE. MARIE','NAPANEE',
          'PORT STANLEY','WHITBY','SOUTHAMPTON','BOWMANVILLE','CORNWALL','MONTREAL, QUE.','AMHERSTBURG','KINCARDINE',
          'QUEBEC'],
        datasets: [{
          label: 'Place Registration Closed',
                data:[
                  '1644','567','548','223','190','126','124','118','106','106',
                    '97','88','71','66','64','62','58','51','50','48','39','38',
                    '27','27','26','25','25','22','19','18','13','13','12','9',
                    '6','5','5','3','1','1','1','1'],
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
              text:["Registry Record", "Closing Locations"]
            },

           layout:{
             padding:{
             left:0, right:0, top:0, bottom:0,
             }
           },
          },

        topBuilderData:{
          labels:[
          'A. CANTIN','D. & J. MCCARTHY','AUGUSTIN CANTIN','HENRY RONEY',
          'A. CANTIN MONTREAL','DAVID FOSTER','P.G. WATERS','GEORGE CHAFFEY & BROS.','J.B. AUGER',
          'D. & J. MCCARTHY & CO.','ERIEAU SHIPBUILDING & DRYDOCK CO. LTD.'],
          datasets: [{
              label: 'Top 12 Builders',
                data:['40','24','23','23','21','17','16','16','15','14','14'],
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
        topBuildersOptions:{
            title:{
            display:true,
            position:'top',
              text:["Registry Top 12 Builders"]
            },

           layout:{
             padding:{
            left:0, right:0, top:0, bottom:0,
             }
           },
          },
     }

}

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
