import React from 'react';
import ReactCalender from '../Calender/Calender';
import banner from '../../images/banner.png';
import appointmentData from '../../Data/appointmentData';
const AppointmentArea = () => {
    return (
        <section className="appointment-area my-5 py-5">
            <div className="container">
                <div className="row" style={{height:"100vh"}}>
                    <div className="col-md-6 align-self-center">
                        <div className="calender-area pr-md-5 mr-md-5">
                            <h2 className="col-md-12 mb-5">Appointment</h2>
                            <ReactCalender></ReactCalender>
                        </div>
                    </div>
                    <div className="col-md-6 align-self-center">
                        <img src={banner} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentArea;