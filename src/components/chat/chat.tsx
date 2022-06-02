import React from 'react';
import ChatEle from './chat_ele';

const Chat = () => {
    return (
        <div className="chat">
            <div className="profile_navi">
                <span>Chat</span>
                <span><i className="xi-cog"></i></span>
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