import React, { Component } from "react";
import metricService from '../lib/metric-service';
import Graphic from '../components/Graphic';
import NavbarApp from "../components/NavbarApp";



class MetricDetails extends Component {

  state={
    allMetrics: [],
    today:null,
    thisWeek:null,
    thisMonth:null,
    isShowingDay: false,
    isShowingWeek: false,
    isShowingMonth: false
  }



  getMetricValue = (metricObj) => metricObj.value;

filterMetricsByDate =() =>{
  let today = [];
  let thisWeek = [5];
  let thisMonth = [5];



  this.state.allMetrics.forEach( (metricObj) => {
    console.log (typeof Date(metricObj.created_at) ); 
    const dateOfCreation = new Date(metricObj.created_at);
    const currentDay = new Date(); 

    if( dateOfCreation.getDay() === currentDay.getDay() &&  dateOfCreation.getMonth() === currentDay.getMonth() && dateOfCreation.getFullYear() === currentDay.getFullYear()) {
      today.push(this.getMetricValue(metricObj))
    }
    if( dateOfCreation.getMonth() === currentDay.getMonth() && dateOfCreation.getFullYear() === currentDay.getFullYear() ) {
      thisWeek.push(this.getMetricValue(metricObj))
    }
    if( dateOfCreation.getFullYear() === currentDay.getFullYear() ) {
      thisMonth.push(this.getMetricValue(metricObj))
    }
  });

  console.log('test function', {today, thisWeek, thisMonth})

  this.setState({ today, thisWeek, thisMonth})
}

displayTodaysRating = (event) => {
 
event.preventDefault()
this.setState ({
  isShowingDay: true,
    isShowingWeek: false,
    isShowingMonth: false
})

}

displayWeekChart = (event) => {
  event.preventDefault()
  this.setState ({
    isShowingDay: false,
      isShowingWeek: true,
      isShowingMonth: false
  })
}

displayMonthChart = (event) => {
  event.preventDefault()
  this.setState ({
    isShowingDay: false,
      isShowingWeek: false,
      isShowingMonth: true
  })
}

showGraph = () =>{
  const {isShowingDay, isShowingWeek, isShowingMonth, today, thisWeek, thisMonth } = this.state
  console.log(today)
  
  if ( isShowingDay ) {
    const metricName = this.props.match.params.name;
    return (
      <div>
        <h3>{metricName} Today</h3>
        <h1>{today[0]} / 10</h1>
      </div>) 
  }
  else if (isShowingWeek) {
    return (<Graphic  name={'Week'} data={thisWeek}/>) 

  }
  else if (isShowingMonth) {
    return (<Graphic name={'Month'} data={thisMonth} />) 
  }
}

componentDidMount(){
  const metricName = this.props.match.params.name

  metricService.getMetricsByName(metricName)
    .then((response) => {
      this.setState({ allMetrics: response.data } , this.filterMetricsByDate)
    })
    .catch((err) => console.log(err))

}



  render() {

    //const { user, logout, isLoggedin } = this.props;
    return (
    <div>
    <NavbarApp />
      <div className="metric-container">

        {
          this.state.allMetrics.map((metric) => {
            return (
              <div>
                <h3>{metric.name}</h3>
                <button onClick={this.displayTodaysRating} className='button'>Today</button>
                <button onClick={this.displayWeekChart} className='button'>This week</button>
                <button onClick={this.displayMonthChart} className='button'>This month</button>
              
                { this.showGraph() }
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
