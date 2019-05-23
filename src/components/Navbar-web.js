import React, { Component } from "react";
import { Link } from "react-router-dom";



class NavBarApp extends Component {
  render() {
    //const { user, logout, isLoggedin } = this.props;
    return (
    <div>
      <nav>
        <div class="nav">
          <input type="checkbox" id="nav-check" />
          <div class="nav-header">
            <div class="nav-title">
              <span>Feeltrics</span>
            </div>
          </div>
          <div class="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

          <div class="nav-links">
          <a href="/group" target="_blank">Groups</a>
          <a href="/logout" target="_blank">Log out</a>
          </div>
        </div>
      </nav>
        
    </div>
    );
  }
}

export default NavBarApp;
