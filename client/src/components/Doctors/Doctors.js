import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import doctorImg from '../../images/doctor-sm.png';

const Doctors = () => {
    return (
        <section className="doctors-area my-5">
            <div className="container">
                <h4 className="text-primary text-center mb-3">Our Doctors</h4>
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img src={doctorImg} className="img-fluid" alt=""/>
                        <h4 className="mt-3">Dr. Coudi</h4>
                        <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> +880-198-5335245</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={doctorImg} className="img-fluid" alt=""/>
                        <h4 className="mt-3">Dr. Coudi</h4>
                        <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> +880-198-5335245</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src={doctorImg} className="img-fluid" alt=""/>
                        <h4 className="mt-3">Dr. Coudi</h4>
                        <p><FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon> +880-198-5335245</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Doctors;