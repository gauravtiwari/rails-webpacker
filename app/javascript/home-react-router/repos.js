import React from 'react'
import { Link } from 'react-router-dom'

const Repos = () => (
  <div>
    <ul role="nav">
      <li><a href="/">Root Home</a></li>
      <li><Link to="/">App Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/repos">Repos</Link></li>
    </ul>
    <h1>This is Repos page</h1>
  </div>
);

export default Repos;
