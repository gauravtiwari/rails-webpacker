import React, { Component } from 'react';
import Content from './content';
import SharedNav from '../shared/nav';
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
        <SharedNav />
      </main>
    );
  }
}
