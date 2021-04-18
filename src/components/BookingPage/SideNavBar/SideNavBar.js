import React from 'react';
import './SideNavBar.css';
// import logo from '../../images/logo.jpg';
import { Link } from 'react-router-dom';
import managePic from '../../../Images/manage.png';
import addPic from '../../../Images/add.png';
import homePic from '../../../Images/home.png';
import { useContext } from 'react';
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faCog, faSignOutAlt, faCalendar, faHome, faGripHorizontal, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';


const SideNavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    console.log("info at side nav bar: ", loggedInUser);

    useEffect(() => {
        fetch('https://enigmatic-crag-72285.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])

    return (
        <div className="adminNavbarArea">
            <h2 className="brandTitle text-white">Helping Hand</h2>
            <div className="navButton">
                <Link to='/bookingList'> <button >Booking Service List</button></Link>
            </div>

            <div className="navButton">
                <Link to='/addReview'> <button >Add Review</button></Link>
            </div>

            <div className="navButton">
                <Link to='/home'> <button >Back To Home</button></Link>
            </div>

            { isAdmin &&
                <div>
                    <div className="navButton">
                        <Link to='/orderStatus'> <button >Order Status</button></Link>
                    </div>

                    <div className="navButton">
                        <Link to='/addService'> <button >Add Service</button></Link>
                    </div>

                    <div className="navButton">
                        <Link to='/addAdmin'> <button >Add Admin</button></Link>
                    </div>


                    <div className="navButton">
                        <Link to='/manageServices'> <button >Manage Services</button></Link>
                    </div>
                </div>
            }

        </div>

    );
};

export default SideNavBar;