import React from "react";
import { Link } from "react-router-dom";

const BottomNavi = () => {
    return (
        <div className="bottomnavi">
            <Link to="/ploved" className="bottomnavi_ele">
                <span><i className="xi-heart-o xi-x"></i></span>
                <span>Ploved</span>
            </Link>
            <Link to="/local" className="bottomnavi_ele">
                <span><i className="xi-flag-o xi-x"></i></span>
                <span>Near by</span>
            </Link>
            <Link to="/sell" className="bottomnavi_sell">
                <span><i className="xi-star-o xi-x"></i></span>
                <span>Sell</span>
            </Link>
            <Link to="/chat" className="bottomnavi_ele">
            <span><i className="xi-speech-o"></i></span>
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