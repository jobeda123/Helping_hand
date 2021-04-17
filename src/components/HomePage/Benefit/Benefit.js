import React from 'react';
import './Benefit.css';

const Benefit = ({benefit}) => {
    return (
        <div className="col-md-3 my-5 d-flex justify-content-center">
            <div className="benefit-card">
                <img className="mt-3" style={{ height:"100px"}} src={benefit.image} alt=""/>
                <h5 className="my-3">{benefit.benefit}</h5>
            </div>
        </div>
    );
};

export default Benefit;