import React from "react";

import "./cart-dropdown.styles.scss";
import CustomButtom from "../custom-buttom/custom-buttom.component";


const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButtom>{("Go to chechout").toUpperCase()}</CustomButtom>
    </div>
);


export default CartDropdown;
