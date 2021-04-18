import React from 'react';
import './ManageServiceCard.css';
import remove from '../../../Images/remove.png';

const ManageServiceCard = ({ service }) => {

    const handleServiceRemove = (id) => {
        console.log("Remove Clicking.......", id);
        fetch(`https://enigmatic-crag-72285.herokuapp.com/delete/${id}`, {
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

    const art = {
        backgroundColor: "rgb(112, 112, 206)",
        width:"300px",
        marginBottom:"50px",
        borderRadius:"10px",
    }

    return (
        <div style={art} className = "col bookCardDetail py-5 ms-5 text-white" >
            <h5>{service.name}</h5>
            <h6>Service Charge: {service.price} Tk</h6>
            <button className="deleteBtn" onClick={() => handleServiceRemove(service._id)} id="removeBtn"><img style={{ width: '40px' }} src={remove} alt="/"></img></button>
        </div >
    );
};

export default ManageServiceCard;