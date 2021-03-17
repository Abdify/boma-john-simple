import React, { useContext } from 'react';
import { userContext } from '../../App';
import { auth } from '../LogIn/firebase';
import './Shipment.css';

const Shipment = () => {
    const [loggedInUser] = useContext(userContext);
    
    function handleShipment(e) {
        e.preventDefault();

    }

    return (
        <div className="shipment-form">
            <form onSubmit={handleShipment}>
                <input
                    type="text"
                    placeholder="Your name"
                    defaultValue={loggedInUser.displayName}
                    required
                />
                <input type="email" placeholder="Your email" defaultValue={auth.currentUser.email} required />
                <textarea
                    placeholder="Your address"
                    cols="50"
                    rows="5"
                    required
                    onInvalid={(e) => e.target.setCustomValidity("Should I give these to your grandpa?")}
                ></textarea>
                <input type="number" placeholder="Your phone number" required />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Shipment;