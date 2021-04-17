import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import CheckOut from '../CheckOut/CheckOut';
import './BookService.css';


const BookService = () => {
    
    return (
        <div className="d-flex">
            {/* <SideNavBar></SideNavBar> */}
            <CheckOut></CheckOut>
        </div>
    );
};

export default BookService;