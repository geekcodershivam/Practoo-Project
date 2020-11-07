import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';
import { useEffect } from 'react';
// import icon from '../../images/doctorPortal.png';

const Header = () => {
    const [isSticky,setIsSticky] = useState(false);
    const [isCollapse,setIsCollapse] = useState(null);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>50)
            {
                setIsSticky(true)
            }
            else
            {
                setIsSticky(false)
            }
        })
    },[])
    return (
        <nav className={(isSticky) ?"shadow-sm navbar navbar-expand-sm navbar-light bg-white py-3 fixed-top":"navbar navbar-expand-sm navbar-light py-4 fixed-top"}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    {/* <img src={icon} alt=""/> */}
                   <strong>Practoo</strong>
                </Link>
                <button onClick={()=>setIsCollapse(!isCollapse && 'show')} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isCollapse}`} id="navbarText">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/doctor"> Doctor </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/patients"> Patients </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;