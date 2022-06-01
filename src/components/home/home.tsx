import React from "react";
import HomeEle from "./home_ele";
import HomeNavi from "./home_navi";

const Home = () => {
    return (
        <div className="home">
            <HomeNavi />
            <div className="home_list">
                
                <div className="home_insta_list">
                    <HomeEle />
                    <HomeEle />
                    <HomeEle />
                    <HomeEle />
                    <HomeEle />
                    <HomeEle />
                </div>
            </div>
        </div>
    )
}

export default Home;