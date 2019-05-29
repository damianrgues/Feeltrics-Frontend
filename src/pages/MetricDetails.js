import React, { Component } from "react";
import metricService from '../lib/metric-service';
import Graphic from '../components/Graphic';


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




filterMetricsByDate =() =>{
  let today = [];
  let thisWeek = [];
  let thisMonth = [];

  this.state.allMetrics.forEach( (metricObj) => {
    console.log (typeof Date(metricObj.created_at) ); 
    const dateOfCreation = new Date(metricObj.created_at);
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
  const {isShowingDay,isShowingWeek , isShowingMonth } = this.state
  if ( isShowingDay ) { 
    return (<Graphic data={'day'} />) 
  }
  else if (isShowingWeek) {
    return (<Graphic  data={'week'}  />) 

  }
  else if (isShowingMonth) {
    return (<Graphic data={'month'}  />) 
  }
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

              <div >
                <form >
                    <button onClick={this.displayTodaysRating} className='button' type="submit">Today</button>
                </form>
              </div>

              <div >
                <form >
                    <button onClick={this.displayWeekChart} className='button' type="submit">This week</button>
                </form>
                
              </div>

              <div >
              <form >
                    <button onClick={this.displayMonthChart} className='button' type="submit">This month</button>
                </form>
              </div>

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
