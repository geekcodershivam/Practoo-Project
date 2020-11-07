import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';
import img from '../../images/doctorPa.png'
const ContactUs = () => {
    return ( 
		<div className="form-v8">
			<div className="page-content">
		<div className="form-v8-content">
		<div className="form-left">
				<img src={img} alt="form"/>
			<div className="link-btn">
		<h3 className="heading">Call now</h3>	
		<Link to="/consultnow" className="btn btn-primary">+2025550295</Link>
		<p className="heading1"><strong>Suite 316-3602 Gilmore Way Burnaby, BC V5G 4W9 New Delhi, India</strong></p>
		
			</div>	
			</div>
			
		</div>
	</div>
	</div>
    );
};

export default ContactUs;