import React from 'react';
import './BookingDetail.css';

const BookingDetail = ({ sr }) => {
    let styleColor;
    if (sr.OrderStatus === "on going") {
        styleColor = 'orange';
    }
    else if (sr.OrderStatus === "pending") {
        styleColor = 'red';
    }
    else {
        styleColor = "green";
    }

    const art = {
        backgroundColor: styleColor,
        width:"300px",
        marginBottom:"200px",
        borderRadius:"10px",
    }

    return (
        <div className>
            <div style={art} className="col bookCardDetail py-5 mb-5 text-white" >
                <h5>{sr.serviceName}</h5>
                <h6>Service Charge: {sr.price} Tk</h6>
                <h6>Order Status: {sr.OrderStatus}</h6>
            </div >
        </div>
    );
};

export default BookingDetail;