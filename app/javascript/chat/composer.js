import React, { Component } from 'react';
import superagent from 'superagent';

const ENTER_KEY_CODE = 13;

export default class Composer extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentDidMount() {
    this.composerNode.focus();
  }

  onChange(event, value) {
    const authenticated = document.getElementsByName('authenticated')[0].content;
    if (!JSON.parse(authenticated)) {
      window.location.href = Routes.new_user_session_path();
    }
    this.setState({ text: event.target.value });
  }

  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      const text = this.state.text.trim();
      const csrfNode = document.getElementsByName('csrf-token')[0];

      if (text) {
        superagent.post(Routes.chat_room_messages_path(this.props.room.id))
        .send({ body: text })
        .set('X-CSRF-TOKEN', csrfNode.content)
        .type('application/json')
        .accept('json')
        .end((err, res) => {
          if (err) {
            console.log('Error!');
          } else {
            console.log('Success:)');
          }
        })
      }
      this.setState({ text: '' });
    }
  }

  render() {
    return(
      <textarea
        className="message-composer"
        name="message"
        ref={node => (this.composerNode = node)}
        value={this.state.text}
        onChange={this.onChange.bind(this)}
        onKeyDown={this.onKeyDown.bind(this)}
      />
    );
  }
}
