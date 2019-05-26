import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Private from "./pages/Private";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import './App.css';

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import Dashboard from "./components/Dashboard";
import AddMetric from "./components/AddMetric";
import MetricDetails from "./components/MetricDetails";
import Profile from "./components/Profile";



import AuthProvider from "./lib/AuthProvider";





class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h1>F E E L T R I C S</h1>
          <Navbar />
          <Switch>
            <AnonRoute  className="input"  path="/signup" component={Signup} />
            <AnonRoute  className="input" path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/metric/add" component={AddMetric} />
            <PrivateRoute exact path="/metric/name" component={MetricDetails} />
            <PrivateRoute exact path="/profile" component={Profile} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
