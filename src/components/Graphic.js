import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';


class Graphic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData:{
        labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
        datasets: [{
          label: "Car Speed (mph)",
    // data: [0, 59, 75, 20, 20, 55, 40],
  }]
      } 

    }


  }

  render() {
    const randomFakeData = [
      [3,5,7,2,10,9,1,5,6,7],
      [9,7,5,6,7],
      [5,7,5,4,7,2,7,6],
      [3,9,8],
      [3,6,8,2,8,6,8],
      [3,3,4,5,6,7,8,9],

    ];

    const randomNumber = Math.floor( Math.random() * randomFakeData.length )
    const chartData ={
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", ],
      datasets: [
        {
          label: `${this.props.name}ly Metrics`,
          data: [...randomFakeData[randomNumber], this.props.data],
          backgroundColor: ["#33C1FF"],
          // data: [1,4,6,28,3],
        }
      ],
      options: {
        scales: {
          yAxes: [{
              ticks: {
                  max: 5,
                  min: 0,
                  stepSize: 1
              }
          }]
      }
    
    }
    } 
      return (
          <div className="chart">
        
          <h2>{this.props.name}</h2>
        <Line
          data={chartData} 
          width={40}
          height={40}
        
         
        />

        
      </div>

      ) 
  }
}

export default Graphic
