import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <>
        {isLoggedin ? (
          <>
            <p>username: {user.username}</p>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </>
    );
  }
}

export default withAuth(Navbar);
