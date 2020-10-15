import React from 'react';

import './ChatMessage.css';

const ChatMessage = (props) => {
    // console.log(props);
    if (props.messageType === 'sent') {
        return <SentMessage message={props.message} />;
    } else {
        return <ReceivedMessage message={props.message} />;
    }
// return <div className='chat-message'>
//             <img className="avatar" src={props.message.user.avatar}></img>
//         <div className='chat-body'>
//             <p className='user-name'>{props.message.user.username}</p>
//             <p className='message-text'>{props.message.body}</p>
//         </div>
//     </div>;
};

const SentMessage = (props) => {
    return (
        <div className="sent-message">
            <div className="sent-text">{props.message.body}</div>
        </div>
    );
};

const ReceivedMessage = (props) => {
    return (
        <div className="received-message">
            <img className="avatar" src={props.message.user.avatar}></img>
            <div className="chat-body">
                <div className="user-name">{props.message.user.username}</div>
                <div className="received-text">{props.message.body}</div>
            </div>
        </div>
    );
};

export default ChatMessage;