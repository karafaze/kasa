import React from "react";
import { useParams } from "react-router-dom";
import data from "../../datas.json";
import "./housing.css";

import NotFound from "../404/404";
import Carrousel from "../../components/carrousel/Carrousel";
import Dropdown from "../../components/dropdown/Dropdown";
import Rating from "../../components/rating/Rating";
import TagContainer from "../../components/tagcontainer/TagContainer";
import UserInfo from "../../components/userinfo/UserInfo";



export default function Housing() {
    // retriving housingID to display specific information
    const { housingId } = useParams();
    const housingData = data.find((house) => house.id === housingId);
    // if housingID wrong, redirects to 404 page
    if (!housingData) {
        return <NotFound />;
    }
    // setting document title
    document.title = `${housingData.title}`;
    // else return main page
    return (
        <main>
            <Carrousel allPictures={housingData.pictures} />
            <div className="main--info">
                <div className="main--left__info">
                    <h1 className="house--title">{housingData.title}</h1>
                    <p className="house--location">
                        {housingData.location}
                    </p>
                    <TagContainer tags={housingData.tags} />
                </div>
                <div className="main--right__info">
                    <Rating rating={housingData.rating} />
                    <UserInfo userDetail={housingData.host} />
                </div>
            </div>
            <div className="dropdown--container">
                <Dropdown
                    dropDownItems={{
                        title: "Équipements",
                        items: housingData.equipments,
                    }}
                />
                <Dropdown
                    dropDownItems={{
                        title: "Description",
                        items: housingData.description,
                    }}
                />
            </div>
        </main>
    );
}
