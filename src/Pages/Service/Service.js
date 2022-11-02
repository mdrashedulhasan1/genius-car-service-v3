import React from 'react';
import './Service.css';
const Service = ({service}) => {
    return (
        <div className='service-container'>
            <img src={service.img} alt="" />
            <h3>Name: {service.name}</h3>
            <p>{service.description}</p>
        </div>
    );
};

export default Service;