import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import img from '../../images/doctorPa.png'
const DoctorLogin = () => {
    return ( 
		<div className="form-v8">
			<div className="page-content">
		<div className="form-v8-content">
		<div className="form-left">
				<img src={img} alt="form"/>
			<div className="link-btn">
		<h5 className="heading">We’re ISO 27001 certified </h5>	
		<h5 className="heading2"></h5>	
		<p className="heading3"> —has certified that <strong>Practoo</strong> ensures confidentiality,availability and integrity of its information assets.</p>
			{/* <Link to="/consultnow" className="btnd btn-primary">Become Doctor</Link> */}
			
			</div>	
			</div>
			
		</div>
	</div>
	</div>
    );
};

export default DoctorLogin;