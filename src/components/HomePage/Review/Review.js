import React from 'react';
import './Review.css';


const Review = (props) => {
    const { description, name, country, imageURL } = props.review;
    return (
        <div className="col-md-4 justify-content-center">
            <div className="review-card mx-5">
                <div className="d-flex text-center pt-2 justify-content-center">
                    <img style={{ height: "100px",paddingRight:"30px" }} src={imageURL} alt="" />
                    <div>
                        <h6 className="pt-4">{name}</h6>
                        <p className="">{country}</p>
                    </div>
                </div>
                <div className="pb-2">
                    <h5>{description}</h5>
                </div>
            </div>
        </div>

    );
};

export default Review;