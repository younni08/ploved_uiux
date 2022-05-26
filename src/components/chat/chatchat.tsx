import React from "react";
import { Link } from "react-router-dom";

const ChatChat = () => {
    return (
        <div className="chatchat">
            <div className="chatchat_navi">
                <div>
                    <Link to="/chat"><i className="xi-angle-left"></i></Link>
                    <span>Qwedna</span>
                </div>
                <div>
                    <span><i className="xi-ellipsis-v xi-x"></i></span>
                </div>
            </div>
            <div className="chatchat_info">
                <div>
                    <img src="./iphone.jpg" alt="iphone" />
                </div>
                <div>
                    <span>Selling brand new iphone</span>
                    <div>
                        <span>1500 Peso</span>
                        <div>
                            <span><i className="xi-map-o"></i></span>
                            <span>Unit C. No.5</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chatchat_chat">
                <div className="chatchat_me">
                    <span>1</span>
                    <span>Hello</span>
                </div>
                <div className="chatchat_you">
                    <span>Lego</span>
                    <div>
                        <span>Hello</span>
                        <span>1</span>
                    </div>
                </div>
                <div className="chatchat_input">
                    <span><i className="xi-plus-min xi-x"></i></span>
                    <div>

                    </div>
                    <span><i className="xi-space-bar xi-x"></i></span>
                </div>
            </div>
        </div>
    )
}

// 사진,카메라,장소,약속

export default ChatChat;