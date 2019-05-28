import React, { Component } from "react";
import metricService from '../lib/metric-service';
import Graphic from '../components/Graphic';


class MetricDetails extends Component {

  state={
    allMetrics: [],
    today:null,
    thisWeek:null,
    thisMonth:null,
  }




filterMetricsByDate =() =>{
  let today = [];
  let thisWeek = [];
  let thisMonth = [];

  this.state.allMetrics.forEach( (metricObj) => {
    console.log (typeof Date(metricObj.created_at) ); 
const dateOfCreation = new Date(metricObj.created_at) ;
const currentDay = new Date(); 

    if( dateOfCreation.getDay() === currentDay.getDay() &&  dateOfCreation.getMonth() === currentDay.getMonth() && dateOfCreation.getFullYear() === currentDay.getFullYear()) {
      today.push(metricObj)
    }
    else if( dateOfCreation.getMonth() === currentDay.getMonth() && dateOfCreation.getFullYear() === currentDay.getFullYear() ) {
      thisWeek.push(metricObj)
    }
    else if( dateOfCreation.getFullYear() === currentDay.getFullYear() ) {
      thisMonth.push(metricObj)
    }
  });

  console.log('test function', {today, thisWeek, thisMonth})

  this.setState({ today, thisWeek, thisMonth})
}
  
componentDidMount(){
  const metricName = this.props.match.params.name

  metricService.getMetricsByName(metricName)
    .then((response) => {
      console.log(response.data)
      this.setState({ allMetrics: response.data } , this.filterMetricsByDate)
    })
    .catch((err) => console.log(err))

}


  render() {

    //const { user, logout, isLoggedin } = this.props;
    return (
    <div>
      <div className="metric-container">

        {
          this.state.allMetrics.map((metric) => {
            return (
              <div>
              
              <h3>{metric.name}</h3>
              <div className="metric-container-info">
      
                <p>today</p>
                <p> {metric.value}</p>
              </div>

              <div className="metric-container-info">
      
                <p>this week</p>
                <p> {metric.value}</p>
              </div>

              <div className="metric-container-info">
      
                <p>this month</p>
                <p> {metric.value}</p>
              </div>

              <Graphic />
              </div>
              )

          })
        }
        {/* <div className="metric-container-info">
          <p>This week</p>
          <p>4</p>
        </div>
        <div className="metric-container-info">
          <p>This month</p>
          <p>4</p>
        </div>
        <div> 
        </div>*/}
          {/* grafico */}
      </div>
    </div>
    );
  }
}

export default MetricDetails;
