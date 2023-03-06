import React from "react";
import Star from "../star/Star";
import { nanoid } from "nanoid";
import './rating.css'
// handles ratings for the housings
export default function Rating(props) {
    // receives rating as a props and turns it into a Number
    const houseRate = +props.rating;
    const maxRate = 5;
    let isFilled = true;
    let storedStar = [];
    // below will generate filled and empty stars 
    for (let i = 0; i < houseRate; i++){
        // stores fulledStart
        storedStar.push(<Star key={nanoid()} isFilled={!isFilled}/>)
    }
    for (let i = 0; i < maxRate - houseRate; i++){
        // stores emptyStar
        storedStar.push(<Star key={nanoid()} isFilled={isFilled}/>)
    }
    // returns list of stars
    return (
        <div className="rating--container">
            {storedStar}
        </div>
        );
}
