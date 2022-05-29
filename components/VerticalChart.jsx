import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
    labels: ['Kepler', 'Blue'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19],
        backgroundColor: [
          'rgba(70, 70, 70, 1)',
          'rgba(240, 100, 40, 1)'
        ],
       /*  borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ], */
        borderWidth: 0,
      },
    ],
  };


const VerticalChart = () => {
  return (
    <>
    <Doughnut data={data} />
    </>
  )
}

export default VerticalChart