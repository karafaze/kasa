import React from "react";
import NavItem from "../navitems/NavItem";
import SiteLogo from "../sitelogo/SiteLogo";

import "./header.css";

// handles header for the app
export default function Header() {
    return (
        <header>
            <nav className="navbar">
                <SiteLogo location="header" />
                <NavItem />
            </nav>
        </header>
    );
}
