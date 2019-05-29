import React, { Component } from "react";
import { Link } from "react-router-dom";
import {withAuth} from "../lib/AuthProvider";



class NavBarApp extends Component {

  handleClick=()=>{
    this.props.logout() 
  }


  render() {
    //const { user, logout, isLoggedin } = this.props;
    return (
    <div>
      
      <nav>
        <div class="nav">
          <input type="checkbox" id="nav-check" />
          <div class="nav-header">
            <div class="nav-title">
              <span>F E E L T R I C S</span>
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
          <Link  to="/dashboard" target="_blank" >Your metrics</Link>
          <Link onClick={this.handleClick} to="/metric/add" target="_blank" >Log out</Link>
          
          </div>
        </div>
      </nav>
        
    </div>
    );
  }
}

export default withAuth(NavBarApp);
