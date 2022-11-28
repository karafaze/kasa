import React from "react";
import { NavLink } from "react-router-dom";

import "./navitems.css";

// handles the navbar items for the header
export default function NavItem() {
    // will underline one of the 2 navbar item if current page matches
    const activeStyle = {
        textDecoration: "underline",
    };
    return (
        <div className="navbar__items">
            <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                Acceuil
            </NavLink>
            <NavLink 
                to="/about"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
                A Propos</NavLink>
        </div>
    );
}
