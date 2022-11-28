import React from "react";
import emptyStar from "../../images/empty-star.svg";
import filledStar from "../../images/filled-star.svg";

import "./star.css";

// handles the creation of a single star
export default function Star(props) {
    // each star receives a props isFilled
    // indicate which type of star the component returns
    return (
        <img
            className="star--img"
            alt="rating-star"
            src={props.isFilled ? filledStar : emptyStar}
        ></img>
    );
}
