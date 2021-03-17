import React from 'react';
import { Link } from 'react-router-dom';
import SignOut from '../../components/SignOut/SignOut';
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <div className='header'>
            <img src={ logo } alt="logo"/>

            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                {/* <Link to="/xyz">XYZ</Link> */}
                <SignOut />
            </nav>
        </div>
    );
};

export default Header;