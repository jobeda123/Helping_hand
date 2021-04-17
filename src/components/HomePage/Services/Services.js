import React, { useEffect, useState } from 'react';
import houseShift from '../../../Images/houseShift.jpg';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';

const servicesData = [
    {
        serviceName: "House Shifting",
        description: "We are helping you to shift your hoise properly.",
        serviceImage: houseShift,
        price: 1000
    },
    {
        serviceName: "House Shifting",
        description: "We are helping you to shift your hoise properly.",
        serviceImage: houseShift,
        price: 2000
    },
    {
        serviceName: "House Shifting",
        description: "We are helping you to shift your hoise properly.",
        serviceImage: houseShift,
        price: 2000
    },
    {
        serviceName: "House Shifting",
        description: "We are helping you to shift your hoise properly.",
        serviceImage: houseShift,
        price: 2000
    },
    {
        serviceName: "House Shifting",
        description: "We are helping you to shift your hoise properly.",
        serviceImage: houseShift,
        price: 2000
    },
    {
        serviceName: "House Shifting",
        description: "We are helping you to shift your hoise properly.",
        serviceImage: houseShift,
        price: 2000
    }
]

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('http://localhost:5555/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                // setLoading(false);
            })
    }, [])

    return (
        <section style={{ marginTop:"100px"}} className="container">
            <h1 className="mt-5">Our Services{services.length}</h1>
            <h1 className="mb-5">________</h1>
            <div className="row">
                {
                    services.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Services;