export const data = {
  labels: [
    'ATK',
    'DEF',
    'WEIGHT',
    'CU',
  ],
  datasets: [
    {
      label: 'Greatsword of Vagina',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [150, 10, 120, 40]
    },
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      borderWidth: 3
    }
  },
  layout: {
    padding: 5
  },
  plugins: {
    legend: {
        labels: {
            // This more specific font property overrides the global property
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
        suggestedMax: 100,
        ticks: {
          display: false
        },
        pointLabels: {
          font: {
            size: 14,
          },
        }
    }
}
}
