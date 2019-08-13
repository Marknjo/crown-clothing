import React from 'react';

import { Link } from 'react-router-dom';

import "./header.styles.scss";
import { ReactComponent as Logo } from '../../assests/06.04.3 crown.svg.svg';

const Header = () => (
    <div className="header">
        <Link to="/"  className="logo-container">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">Shop</Link>
            <Link to="/contact" className="option">Contact</Link>
        </div>
    </div>
);

export default Header;