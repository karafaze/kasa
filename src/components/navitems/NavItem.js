import React from "react";
import { NavLink } from "react-router-dom";

import "./navitems.css";

export default function NavItem() {
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
