import React, { Component } from 'react';
import Message from './message';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.state = {
      messages: props.room.messages,
    };
  }

  componentDidMount() {
    this.scrollToBottom();
    App.messages = App.cable.subscriptions.create('MessagesChannel', {
      received: function(data) {
        const messages = this.state.messages.concat(JSON.parse(data));
        this.setState({ messages });
      }.bind(this),
    });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    const messages = this.messageList;
    if (messages) {
      messages.scrollTop = messages.scrollHeight;
    }
  }

  render() {
    return(
      <div className="message-section">
        <h3 className="message-thread-heading">{this.props.room.topic}</h3>
        <ul className="message-list" ref={(node) => (this.messageList = node)}>
          {this.state.messages.map(({ message }) => {
            return <Message
                    key={message.id}
                    message={message}
                  />;
          })}
        </ul>
      </div>
    );
  }
}
