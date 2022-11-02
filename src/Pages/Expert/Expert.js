import React from 'react';
import './Expert.css';
const Expert = ({ expert }) => {
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className="card">
                <img src={expert.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{expert.name}</h5>
                    <p className="card-text">{expert.description}</p>
                    <a href="#" className="btn btn-primary">Appoinment For Expert</a>
                </div>
            </div>
        </div>
    );
};

export default Expert;