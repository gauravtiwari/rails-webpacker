import React, { Component } from 'react';
import superagent from 'superagent';
import nocache from 'superagent-no-cache';
import Messages from './messages';
import Composer from './composer';

export default class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room: {},
      loading: true,
    };

    this.room = {};

    superagent
    .get(Routes.chat_room_path(this.props.roomId))
    .set('Accept', 'application/json')
    .use(nocache)
    .end((err, res) => {
      this.room = res.body.chat_room;
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    return(
      <div className="chat-container">
        {this.state.loading ? 'Loading' :
          <div className="chatapp">
            <Messages room={this.room} />
            <Composer room={this.room} />
          </div>
        }
      </div>
    );
  }
}

Room.propTypes = {
  roomId: React.PropTypes.string,
};
