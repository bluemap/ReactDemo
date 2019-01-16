import React from 'react';
import '../css/Comment.css'

function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }

  function UserInfo(props) {
      return (
        <div className="UserInfo"> 
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
            {props.user.name}
            </div>
        </div>
      );
  }

function Comment(props) {
    return (<div className="Comment">
        <UserInfo user={props.user}/>
        <div className="Comment-text">
        {props.text}
        </div>
        <div className="Comment-date">
        {props.date.toLocaleDateString()}
        </div>
    </div>);
}

export default Comment;