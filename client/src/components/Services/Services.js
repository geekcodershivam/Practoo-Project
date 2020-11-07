import React from 'react';
// import img from '../../images/CavityFilling.png';
import servicesData from '../../Data/servicesData';
import ServiceCard from './ServiceCard';
const Services = () => {
    const service = servicesData;
    return (
        <section className="service-area">
        <div className="container mb-5">
            <div className="container text-center">
                <h5 className="text-primary">Our Services</h5>
                <h1>Service We Provide</h1>
            </div>
            <div className="row mt-5 pt-3">
                {
                    service.map(sr=><ServiceCard service={sr}></ServiceCard>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;