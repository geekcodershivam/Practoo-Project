import React from 'react';
import doctor from '../../images/doctor.png';
import './AppointmentBanner.css';

const AppointmentBanner = () => {
    return (
        <section className="appointment-banner-area my-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-primary">APPOINTMENT</h5>
                        <h1 className="my-4">Make An Appointment<br/> Today</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;