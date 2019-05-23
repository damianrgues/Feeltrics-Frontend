import React, { Component } from "react";


class MetricDetails extends Component {
  render() {
    //const { user, logout, isLoggedin } = this.props;
    return (
    <div>
      <h2>New metric</h2>
      <div>
        <form action="/login" method="post">
          <input className="input" type="text" name="username" placeholder="username" />
          <input className="input" type="password" name="password" placeholder="password"/>
          <button className="btn" type="submit">Choose Color</button>
          <button className="btn" type="submit">Done</button>
        </form>  
    </div>
              
    </div>
    );
  }
}

export default MetricDetails;
