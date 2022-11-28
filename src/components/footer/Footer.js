import React from "react";
import SiteLogo from "../sitelogo/SiteLogo";

import "./footer.css";

// handles footer for the app
export default function Footer() {
    return (
        <footer>
            <SiteLogo location="footer" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}
