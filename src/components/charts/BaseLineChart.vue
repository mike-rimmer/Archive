<script>
import {Line} from 'vue-chartjs'
export default {
  name:'LineChart',
  extends:Line,
  props:{
    chartdata:{
      type:Object,
      default: ()=>{}
    },
    options:{
      type:Object,
      default: ()=>{}
    }
  },

  mounted(){
   this.renderChart(this.chartdata, this.options)
  }

}
</script>
