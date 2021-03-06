import React from 'react';

import './ChatStream.css';
import ChatMessage from './ChatMessage';

// The current user's messages should have:
// - a text color of #FFF
// - a background color of #1185f7
//
// Other participant's messages should have:
// - a text color of #000
// - a background color of #e9e9eb

const ChatStream = (props) => {
  // return (
  //   <section className='chat-stream'>
  //   {props.messages.map((message) => {
  //   return <div>{message.body}</div>
  // })}
  // </section>
  // )
  // console.log(props);
  // return (
  // props.messages.map((message) => {
  //   return <ChatMessage message={message} key={message.id}/>
  // })
  // )
  return (
    <section className='chat-stream'>
      {props.messages.map((message) => {
        let messageType = '';
        if (message.user === props.currentUser) {
          messageType = 'sent';
        } else {
          messageType = 'received';
        }
        return (
          <ChatMessage
          // user={message.user}
          // body={message.body}
          message={message}
          messageType={messageType}
          />
        );
      })}
    </section>
  )
};

export default ChatStream;
