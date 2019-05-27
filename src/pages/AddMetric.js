import React, { Component } from "react";
import metric from '../components/Metric'


class AddMetric extends Component {
  render() {
    
    return (
    <div className="metric-container">
      <h2>New metric</h2>
      <div>
        <form action="/login" method="post">
          <input className="input" type="text" name="username" placeholder="name of the metric" />
          <input className="input" type="text" name="password" placeholder="description"/>
          
          <button className="button" type="submit">Done</button>
        </form>  
      </div>
    </div>
              
    
    );
  }
}

export default AddMetric;
