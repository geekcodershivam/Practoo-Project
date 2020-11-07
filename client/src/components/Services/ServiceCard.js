import React from 'react';

const ServiceCard = (props) => {
    const {name,img,description} = props.service;
    return (
        <div className="col-md-4 mb-5 text-center">
            <img src={img} height="90" alt=""/>
            <h4 className="my-4">{name}</h4>
            <p className="text-secondary">{description}</p>
        </div>
    );
};

export default ServiceCard;