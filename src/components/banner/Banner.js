import React from "react";
import mobileBannerHome from "../../images/mobile-banner-home.svg";
import desktopBannerHome from "../../images/desktop-banner-home.svg";
import mobileBannerAbout from '../../images/mobile-banner-about.png'
import desktopBannerAbout from '../../images/desktop-banner-about.png'

import "./banner.css";

export default function Banner(props) {
    const mobileImage = props.for === 'home' ? mobileBannerHome : mobileBannerAbout;
    const desktopImage = props.for === 'home' ? desktopBannerHome : desktopBannerAbout;
    return (
        <div className="banner">
            <img 
                src={mobileImage} 
                className={`banner--img__mobile ${props.for === 'home' ? '' : 'banner--about'}`}
                alt="banner-background" 
            />
            <img 
                src={desktopImage} 
                className={`banner--img__desktop ${props.for === 'home' ? '' : 'banner--about'}`}
                alt="banner-background" 
            />
            {props?.children}
        </div>
    );
}