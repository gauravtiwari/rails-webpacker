import React, { Component } from 'react';
import SharedNav from '../shared/nav';
import Item from './item';

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list">
        <ul><Item /></ul>
        <SharedNav />
      </div>
    );
  }
}
