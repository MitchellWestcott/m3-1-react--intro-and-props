import React from 'react';

import './Header.css';
// import ChatMessage from './ChatMessage';

const Header = (props) => {
  console.log(props);
  
  return ( 
  <header>
    {props.users.filter((person) => {
      if (person.username !== props.currentUser.username) {
        return true;
      } else {
        return false;
      }
    })
    .map((user) => {
      return (
      <div className="user-container">
      <img className="top-avatar" src={user.avatar}></img>
      <span className="user-name">{user.username}</span>
    </div>
      )
    })}
  </header>
  );
};

export default Header;
