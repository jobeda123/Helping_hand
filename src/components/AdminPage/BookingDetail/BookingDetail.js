import React from 'react';
import './BookingDetail.css';

const BookingDetail = ({ sr }) => {
    let styleColor; 
    if (sr.OrderStatus === "on going") {
        styleColor = 'yellow';
    }
    else if(sr.OrderStatus === "pending"){
        styleColor = 'red';
    }
    else{
        styleColor = "green";
    }

    const art = {
        backgroundColor: styleColor
    }

    return (
        <div style={art} className = "col bookCardDetail py-5 my-5 ms-5 text-white" >
            <h5>{sr.serviceName}</h5>
            <h6>Service Charge: {sr.price} Tk</h6>
            <h6>Order Status: {sr.OrderStatus}</h6>
        </div >
    );
};

export default BookingDetail;