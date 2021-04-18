import React, { useContext } from 'react';
import './CheckOut.css';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { UserContext } from '../../../App';


const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log("user Info at checkout: ", loggedInUser);
    const { price, name } = loggedInUser.service;


    return (
        <div className="checkout-area">
            <div className="checkout-body">
                <h1 className="brandTitle">Check Out</h1>
                <div className="row d-flex">
                    <div className="col-md-6 text-white pt-5">
                        <h3>Service Type: {name}</h3>
                        <h4>Service Charge: {price} tk </h4>
                    </div>
                    <div className="checkout-card col-md-6 mt-5">
                        <ProcessPayment></ProcessPayment>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;