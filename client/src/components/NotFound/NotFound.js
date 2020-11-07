import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
    return (
        <div className="d-flex align-items-center justify-content-center text-center" style={{height:"100vh"}}>
            <div>
                <h1 className="">404</h1>
                <p className="lead">Not Found</p>
                <button onClick={()=>window.history.back()} className="btn btn-primary"><FontAwesomeIcon className="mr-2" icon={faArrowLeft}/> Go Back </button>
            </div>
        </div>
    );
};

export default NotFound;