import React from "react";
import Star from "../star/Star";
import { nanoid } from "nanoid";

export default function Rating(props) {
    const houseRate = +props.rating;
    const maxRate = 5;
    let isFilled = true;
    let storedStar = [];

    for (let i = 0; i < houseRate; i++){
        storedStar.push(<Star key={nanoid()} isFilled={!isFilled}/>)
    }
    for (let i = 0; i < maxRate - houseRate; i++){
        storedStar.push(<Star key={nanoid()} isFilled={isFilled}/>)
    }

    return (
        <div className="rating--container">
            {storedStar}
        </div>
        );
}
