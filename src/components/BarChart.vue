<script lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  components: {
    Radar
  },
  props: {
    weapons: [],
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
/*           {
            label: 'default',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [150, 10, 120, 40]
          }, */
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        elements: {
          line: {
            borderWidth: 3
          }
        },
        layout: {
          padding: 0
        },
        plugins: {
          legend: {
            display: true,
              labels: {
                color: '#FFFFF0',
                font: {
                    size: 24
                }
              }
          }
        },
        scales: {
          r: {
              angleLines: {
                  display: false
              },
              suggestedMin: 0,
              suggestedMax: 10,
              ticks: {
                display: false
              },
              pointLabels: {
                font: {
                  size: 18,
                },
              },
          }
        }
      }
    }
  },

  methods: {
    createData(){
      this.chartData.labels = Object.keys(this.weapons.requirements)
      
      this.chartData.datasets = [{
        label: this.weapons.name,
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: Object.values(this.weapons.requirements)
      }]
    },
  },

  created() {
    this.createData()
  },
}
</script>
<template>
  <Radar 
    :data="chartData" 
    :options="options" 
  />
</template>