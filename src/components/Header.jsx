import * as React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Header() {
  return (
    <header>
      <div>
        <h1>My Portfolio</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
