import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import CheckOut from '../CheckOut/CheckOut';
import './BookService.css';


const BookService = () => {

    return (
        <div className="row d-flex">
            <div>
                <CheckOut></CheckOut>
            </div>
        </div>
    );
};

export default BookService;