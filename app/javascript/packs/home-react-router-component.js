import React from 'react';
import Home from './home-react';
import App from './home-react-router/app';
import About from './home-react-router/about'
import Repos from './home-react-router/repos'
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

document.addEventListener('DOMContentLoaded', () => {
  render((
    <Router history={hashHistory}>
      <Route path="/" component={App} />
      <Route path="/repos" component={Repos} />
      <Route path="/about" component={About} />
    </Router>
  ), document.getElementById('content'))
});
