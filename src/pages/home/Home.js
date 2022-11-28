import React from "react";
import Banner from "../../components/banner/Banner";
import Gallery from "../../components/gallery/Gallery";

import "./home.css";

export default function Home() {
    // setting document title
    document.title = 'Homepage'
    return (
        <main>
            <Banner for={"home"}>
                <h1 className="banner--title">
                    <span>Chez vous,</span> partout et ailleurs
                </h1>
            </Banner>
            <Gallery />
        </main>
    );
}
