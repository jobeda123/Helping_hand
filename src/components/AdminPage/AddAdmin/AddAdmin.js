import React from 'react';
import SideNavBar from '../../BookingPage/SideNavBar/SideNavBar';
import AddAdminForm from '../AddAdminForm/AddAdminForm';

const AddAdmin = () => {

    return (
        <div className="row d-flex">
            <div className="col-md-3">
                <SideNavBar></SideNavBar>
            </div>
            <div className="col-md-9 reviewBack">
                <AddAdminForm></AddAdminForm>
            </div>
        </div>
    );
};

export default AddAdmin;