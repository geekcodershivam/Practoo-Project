import React from 'react';
import { Link } from 'react-router-dom';
import './PatientsLogin.css';
import img from '../../images/backqq.png'
const PatientsLogin = () => {
    return ( 
		<div className="form-v8">
			<div className="page-content">
		<div className="form-v8-content">
		<div className="form-left">
				<img src={img} alt="form"/>
			<div className="link-btnp">
		<h3 className="headingP">Instant appointment with doctors.<strong>Guaranteed.</strong></h3>	
		
		<li><strong>100,000</strong> Verified doctors</li>
		<li><strong>3M+</strong> Patient recommendations</li>
		<li><strong>25M</strong> Patients/year</li>
			<Link to="/consultnow" className="btnp btn-primary">become our customer</Link>
			
			</div>	
			</div>
			
		</div>
	</div>
	</div>
    );
};

export default PatientsLogin;