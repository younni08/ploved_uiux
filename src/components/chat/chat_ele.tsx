import React from "react";
import { Link } from "react-router-dom";

const ChatEle = ( ) => {
    return (
        <Link to="/chatchat" className="chat_ele">
            <div>
                <img src="./iphone.jpg" alt="mobile" />
            </div>
            <div className="chat_ele_right">
                <div>
                    <span>Qwedna</span>
                    <div>
                        <span><i className="xi-time-o"></i></span>
                        <span>15min ago</span>
                    </div>
                </div>
                <span>lets talk about it</span>
            </div>
        </Link>
    )
}

export default ChatEle;
