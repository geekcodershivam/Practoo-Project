import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useEffect } from 'react';
import AppointmentArea from './AppointmentArea';
import './Appointment.css';
import AppointmentBooking from './AppointmentBooking';
const Appointment = () => {
    useEffect(()=>{window.scrollTo(0,0)},[])
    return (
        <React.Fragment>
            <Header></Header>
            <AppointmentArea></AppointmentArea>
            <AppointmentBooking></AppointmentBooking>
            <Footer></Footer>
        </React.Fragment>
    );
};

export default Appointment;