import React from "react";
import { Link } from "react-router-dom";

import "./card.css";

// handle housings card for homepage
export default function Card(props) {
    // retrieving infos to be used for card creation
    const { id, cover, title } = props.cardInfo;

    return (
        <Link to={`housing/${id}`} className="card">
            <div>
                <img
                    className="card--img"
                    alt="housing_image"
                    src={cover}
                ></img>
                <h2 className="card--title">{title}</h2>
            </div>
        </Link>
    );
}
