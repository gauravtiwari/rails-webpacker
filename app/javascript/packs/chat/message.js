import React, { Component } from 'react';

export default class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message } = this.props;
    return(
      <li className="message-list-item">
        <h5 className="message-author-name">{message.user.name}</h5>
        <div className="message-time">
          {message.created_at}
        </div>
        <div className="message-text">{message.body}</div>
      </li>
    );
  }
}

Message.propTypes = {
  message: React.PropTypes.object,
};
