import React, { Component } from 'react';

const Message = (props) => (
  <li className="message-list-item">
    <h5 className="message-author-name">
      {props.message.user.name}
    </h5>
    <div className="message-time">
      {props.message.created_at}
    </div>
    <div className="message-text">{props.message.body}</div>
  </li>
);

Message.propTypes = {
  message: React.PropTypes.object,
};

export default Message;
