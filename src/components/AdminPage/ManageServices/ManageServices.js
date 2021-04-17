import SideNavBar from '../../BookingPage/SideNavBar/SideNavBar';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ManageServiceCard from '../ManageServiceCard/ManageServiceCard';



const ManageServices = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allService, setAllService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5555/allService')
            .then(res => res.json())
            .then(data => {
                console.log("Data in all service in admin: ", data);
                setAllService(data);
            })
    }, []);


    return (
        <div className="row d-flex">
            <div className="col-md-3">
                <SideNavBar></SideNavBar>
            </div>
            <div className="col-md-9">
                <h1>All Service List:{allService.length}</h1>
                <div className="row row-cols-3">
                    {
                        allService.map(service => <ManageServiceCard service={service}></ManageServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageServices;