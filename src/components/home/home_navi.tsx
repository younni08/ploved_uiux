import React from "react";

const HomeNavi = () => {
    return (
        <div className="home_navi">
            <div>
                <span><i className="xi-apps"></i></span>
                <div>
                    <span>Unit C. No.5</span>
                    <span><i className="xi-angle-down-min"></i></span>
                </div>
                <span><i className="xi-bell-o"></i></span>
            </div>
            <div>
                <div>
                    <span></span>
                    <span><i className="xi-search"></i></span>
                </div>
            </div>
        </div>
    )
}

const HomeNaviOld = () => {
    return (
        <div className="search_ber">
            <div>
                <span><i className="xi-search"></i></span>
                <span>Looking for ?</span>
            </div>
            <span><i className="xi-apps"></i></span>
            <span><i className="xi-bell-o"></i></span>
        </div>
    )
}

export default HomeNavi;