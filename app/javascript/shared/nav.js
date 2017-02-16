/* global Routes */

import React from 'react';

const Nav = () => (
  <div className="demos-nav">
    <a className="block" href={Routes.home_vue_path()}>Home page(vue version)</a>
    <a className="block" href={Routes.home_router_path()}>App page (react-router)</a>
    <a className="block" href={Routes.chat_rooms_path()}>Chat rooms (react)</a>
    <a className="block" href={Routes.home_angular_path()}>Home page (angular2)</a>
    <a className="block" href={Routes.lists_path()}>Lists page (react)</a>
    <a className="block" href={Routes.lists_vue_path()}>Lists page (vue)</a>
  </div>
);

export default Nav;
