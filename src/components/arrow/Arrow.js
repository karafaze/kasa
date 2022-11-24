import React from "react";

import arrowDown from "../../images/arrow/arrow-down.svg";
import arrowUp from "../../images/arrow/arrow-up.svg";
import arrowLeft from '../../images/arrow/arrow-left.svg';
import arrowRight from '../../images/arrow/arrow-right.svg';

import "./arrow.css";

export default function Arrow(props) {
    const direction = props.direction;
    const allArrows = {
        down: arrowDown,
        up: arrowUp,
        left: arrowLeft,
        right: arrowRight,
    };
    const style = props.style || null;
    const toggle = props.onClick || null;

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
