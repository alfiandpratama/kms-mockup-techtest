import React from 'react'
import { CChartBar } from '@coreui/react-chartjs'

function PatientVisitsChart () {
  return (
    <div>
      <CChartBar
        datasets={[
          {
            label: 'Previous week',
            backgroundColor: '#c3def1',
            data: [1, 0, 1, 0, 1, 1, 0]
          },
          {
            label: 'Current week',
            backgroundColor: '#6363ee',
            data: [3, 2, 3, 0, 0, 3, 0]
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
    </div>
  )
}

export default PatientVisitsChart
