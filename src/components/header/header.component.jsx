import React from 'react';

import { connect } from "react-redux";

import { Link } from 'react-router-dom';
import {auth} from "../../firebase/firebase.utils";

import "./header.styles.scss";
import { ReactComponent as Logo } from '../../assests/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
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


            <CartIcon />
        </div>

        {
            hidden ? null :
            <CartDropdown />
        }
    </div>
);

const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);