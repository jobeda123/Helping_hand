import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideNavBar from '../../BookingPage/SideNavBar/SideNavBar';
import BookingDetail from '../BookingDetail/BookingDetail';


const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userAllService, setUserAllService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5555/bookingServiceList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserAllService(data);
            })
    }, [loggedInUser.email]);

    return (
        <div className="row d-flex">
            <div className="col-md-3">
                <SideNavBar></SideNavBar>
            </div>
            <div className="col-md-9">
                <h1>Booking List:{userAllService.length}</h1>
                <div className="row row-cols-3">
                    {
                        userAllService.map(sr => <BookingDetail sr={sr}></BookingDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookingList;