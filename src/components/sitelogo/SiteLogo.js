import React from "react";
import pink_letter_k from "../../images/letter_k_pink.svg";
import pink_letter_a from "../../images/letter_a_pink.svg";
import pink_letter_s from "../../images/letter_s_pink.svg";
import pink_logo1 from "../../images/logo_pink.svg";
import pink_logo2 from "../../images/logo2_pink.svg";
import white_letter_k from "../../images/letter_k_white.svg";
import white_letter_a from "../../images/letter_a_white.svg";
import white_letter_s from "../../images/letter_s_white.svg";
import white_logo1 from "../../images/logo_white.svg";
import white_logo2 from "../../images/logo2_white.svg";

import './sitelogo.css'

// handles site logo for the app 
export default function SiteLogo(props) {
    // first, we create and object containing elements for header logo and footer logo
    const logoObject = {
        header: {
            letter_a: pink_letter_a,
            letter_k: pink_letter_k,
            letter_s: pink_letter_s,
            logo1: pink_logo1,
            logo2: pink_logo2,
        },
        footer: {
            letter_a: white_letter_a,
            letter_k: white_letter_k,
            letter_s: white_letter_s,
            logo1: white_logo1,
            logo2: white_logo2,
        },
    };
    // given the location received as a prop
    // we retrieve the images we will be using
    const logos = logoObject[props.location];

    // setting a class attribute for header|footer 
    const location = `${props.location}-theme`;

    return (
        <div className={`logo ${location}`}>
            <img alt="letter_k" src={logos.letter_k}></img>
            <div className={`logo--group ${location}`}>
                <img alt="logo-part1" src={logos.logo1}></img>
                <img alt="logo-part2" src={logos.logo2}></img>
            </div>
            <img alt="letter_s" src={logos.letter_s}></img>
            <img alt="letter_a" src={logos.letter_a}></img>
        </div>
    );
}
