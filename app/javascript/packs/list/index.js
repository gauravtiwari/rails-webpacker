/* global Routes */

import React, { Component } from 'react';
import Item from './item';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list">
        <ul>
          <Item />
        </ul>
        <a href={Routes.root_path()}>Home page</a>
      </div>
    );
  }
}
