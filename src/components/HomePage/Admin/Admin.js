import React, { useEffect, useState } from 'react';
import AdminDetail from '../AdminDetail/AdminDetail';
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


const Admin = () => {
    const [allAdmin, setAllAdmin] = useState([]);

    useEffect( () => {
        fetch('https://enigmatic-crag-72285.herokuapp.com/allAdmin')
        .then(res => res.json())
        .then(data => {
            setAllAdmin(data);
            console.log({data});
        })
    }, [])

    return (
        <section style={{ marginTop:"100px"}} className="container">
            <h1 className="brandTitle">Our Team</h1>
            <h1 className="mb-2 brandTitle">________</h1>
            <div className="row">
                {
                    allAdmin.map(admin => <AdminDetail admin={admin}></AdminDetail>)
                }
            </div>
        </section>
    );
};

export default Admin;