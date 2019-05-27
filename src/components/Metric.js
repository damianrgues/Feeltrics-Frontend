import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";


class Metrics extends Component {
  render() {
    
    return (
      <div>
      <div>
          <p>Energy</p>
          <div>
              {/* sliderbar */}

          </div>
          <p>description</p>
      </div>
      </div>
    );
  }
}

export default Metrics;
