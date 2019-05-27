
import React, { Component } from "react";

import {Link} from 'react-router-dom';
import metric from "./../lib/metric-service";
import {withAuth} from './../lib/AuthProvider'



class Dashboard extends Component {
  state={
    myMetrics: []
  }

  componentDidMount(){ 
    metric.getAll(this.props.user._id)
    .then((data)=>{
     
      this.setState({
        myMetrics: data
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
         {
           myMetrics.map((metricElement) => {
            return (
              <div key={metricElement._id}>
                <h2>{metricElement.name}</h2>
                <p>{metricElement.description}</p>
                <h4>{metricElement.value}</h4>


              </div>
              
              )
         })} 
        </div>
      
         
      </div>
    );
  }
}

export default withAuth(Dashboard)