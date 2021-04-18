import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';


const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div className="container-fluid d-flex justify-content-around py-3 navbarArea">
            <h2 className="brandTitle">Helping Hand</h2>
            
            <nav className="d-flex">
                <Link className="ps-4 navbarLink" to="/home">Home</Link>
                <Link className="ps-4 navbarLink" to="/about">About us</Link>
                <Link className="ps-4 navbarLink" to="/benefits">Benefits</Link>
                <Link className="ps-4 navbarLink" to="/contact">Contact</Link>
                <Link className="ps-4 navbarLink" to="/bookingList">Admin</Link>
                { loggedInUser.success && <h3 className="userNameTitile">{loggedInUser.name}</h3> }
            </nav>
                { !loggedInUser.success? 
                    <Link to='/login'> <button className="brandButton">LOG IN</button> </Link>
                    : <Link to='/logout'> <button className="brandButton">LOG OUT</button> </Link>
                }
            
        </div>
    );
};

export default Navbar;