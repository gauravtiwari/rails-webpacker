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
        <a
          className="block"
          href={Routes.home_vue_path()}
        >
          Home page(vue version)
        </a>
        <a className="block" href={Routes.home_router_path()}>App page (react-router)</a>
        <a className="block" href={Routes.home_angular_path()}>Home page (angular2)</a>
        <a className="block" href={Routes.lists_path()}>Lists page (react)</a>
        <a className="block" href={Routes.lists_vue_path()}>Lists page (vue)</a>
      </main>
    );
  }
}
