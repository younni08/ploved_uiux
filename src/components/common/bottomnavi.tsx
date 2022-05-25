import React from "react";

const BottomNavi = () => {
    return (
        <div className="bottomnavi">
            <div className="bottomnavi_ele">
                <span><i className="xi-home xi-x"></i></span>
                <span>Home</span>
            </div>
            <div className="bottomnavi_ele">
                <span><i className="xi-search xi-x"></i></span>
                <span>Search</span>
            </div>
            <div className="bottomnavi_ele">
                <span><i className="xi-comment-o xi-x"></i></span>
                <span>Chat</span>
            </div>
            <div className="bottomnavi_ele">
                <span><i className="xi-profile-o xi-x"></i></span>
                <span>Profile</span>
            </div>
        </div>
    )
}

export default BottomNavi;