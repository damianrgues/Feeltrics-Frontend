import React, { Component } from "react";


class AddMetric extends Component {
  render() {
    //const { user, logout, isLoggedin } = this.props;
    return (
    <div>
      <h2>New metric</h2>
      <div>
        <form action="/login" method="post">
          <input class="input" type="text" name="username" placeholder="username" />
          <input class="input" type="password" name="password" placeholder="password"/>
          <button class="btn" type="submit">Choose Color</button>
          <button class="btn" type="submit">Done</button>
        </form>  
    </div>
              
    </div>
    );
  }
}

export default AddMetric;
