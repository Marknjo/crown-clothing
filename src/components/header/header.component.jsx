import React from 'react';

import { Link } from 'react-router-dom';
import {auth} from "../../firebase/firebase.utils";

import "./header.styles.scss";
import { ReactComponent as Logo } from '../../assests/06.04.3 crown.svg.svg';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link to="/"  className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">{ ("Shop").toUpperCase() }</Link>
            <Link to="/contact" className="option">{ ("contact").toUpperCase() }</Link>
            {
                currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>{ ("sign out").toUpperCase() }</div>
                :
                <Link className="option" to="/signin">{ ("sign in").toUpperCase() }</Link>
            }
        </div>
    </div>
);

export default Header;