import React from "react";

import arrowDown from "../../images/arrow-down.svg";
import arrowUp from "../../images/arrow-up.svg";
import arrowLeft from '../../images/arrow-left.svg';
import arrowRight from '../../images/arrow-right.svg';

import "./arrow.css";

// handle all arrows for the app
export default function Arrow(props) {
    // receives direction as a prop and creates an object to map images
    const direction = props.direction;
    const allArrows = {
        down: arrowDown,
        up: arrowUp,
        left: arrowLeft,
        right: arrowRight,
    };
    // define style and toogle function for some arrows 
    // set to null if arrow has no function or style
    const style = props.style || null;
    const toggle = props.onClick || null;

    // returns the arrow with onClick or not 
    return toggle ? (
        <img
            alt={`arrow-${direction}`}
            className={`arrow arrow-${direction}`}
            src={allArrows[direction]}
            onClick={toggle}
            style={style}
        ></img>
    ) : (
        <img 
            alt={`arrow-${direction}`}
            className={`arrow arrow-${direction}`} 
            src={allArrows[direction]}
            style={style}
        ></img>
    );
}
