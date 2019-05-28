import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';


class Graphic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData:{
        labels: [],
        datasets: [
          {
            data:[5,6,4,5,7,8,9,9,7,5,6,7,3,8,9,10],

          }
        ],
      }

    }


  }

  render() {
      return (
          <div className="chart" >
          <Bar
            data={this.state.chartData}
            width={50}
            height={50}
            options={{ }}
            />

          </div>

      ) 
  }
}

export default Graphic
