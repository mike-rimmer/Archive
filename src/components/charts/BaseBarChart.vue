<script>
import {Bar} from 'vue-chartjs'
export default {
  name:'BarChart',
  extends:Bar,
  props:{
    chartdata:{
      type: Object,
      default: ()=> {}
      },
    options:{
      type:Object,
      default:() => {}
    }
    },

  mounted(){
   this.renderChart(this.chartdata, this.options)
  }

}
</script>
