import React, { Component } from "react";
import { Link } from "react-router-dom";



class Dashboard extends Component {
  render() {
    //const { user, logout, isLoggedin } = this.props;
    return (
      <div>
          <div>
             <NavBarApp />
            </div>
            <h2>Your Metrics</h2>
            <div class='container-metric'>
            <div>
              <p>METRIC NAME</p>
              </div>
              <div class='slider-bar'>
              </div>
              <div>
                  <p>Description</p>
                  <form action="">
                    <button type="button">Done</button>
                  </form>
              </div>
          </div>
      </div>
    );
  }
}

export default Dashboard;
