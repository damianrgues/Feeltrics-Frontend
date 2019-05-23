import React, { Component } from "react";


class Profile extends Component {
  render() {
    //const { user, logout, isLoggedin } = this.props;
    return (
    <div>
      <img src="" alt=""/>
      <form action="/login" method="post">
          <input className="input" type="text" name="username" placeholder="username" />
          <input className="input" type="password" name="password" placeholder="password"/>
          <input className="input" type="password" name="password" placeholder="password"/>
         
          <button className="btn" type="submit">Done</button>
        </form>  
    </div>
    );
  }
}

export default Profile;
