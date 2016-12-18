import ReactDOM from 'react-dom';
import React from 'react';
import { mount, withOptions } from 'react-mounter';
import List from './list/index';

const customMount = withOptions({
  rootId: 'list',
  rootProps: { 'className': 'list-page' }
}, mount);

customMount(List);
