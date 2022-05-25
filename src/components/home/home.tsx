import React from "react";
import HomeEle from "./home_ele";
import HomeNavi from "./home_navi";

const Home = () => {
    return (
        <div className="home">
            <HomeNavi />
            <div className="home_list">
                <HomeEle />
                <HomeEle />
                <HomeEle />
                <HomeEle />
                <HomeEle />
                <HomeEle />
            </div>
        </div>
    )
}

export default Home;