import React, { Component } from 'react';
import Content from './content';
import Sidebar from './sidebar';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <Content />
        <Sidebar />
        <a href={Routes.lists_path()}>Lists page</a>
      </main>
    );
  }
}
