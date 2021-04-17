import React from 'react';
import SideNavBar from '../../BookingPage/SideNavBar/SideNavBar';
import AddAdminForm from '../AddAdminForm/AddAdminForm';

const AddAdmin = () => {
    
    return (
        <div className="d-flex">
            <SideNavBar></SideNavBar>
            <AddAdminForm></AddAdminForm>
        </div>
    );
};

export default AddAdmin;