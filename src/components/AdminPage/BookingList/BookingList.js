import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideNavBar from '../../BookingPage/SideNavBar/SideNavBar';
import BookingDetail from '../BookingDetail/BookingDetail';
import './BookingList.css';


const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userAllService, setUserAllService] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-crag-72285.herokuapp.com/bookingServiceList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUserAllService(data);
            })
    }, [loggedInUser.email]);

    return (
        <div className="row d-flex">
            <div className="text-white">
                <div className="col-md-3">
                    <SideNavBar></SideNavBar>
                </div>
                <div className="col-md-9 bookBack">
                    <div>
                        <h1 className="mb-5 pt-4 brandTitle">Booking Service List {userAllService.length}</h1>
                    </div>
                    <div className="row row-cols-3">
                        {
                            userAllService.map(sr => <BookingDetail sr={sr}></BookingDetail>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingList;