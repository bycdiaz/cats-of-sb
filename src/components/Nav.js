import React from 'react';
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contribute">Contribute</Link></li>
        <li><Link to="/adopt">Adopt</Link></li>
        <li><Link to="/ourstory">Our Story</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
