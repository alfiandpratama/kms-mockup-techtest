import React from 'react'
import { CChartBar } from '@coreui/react-chartjs'

function PatientNewOldVisitChart () {
  return (
    <CChartBar
      datasets={[
        {
          label: 'Previous week',
          backgroundColor: '#c3def1',
          data: [3, 2, 4, 0, 1, 2, 0]
        },
        {
          label: 'Current week',
          backgroundColor: '#6363ee',
          data: [1, 0, 1, 0, 0, 0, 0]
        }
      ]}
      labels={['01', '02', '03', '04', '05', '06', '07']}
      options={{
        legend: {
          align: 'end'
        },
        tooltips: {
          enabled: true
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                beginAtZero: true,
                userCallback: function (label, index, labels) {
                  if (Math.floor(label) === label) {
                    return label
                  }
                }
              }
            }
          ]
        }
      }}
    />
  )
}

export default PatientNewOldVisitChart
