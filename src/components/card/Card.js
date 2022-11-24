import React from "react";
import { Link } from "react-router-dom";

import "./card.css";

export default function Card(props) {
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
