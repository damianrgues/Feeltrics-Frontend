import React, { Component } from "react";
import metric from '../components/Metric';
import {Link} from 'react-router-dom';


class AddMetric extends Component {
  render() {
    
    return (
    <div className="metric-container">
      <h2>New metric</h2>
      <div>
        <form action="/login" method="post">
          <input className="input" type="text" name="username" placeholder="name of the metric" />
          <input className="input" type="text" name="password" placeholder="description"/>
          
          {/* <Link to={`/metric/name/${metricElement.name}`}><button className= 'button' >Done</button></Link> */}
        </form>  
      </div>
    </div>
              
    
    );
  }
}

export default AddMetric;
