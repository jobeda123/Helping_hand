import React from 'react';
import './Review.css';


const Review = (props) => {
    const { description, name, country, imageURL } = props.review;
    return (
        <div className="w-25 col-md-3 review-card mx-5">
            <div className="text-center pt-5">
                <img style={{height:"100px"}} src={imageURL}  alt=""/>
                <h6  className="pt-2">{name}</h6>
                <p className="">{country}</p>
            </div>
            <div className="pt-3">
                <h5>{description}</h5>
            </div>
        </div>
        
    );
};

export default Review;