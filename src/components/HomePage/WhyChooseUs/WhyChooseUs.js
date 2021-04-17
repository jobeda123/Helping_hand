import React from 'react';
import './WhyChooseUs.css';
import Benefit from '../Benefit/Benefit';
import freeDelivery from '../../../Images/freeDelivery.PNG';
import service24Hour from '../../../Images/service24Hour.PNG';
import saveMoney from '../../../Images/saveMoney.png';
import safety from '../../../Images/safety.png';

const benefits =[
    {
        benefit:'24/7 Hours Services',
        image: service24Hour
    },
    {
        benefit:'Ensuring Safety',
        image: safety
    },
    
    {
        benefit:'Save Money',
        image: saveMoney
    },
    {
        benefit:'Free Delivery Charge',
        image: freeDelivery
    }
];

const WhyChooseUs = () => {
    return (
        <section style={{ marginTop:"100px"}} className="container">
            <h1 className="mt-5">Why Choose Us</h1>
            <h1 className="mb-5">________</h1>
            <div className="row">
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>
        </section>
    );
};

export default WhyChooseUs;