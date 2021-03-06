import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.signup({ username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className='loginPage'>
        <div className='loginCard' >
        <h5>F E E L T R I C S</h5>
          <form onSubmit={this.handleFormSubmit}>
            <label className='loginlabel' >Username:</label>
            <input
              placeholder="name"
              className='loginImput'
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
            <label className='loginlabel' >Password:</label>
            <input
              placeholder="name"
              className='loginImput'
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
            <input type="submit" value="Signup"  className='button_login' />
            <Link className="singup2" to={"/dashboard"}><p>Already have account? Login</p></Link>
          </form>
          
        </div>
      </div>
    );
  }
}

export default withAuth(Signup);
