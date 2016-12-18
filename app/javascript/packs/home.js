import ReactDOM from 'react-dom';
import React from 'react';
import { mount, withOptions } from 'react-mounter';
import Home from './home/index';

const customMount = withOptions({
  rootId: 'home',
  rootProps: { 'className': 'home-page' }
}, mount);

customMount(Home);
