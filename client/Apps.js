import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import PatientRegister from "./components/patientauth/register";
import PatientLogin from "./components/patientauth/login";
import PatientVerify from './components/patientauth/verify';

import DoctorRegister from "./components/doctorauth/register";
import DoctorLogin from "./components/doctorauth/login";
import DoctorVerify from './components/doctorauth/verify';

import Navbar from './components/navbar/navbar';
import PrivateNavbar from './components/privateroutes/PrivateNavbar'
import PatientDashboard from "./components/patientdashboard/mainpage";
import DoctorDashboard from "./components/doctordashboard/mainpage";
import DoctorOTP from "./components/doctordashboard/otp";
import Profile from "./components/doctordashboard/patientprofile"
import Landing from "./components/landing/Landing";
import Footer from "./components/navbar/footer"
import dashProfile from "./components/patientdashboard/profile"
if (localStorage.jwtToken) {

  const token = localStorage.jwtToken;
  setAuthToken(token);

  const decoded = jwt_decode(token);

  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000; 
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App"> 
          <Switch>
              <PrivateNavbar  component={Navbar} />
            </Switch>  
            <Route exact path="/" component={Landing} />
            <Route exact path="/patient/dashboard" component={PatientDashboard} />
            <Route exact path="/doctor/dashboard" component={DoctorDashboard} />
            <Route exact path="/doctor/otp" component={DoctorOTP} />
            <Route exact path="/patient/register" component={PatientRegister} />
            <Route exact path="/patient/verify" component={PatientVerify} />
            <Route exact path="/patient/login" component={PatientLogin} />
            <Route exact path="/doctor/register" component={DoctorRegister} />
            <Route exact path="/doctor/verify" component={DoctorVerify} />
            <Route exact path="/doctor/login" component={DoctorLogin} />
            <Route  path="/profile/:id" component={dashProfile} />
            <Route  path="/doctor/profile/:id" component={Profile} />
            < Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
