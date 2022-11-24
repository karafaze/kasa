import React from "react";
import { useParams } from "react-router-dom";
import data from "../../datas.json";
import "./housing.css";
const NotFound = React.lazy(() => import("../404/404"));
const Carrousel = React.lazy(() =>
    import("../../components/carrousel/Carrousel")
);
const Dropdown = React.lazy(() => import("../../components/dropdown/Dropdown"));
const Rating = React.lazy(() => import("../../components/rating/Rating"));
const TagContainer = React.lazy(() =>
    import("../../components/tagcontainer/TagContainer")
);
const UserInfo = React.lazy(() => import("../../components/userinfo/UserInfo"));
// import NotFound from "../404/404";
// import Carrousel from "../../components/carrousel/Carrousel";
// import Dropdown from "../../components/dropdown/Dropdown";
// import Rating from "../../components/rating/Rating";
// import TagContainer from "../../components/tagcontainer/TagContainer";
// import UserInfo from "../../components/userinfo/UserInfo";



export default function Housing() {
    const { housingId } = useParams();
    const housingData = data.find((house) => house.id === housingId);
    if (!housingData) {
        return <NotFound />;
    }

    document.title = `${housingData.title}`;

    return (
        <main>
            <React.Suspense>
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
            </React.Suspense>
        </main>
    );
}
