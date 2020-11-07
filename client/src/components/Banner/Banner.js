import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import banner from '../../images/banner.png';
// import appointmentData from '../../Data/appointmentData';

const Banner = () => {
    // const appointments = appointmentData;

    // const handleInsertAppointment =()=>{
    //     console.log(appointments)
    //     fetch("https://doctors-portal-sabbir.herokuapp.com/addAppointments",{
    //         method:"POST",
    //         body:JSON.stringify(appointments),
    //         headers : {
    //             "Content-type" : "application/json"
    //         }
    //     })
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // }
    return (
        <section className="banner-area">
            <div className="container">
                <div className="row align-items-center" style={{height:"100vh"}}>
                    <div className="col-md-4">
                        <h6>Goodbye doubts</h6><h1><strong>Say Hello Doctor.</strong></h1>
                        <p>Patients trust us because we trust only the best. Practo integrates different parts of the healthcare ecosystem and connects all of them together.</p>
                        {/* <button className="btn btn-danger" onClick={handleInsertAppointment}>Insert Appointment</button> */}
                        <Link to="/consultnow" className="btn btn-primary">Consult Now</Link>
                    </div>
                    <div className="col-md-6 d-none d-md-block offset-2">
                        <img src={banner} className="w-100" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;