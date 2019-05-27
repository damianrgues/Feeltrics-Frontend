import React, { Component } from "react";
import metricService from '../lib/metric-service';

class MetricDetails extends Component {

  state={
    allMetrics: [],
    today:null,
    thisWeek:null,
    thisMonth:null,
  }


componentDidMount(){
  const metricName = this.props.match.params.name

  metricService.getMetricsByName(metricName)
    .then((response) => {
      console.log(response.data)
      this.setState({ allMetrics: response.data})
    })
    .catch((err) => console.log(err))

}

filterMetricsByDate(metricsArray) {
  let today = [];
  let thisWeek = [];
  let thisMonth = [];

  metricsArray.forEach( (metricObj) => {
    if( metricObj.created_at is today) {
      today.push(metricObj)
    }
    else if( metricObj.created_at from beginning of week until today) {
      thisWeek.push(metricObj)
    }
    else if( metricObj.created_at from beginning of month until today) {
      thisMonth.push(metricObj)
    }
  });

  console.log('test function', {today, thisWeek, thisMonth})

  this.setState({ today, thisWeek, thisMonth})
}
  

  render() {

    //const { user, logout, isLoggedin } = this.props;
    return (
    <div>
      <div className="metric-container">

        {
          this.state.allMetrics.map((metric) => {
            return (
              <div className="metric-container-info">
                <p>{metric.name}</p>
                <p> {metric.value}</p>
              </div>)
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
