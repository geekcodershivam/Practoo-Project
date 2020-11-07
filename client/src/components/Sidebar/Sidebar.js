import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faHome} from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="col-2 sidebar-area d-flex flex-column justify-content-between py-5 px-4">
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                        <span className="d-none d-md-block">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal}></FontAwesomeIcon>
                        <span className="d-none d-md-block">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/appointment-list" className="text-white">
                        <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                        <span className="d-none d-md-block">Appointment</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/patients" className="text-white">
                        <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                        <span className="d-none d-md-block">Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/prescription" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt}></FontAwesomeIcon>
                        <span className="d-none d-md-block">Prescription</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
                        <span className="d-none d-md-block">Settings</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faSignOutAlt} /> 
                    <span className="d-none d-md-block">Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;