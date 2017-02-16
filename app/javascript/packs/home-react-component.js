import { render } from 'react-dom';
import React from 'react';
import Home from '../home-react';

document.addEventListener('DOMContentLoaded', () => {
  render(<Home />, document.getElementById('react-root'));
});
