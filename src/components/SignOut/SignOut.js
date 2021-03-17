import firebase from 'firebase/app';
import React, { useContext } from 'react';
import { userContext } from '../../App';
const SignOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <button onClick={() => {
            firebase.auth().signOut()
            setLoggedInUser({});
        }}>Sign out</button>
    );
};

export default SignOut;