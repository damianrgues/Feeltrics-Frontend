import React, { Component } from "react";
import metricService from './../lib/metric-service'

class AddMetric extends Component {


  state = {
    name: "",
    description: ""
  };
  
  handleFormSubmit = event => {
    event.preventDefault();
    const { name, description } = this.state;
    metricService.postNewMetrics({ name, description, value: 5 })
      .then((newlyCreatedMetric)=> this.props.history.push("/dashboard"))
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };



  render() {
    const { name, description } = this.state;

    return (
    <div className="metric-container">
      <h2>New metric</h2>
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input className="input" type="text" name="name" placeholder="name of the metric" onChange={this.handleChange} value={name} />
          <input className="input" type="text" name="description" placeholder="description" onChange={this.handleChange} value={description} />
          <button className= 'button'   >Done</button>
        </form>  
      </div>
    </div>
              
    
    );
  }
}

export default AddMetric;
