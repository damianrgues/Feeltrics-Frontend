
import React, { Component } from "react";

import {Link} from 'react-router-dom';
import metricService from "./../lib/metric-service";
import {withAuth} from './../lib/AuthProvider'
import MetricCard from "./MetricCard";



class Dashboard extends Component {
  state={
    myMetrics: null
  }

  handleDelete = (metricId) => {
    console.log("IN DELETE ");
    
    metricService.deleteMetricById(metricId)
      .then(() => this.getTodaysMetrics() )
  }

  getTodaysMetrics = () => {
    // metric.getAll(this.props.user._id)
    metricService.getTodaysMetrics(this.props.user._id)
    .then((data)=>{
      if (data.length === 0 && !this.state.myMetrics) {
        const basicMetrics = [
          {name: "Energy", description: "How are you feeling today?", value: 5},
          {name: "Motivation", description: "What is your level of motivation ?", value: 5},
          {name: "Positivity", description: "Rate your positivity level.", value: 5}
        ]
        const basicMetricPromises = basicMetrics.map( (oneMetric) =>  metricService.postNewMetrics(oneMetric))
        Promise.all(basicMetricPromises)
          .then((newlyCreatedBasicMetrics) => {
            this.setState({ myMetrics: newlyCreatedBasicMetrics})
          })
      }
      else {
        this.setState({myMetrics: data})
      }
    })
  }

  componentDidMount(){ 
    this.getTodaysMetrics();
  }

  render() {
    const {myMetrics} = this.state
    
   
    return (
      <div>
        <div className="main-div" >
        <h1>Your metrics</h1>
        <div className="add-metric-container">
        <Link className= 'button' to="/metric/add">Add new metric</Link>
        </div>
        </div>

        <div >
         {
           !myMetrics ?
           null
           :
           myMetrics.map((oneMetric) => {
            return (
              <MetricCard key={oneMetric._id} oneMetric={oneMetric} handleDelete={this.handleDelete}/>
              
              )
         })} 
        </div>
      
         
      </div>
    );
  }
}

export default withAuth(Dashboard)