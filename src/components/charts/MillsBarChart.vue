<script>
import {Bar} from 'vue-chartjs'
export default {
  name:'MillsBarChart',
  extends:Bar,
 data(){
   return{
     chartdata:{
            labels: ['Canada','USA', 'England', 'Scotland', 'Norway', 'France', 'Germany'],
            datasets: [{
              label: 'Mills List by Countries Built',
              fill:true,
                data:[4607,    885,   373,        242,        26,          15,       10],
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
                  'rgba( 40,  40, 40, 1)'
                ],
                borderWidth: 1
            }
            ]
          },

      options: {
        title:{
          display:true,
          position:'top',
          text:["Country Where", "Vessel", "Built"]
        },


        layout:{
          padding:{
            left:0, right:0, top:0, bottom:0
            }
          },

        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
                  }
              }]
          }
      }
   }
 },
  mounted(){
   this.renderChart(this.chartdata, this.options )
  },

  methods:{
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
        const tmpArry = this.chartdata.labels
        tmpArry.forEach( (ele) =>{
        var hex_color = ele.getRandomColorHex()
        color.push(hex_color)
    })
      return color
              },
  }

}
</script>
