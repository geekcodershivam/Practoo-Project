import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-area text-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h6 className="text-primary">Treatment</h6>
                        <ul className="list-unstyled mt-4">
                            <li><Link to="/">Emergency Dental Care</Link></li>
                            <li><Link to="/">Check Up</Link></li>
                            <li><Link to="/">Treatment of Personal Diseases</Link></li>
                            <li><Link to="/">Tooth Extraction</Link></li>
                            <li><Link to="/">Check Up</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6 className="text-primary">Services</h6>
                        <ul className="list-unstyled mt-4">
                            <li><Link to="/">Emergency Dental Care</Link></li>
                            <li><Link to="/">Check Up</Link></li>
                            <li><Link to="/">Treatment of Personal Diseases</Link></li>
                            <li><Link to="/">Tooth Extraction</Link></li>
                            <li><Link to="/">Check Up</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <h6 className="text-primary">Treatment</h6>
                        <ul className="list-unstyled mt-4">
                            <li><Link to="/">Emergency Dental Care</Link></li>
                            <li><Link to="/">Check Up</Link></li>
                            <li><Link to="/">Treatment of Personal Diseases</Link></li>
                            <li><Link to="/">Tooth Extraction</Link></li>
                            <li><Link to="/">Check Up</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <h6 className="text-primary">Our Address</h6>
                        <ul className="list-unstyled mt-4">
                            <li><Link to="/">New York - 101010 Hudson</Link></li>
                            <li><Link to="/">Yards</Link></li>
                        </ul>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><Link to="//facebook.com/home.php" target="_blank"><FontAwesomeIcon className="icon" icon={faFacebookF} /></Link></li>
                            <li className="list-inline-item"><Link to="//google.com" target="_blank"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></Link></li>
                            <li className="list-inline-item"><Link to="//instagram.com" target="_blank"><FontAwesomeIcon className="icon" icon={faInstagram} /></Link></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </div>
                </div>
                <div className="copyRight text-center">
                    <p>Developed By <strong>Practoo</strong></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;