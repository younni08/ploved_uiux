import React from "react";
import { Link } from "react-router-dom";

const BottomNavi = () => {
    return (
        <div className="bottomnavi">
            <Link to="/" className="bottomnavi_ele">
                <span><i className="xi-home xi-x"></i></span>
                <span>Home</span>
            </Link>
            <Link to="/search" className="bottomnavi_ele">
                <span><i className="xi-search xi-x"></i></span>
                <span>Search</span>
            </Link>
            <Link to="/chat" className="bottomnavi_ele">
                <span><i className="xi-comment-o xi-x"></i></span>
                <span>Chat</span>
            </Link>
            <Link to="/profile" className="bottomnavi_ele">
                <span><i className="xi-profile-o xi-x"></i></span>
                <span>Profile</span>
            </Link>
        </div>
    )
}

export default BottomNavi;