import React from 'react';
import './ManageServiceCard.css';
import remove from '../../../Images/remove.png';

const ManageServiceCard = ({ service }) => {

    const handleServiceRemove = (id) => {
        console.log("Remove Clicking.......", id);
        fetch(`http://localhost:5555/delete/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            console.log('Result---->', result);
            // if (result) {
            //     event.target.parentNode.style.display = 'none';
            //     }
            })
        .catch(error=>console.log(error))    
    }

    return (
        <div style={{backgroundColor:"green"}} className = "col bookCardDetail py-5 my-5 ms-5 text-white" >
            <h5>{service.name}</h5>
            <h6>Service Charge: {service.price} Tk</h6>
            <button onClick={() => handleServiceRemove(service._id)} id="removeBtn"><img style={{ width: '30px' }} src={remove} alt="/"></img></button>
        </div >
    );
};

export default ManageServiceCard;