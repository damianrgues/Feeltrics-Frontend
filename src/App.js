import React, { Component } from "react";
import { Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import './App.css';

import PrivateRoute from "./components/PrivateRoute";
import AnonRoute from "./components/AnonRoute";
import Dashboard from "./pages/Dashboard";
import AddMetric from "./pages/AddMetric";
import MetricDetails from "./pages/MetricDetails";
import Profile from "./pages/Profile";





import AuthProvider from "./lib/AuthProvider";





class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          
          <Switch>
            <AnonRoute  className="input"  path="/signup" component={Signup} />
            <AnonRoute  className="input" exact path="/" component={Login} />
            <AnonRoute  className="input" exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            {/* <PrivateRoute path="/metrics/:id" component={MetricDetails} /> */}
            <PrivateRoute exact path="/metric/add" component={AddMetric} />
            <PrivateRoute exact path="/metric/name/:name" component={MetricDetails} />
            <PrivateRoute exact path="/profile" component={Profile} />


            
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
