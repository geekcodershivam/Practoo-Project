import React from 'react';
import { Link } from 'react-router-dom';
import './DoctorLogin.css';
import img from '../../images/doctorPa.png'
const DoctorLogin = () => {
    return ( 
		<div className="form-v8">
			<div className="page-content">
		<div className="form-v8-content">
		<div className="form-left">
				<img src={img} alt="form"/>
			<div className="link-btn">
		<h3 className="heading">Skip the travel!</h3>	
		<h5 className="heading2">Take Online Doctor Consultation</h5>	
		<p className="heading3">Private consultation + Audio call · Starts at just ₹199</p>
			<Link to="/consultnow" className="btnd btn-primary">Become Doctor</Link>
			
			</div>	
			</div>
			
		</div>
	</div>
	</div>
    );
};

export default DoctorLogin;