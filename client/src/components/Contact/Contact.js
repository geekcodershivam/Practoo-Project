import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact-area my-5 py-3">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h3 className="text-secondary">Contact</h3>
                    <h1 className="text-white">Always Connect with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-secondary"> Submit </button>
                       </div>
                   </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;