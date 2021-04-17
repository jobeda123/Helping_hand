import React, { useContext } from 'react';
import './CheckOut.css';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { UserContext } from '../../../App';


const CheckOut = () => {
    const [ loggedInUser, setLoggedInUser ] = useContext(UserContext);
    console.log("user Info: ",loggedInUser);
    const {serviceName, price} = loggedInUser.service;

    return (
        <div className="checkout-area">
            <div className="checkout-header d-flex">
                <h1 style={{ marginLeft: "80px", marginTop: "25px" }}>Book</h1>
                <h4 className="text-dark" style={{ marginLeft: "700px", marginTop: "40px" }}>{loggedInUser.name}</h4>
            </div>

            <div className="checkout-body d-flex">
                <div>
                    <h1>Checkout description</h1>
                    <h3>Service Type: {serviceName}</h3>
                    <h4>Service Charge: {price} tk </h4>
                </div>
                <div className="checkout-card">
                    <ProcessPayment></ProcessPayment>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;