import React from "react";
import Card from "../card/Card";
import datas from "../../datas.json";
import { nanoid } from "nanoid";

import "./gallery.css";

// handles all the cards display for the homepage
export default function Gallery() {
    // maps all the housing data and generates card item for each of them
    const allHousing = datas.map((house) => {
        const cardInfo = {
            id: house.id,
            cover: house.cover,
            title: house.title,
        };
        return <Card key={nanoid()} cardInfo={cardInfo} />;
    });
    
    return <section className="card--container">{allHousing}</section>;
}
