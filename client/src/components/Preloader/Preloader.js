import React from 'react';
import preloader from '../../images/preloader.gif';

const Preloader = () => {
    return (
        <div className="col-12 py-5 my-5 text-center">
            <img src={preloader} alt=""/>            
        </div>
    );
};

export default Preloader;