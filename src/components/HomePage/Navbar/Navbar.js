import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../../Images/logo.PNG';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="container-fluid d-flex justify-content-around my-3">
            <h2>Helping Hand</h2>
            
            <nav className="d-flex">
                <Link className="ps-4 navbarLink" to="/home">Home</Link>
                <Link className="ps-4 navbarLink" to="/about">About us</Link>
                <Link className="ps-4 navbarLink" to="/benefits">Benefits</Link>
                <Link className="ps-4 navbarLink" to="/contact">Contact</Link>
                <Link className="ps-4 navbarLink" to="/bookingList">Admin</Link>
                { loggedInUser.success && <p className="userNameTitle">{loggedInUser.name}</p> }
            </nav>
                { !loggedInUser.success? 
                    <Link to='/login'> <button className="btn-primary">LOG IN</button> </Link>
                    : <Link to='/logout'> <button className="btn-primary">LOG OUT</button> </Link>
                }
            
        </div>
    );
};

export default Navbar;