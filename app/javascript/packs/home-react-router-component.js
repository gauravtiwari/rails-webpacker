import React from 'react';
import Home from '../home-react';
import App from '../home-react-router/app';
import About from '../home-react-router/about'
import Repos from '../home-react-router/repos'
import { render } from 'react-dom';
import {  BrowserRouter as Router, Route, history } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Router history={history}>
      <div>
        <Route path="/" component={App} />
        <Route path="/repos" component={Repos} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  , document.getElementById('content'))
});
