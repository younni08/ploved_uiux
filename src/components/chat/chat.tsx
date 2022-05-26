import React from 'react';
import ChatEle from './chat_ele';

const Chat = () => {
    return (
        <div className="chat">
            <div className="home_navi">
                <div>
                    <span>Chat</span>
                    <span></span>
                </div>
                <div>
                    <span><i className="xi-bell-o"></i></span>
                </div>
            </div>
            <div className="chat_list">
                <ChatEle />
                <ChatEle />
                <ChatEle />
                <ChatEle />
                <ChatEle />
                <ChatEle />
            </div>
        </div>
    )
}

export default Chat