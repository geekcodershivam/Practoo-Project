import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import './App.css';
import App from './App'
import Home from './components/Home/Home';
import AboutPage from './components/AboutPage/AboutPage'
import ContactUsPage from './components/ContactUsPage/ContactUsPage'
import PatientsPage from './components/PatientsPage/PatientsPage';
import DoctorPage from './components/DoctorPage/DoctorPage';
// import Patients from './components/Patients/Patients';
// import Prescription from './components/Prescription/Prescription';
import NotFound from './components/NotFound/NotFound';
// export const CalenderContext = createContext();
// export const InfoContext = createContext();

function Apps() {
 
  return (
    // <CalenderContext.Provider value = {calenderContextValue}>
    //   <InfoContext.Provider value={infoContextValue}>
        <Router>
          <Switch>
            <Route exact path = "/">
              <Home></Home>
            </Route>
            <Route exact path = "/about">
              <AboutPage/>
            </Route>
            <Route path="/patients">
              <PatientsPage/>
            </Route>
            <Route path="/contactus">
              <ContactUsPage/>
            </Route>
            <Route path="/consultnow">
              <App/>
            </Route>
            <Route path="/doctor">
                <DoctorPage/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route> 
            <Route path="*">
                <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    //   </InfoContext.Provider>
    // </CalenderContext.Provider>
  );
}

export default Apps;
