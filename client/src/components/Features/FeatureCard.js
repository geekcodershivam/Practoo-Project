import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faPhoneAlt, } from '@fortawesome/free-solid-svg-icons';

const FeatureCard = (props) => {
    const {icon,title,description,bg} = props.feature;
    return (
        <div className='col-md-4 py-3 text-white mb-2 rounded'>
            <div className={`${bg}`}>
                <div className="py-2 px-3 d-flex align-items-center">
                    <FontAwesomeIcon className="icon mr-4" icon={ 
                        icon==='clock'? faClock
                        : icon === 'location' ? faMapMarkerAlt
                        : faPhoneAlt
                    }></FontAwesomeIcon>
                    <div className="py-3">
                        <h6>{title}</h6>
                        <p className="small m-0">{description}</p>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default FeatureCard;