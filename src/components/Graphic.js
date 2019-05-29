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
    const chartData ={
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      datasets: [
        {
          label: `${this.props.name}ly Metrics`,
          data: this.props.data,
          // data: [1,4,6,28,3],
        }
      ]
    } 
      return (
          <div className="chart">
        
          <h2>{this.props.name}</h2>
        <Line
          data={chartData}
        
         
        />

        
      </div>

      ) 
  }
}

export default Graphic
