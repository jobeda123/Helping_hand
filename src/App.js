import './App.css';
import Home from './components/HomePage/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BookService from './components/BookingPage/BookService/BookService';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddReview from './components/AdminPage/AddReview/AddReview';
import BookingList from './components/AdminPage/BookingList/BookingList';
import OrderStatus from './components/AdminPage/OrderStatus/OrderStatus';
import AddAdmin from './components/AdminPage/AddAdmin/AddAdmin';
import ManageServices from './components/AdminPage/ManageServices/ManageServices';
import AddService from './components/AdminPage/AddService/AddService';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  // const [adminAddAction, setAdminAddAction] = useState(null);
  // const [cart, setCart] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <div className="App">
      <Router>
        <Switch>
          
        <Route exact path="/">
              <Home />
            </Route>

          <Route path="/home">
            <Home />
          </Route>

          <PrivateRoute path="/bookService">
            <BookService></BookService>
          </PrivateRoute>

          <PrivateRoute path="/bookingList">
            <BookingList></BookingList>
          </PrivateRoute>

          <PrivateRoute path="/addReview">
            <AddReview></AddReview>
          </PrivateRoute>

          <PrivateRoute path="/orderStatus">
            <OrderStatus></OrderStatus>
          </PrivateRoute>

          <PrivateRoute path="/addService">
            <AddService></AddService>
          </PrivateRoute>

          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>

          <PrivateRoute path="/manageServices">
            <ManageServices></ManageServices>
          </PrivateRoute>

          <Route path="/login">
            <Login/>
          </Route>
        </Switch>

      </Router>
    </div>
    </UserContext.Provider >
  );
}

export default App;
