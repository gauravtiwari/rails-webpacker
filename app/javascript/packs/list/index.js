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
        <a className="block" href={Routes.root_path()}>Home page</a>
        <a
          className="block"
          href={Routes.lists_vue_path()}
        >Lists page (vue version)</a>
      </div>
    );
  }
}
