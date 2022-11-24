import React from "react";
import pink_letter_k from "../../images/site_logo/letter_k_pink.svg";
import pink_letter_a from "../../images/site_logo/letter_a_pink.svg";
import pink_letter_s from "../../images/site_logo/letter_s_pink.svg";
import pink_logo1 from "../../images/site_logo/logo_pink.svg";
import pink_logo2 from "../../images/site_logo/logo2_pink.svg";
import white_letter_k from "../../images/site_logo/letter_k_white.svg";
import white_letter_a from "../../images/site_logo/letter_a_white.svg";
import white_letter_s from "../../images/site_logo/letter_s_white.svg";
import white_logo1 from "../../images/site_logo/logo_white.svg";
import white_logo2 from "../../images/site_logo/logo2_white.svg";

import './sitelogo.css'

export default function SiteLogo(props) {
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

    const logos = logoObject[props.location];
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
