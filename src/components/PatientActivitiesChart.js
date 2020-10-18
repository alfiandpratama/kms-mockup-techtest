import React from 'react'
import { CChartHorizontalBar } from '@coreui/react-chartjs'

function PatientActivitiesChart () {
  return (
    <div>
      <CChartHorizontalBar
        datasets={[
          {
            label: 'Previous week',
            backgroundColor: '#c3def1',
            data: [0, 1]
          },
          {
            label: 'Current week',
            backgroundColor: '#6363ee',
            data: [2, 4]
          }
        ]}
        labels={['Cardiology', 'Ward']}
        options={{
          legend: {
            align: 'end'
          },
          tooltips: {
            enabled: true
          },
          scales: {
            xAxes: [
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

export default PatientActivitiesChart
