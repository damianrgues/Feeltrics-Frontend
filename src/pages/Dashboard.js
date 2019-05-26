
import React, { Component } from "react";

import {Link} from 'react-router-dom';
import metric from "../lib/metric-service";



class Dashboard extends Component {

  state={
    myMetrics: []
  }

 



  componentDidMount(){
    metric.getAll()
    .then((data)=>{
      this.setState({
        myMetrics: data.data
      })
    })
  }

  render() {
    const {myMetrics} = this.state
    
   
    return (
      <div>
        <h1>Your metrics</h1>
        <div className="add-metric-container">
            <Link to="/metric/new">Add new metric</Link>
        </div>

        <div className="metric-container">
         {/* metric */}
        </div>
      
         
      </div>
    );
  }
}

export default Dashboard; 