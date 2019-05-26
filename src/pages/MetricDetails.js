import React, { Component } from "react";


class MetricDetails extends Component {
  render() {
    //const { user, logout, isLoggedin } = this.props;
    return (
    <div>
      <div>
        <p>Today</p>
        <p>4</p>
      </div>
      <div>
        <p>This week</p>
        <p>4</p>
      </div>
      <div>
        <p>This month</p>
        <p>4</p>
      </div>
      <div>
        <p>This year</p>
        <p>4</p>
      </div>
      <div>
        {/* grafico */}
      </div>
    </div>
    );
  }
}

export default MetricDetails;
