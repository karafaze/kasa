import React from "react";
import emptyStar from "../../images/star/empty-star.svg";
import filledStar from "../../images/star/filled-star.svg";

import "./star.css";

export default function Star(props) {
    return (
        <img
            className="star--img"
            alt="rating-star"
            src={props.isFilled ? filledStar : emptyStar}
        ></img>
    );
}
