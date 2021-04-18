import React from 'react';
import './AdminDetail.css';



const AdminDetail = ({ admin }) => {

    return (

        <div className="col-md-6 my-5 d-flex justify-content-center">
            <div className="admin-card">
                <img className="mt-3" style={{ height: "150px" }} src={admin.imageURL} alt="" />
                <h5 className="my-3">{admin.name}</h5>
                <p>{admin.position}</p>
            </div>
        </div>
    );
};

export default AdminDetail;