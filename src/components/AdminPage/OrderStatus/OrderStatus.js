import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideNavBar from '../../BookingPage/SideNavBar/SideNavBar';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './OrderStatus.css';


const OrderStatus = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [allUserInfo, setAllUserInfo] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-crag-72285.herokuapp.com/allServiceList')
            .then(res => res.json())
            .then(data => {
                console.log("Data in order status: ", data);
                setAllUserInfo(data);
            })
    }, [loggedInUser.email]);


    // for table
    const StyledTableCell = withStyles(() => ({
        head: {
            backgroundColor: 'pink',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 16,
        },
        body: {
            fontSize: 16,
            color: 'rgb(112, 112, 206)',
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);


    const useStyles = makeStyles({
        table: {
            minWidth: 200,
        },
    });

    const classes = useStyles();

    return (
        <div className="row d-flex">
            <div className="col-md-3">
                <SideNavBar></SideNavBar>
            </div>
            <div className="col-md-9  reviewBack">
                <div className="orderStatusArea  tableArea">
                    <div>
                        <h1 className="brandTitle pt-3 mb-3">Order Status {allUserInfo.length}</h1>
                    </div>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow >
                                    <StyledTableCell>Name</StyledTableCell>
                                    <StyledTableCell align="left">Emaill</StyledTableCell>
                                    <StyledTableCell align="left">Service</StyledTableCell>
                                    <StyledTableCell align="left">Price&nbsp;(Tk)</StyledTableCell>
                                    <StyledTableCell align="left">Pay With</StyledTableCell>
                                    <StyledTableCell align="left">Status</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {allUserInfo.map(info => (
                                    <StyledTableRow key={info.cardID}>
                                        <StyledTableCell component="th" scope="row">
                                            {info.userName}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{info.email}</StyledTableCell>
                                        <StyledTableCell align="left">{info.serviceName}</StyledTableCell>
                                        <StyledTableCell align="left">{info.price}</StyledTableCell>
                                        <StyledTableCell align="left">Credit Card</StyledTableCell>
                                        <StyledTableCell align="left">{info.OrderStatus}</StyledTableCell>
                                        {/* <StyledTableCell align="right"><button onClick={() => handleCakeRemove(cake._id)} id="removeBtn"><img style={{ width: '30px' }} src={remove} alt="/"></img></button></StyledTableCell> */}
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
};

export default OrderStatus;