import './Login.css';
import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import logo from '../../Images/wilson.png';
import googleIcon from '../../Images/googleIcon.png';
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedInUser: false,
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleSignInWithGoogle = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(res => {
                // The signed-in user info.
                console.log(res.user);
                // console.log("Sign in with google----", res.user.displayName);
                const newUserInfo = { ...user };
                newUserInfo.error = '';
                newUserInfo.success = true;
                newUserInfo.name = res.user.displayName;
                newUserInfo.email = res.user.email;
                newUserInfo.isSignedInUser = true;
                updateUserName(newUserInfo.name);
                setUser(newUserInfo);
                //var user = res.user;
                setLoggedInUser(newUserInfo);
                // console.log("Sign in with google and user info----", newUserInfo);
                setUserToken();
                console.log("Sign in with google and logged in user----", loggedInUser);
                history.replace(from);
            })
            .catch(error => {
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
    }

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
            // Send token to your backend via HTTPS
            // ...
            sessionStorage.setItem("token", idToken);
        }).catch(function (error) {
            // Handle error
        });
    }



    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(() => {
            // Update successful.
            console.log("User Name Updated Successfully");
        }).catch(error => {
            // An error happened.
            console.log(error);
        });

    }


    return (
        <div className="header">
            {/* <img className="imgStyle" src={logo} alt=""></img> */}
            <h1>Login</h1>
            <div className="SignIn">
                <h2>__________Sign In__________</h2>
                <button onClick={handleSignInWithGoogle}> <span> <img id="googleIcon" src={googleIcon} alt="/"></img> </span>   Continue With Google</button>
            </div>

        </div>
    );
};

export default Login;