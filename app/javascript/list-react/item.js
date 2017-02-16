import React, { Component } from 'react';

export default class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li>List item 1</li>
        <li>List item 2</li>
      </div>
    );
  }
}
