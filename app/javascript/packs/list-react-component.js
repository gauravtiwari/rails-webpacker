import { render } from 'react-dom';
import React from 'react';
import List from './list-react';

document.addEventListener('DOMContentLoaded', () => {
  render(<List />, document.getElementById('list-root'));
});
