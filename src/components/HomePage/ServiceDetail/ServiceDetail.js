import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ServiceDetail.css';



const ServiceDetail = ({ service }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log("user info before set service", loggedInUser);
    const serviceHandle = () => {
        console.log("Clicking For Services...");
        const newCart = {...loggedInUser, service};
        setLoggedInUser(newCart);
    }

    console.log("after cart info: ", loggedInUser);

    return (
        <div className="col-md-3 my-3 d-flex justify-content-center">
            <div class="card serviceCardArea" style={{ width: "250px" }}>
                <img src={service.imageURL} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{service.name}</h5>
                    <p class="card-text">{service.description}</p>
                    <Link to={'/bookService'}>
                            <button className="brandButton bookButton" onClick={serviceHandle} type="button">Book Service</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;