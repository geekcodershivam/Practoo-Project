import React from 'react';
import testimonialData from '../../Data/testimonialData';
import TestimonialsCard from './TestimonialsCard';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = testimonialData;
    return (
        <section className="testimonials-area my-5 py-5">
            <div className="container">
                <div>
                    <h5 className="text-primary">Testimonials</h5>
                    <h1>What Our Patients <br/> Says</h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        testimonials.map( test => <TestimonialsCard testimonial={test}></TestimonialsCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;