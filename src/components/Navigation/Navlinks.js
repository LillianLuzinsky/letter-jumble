import React from "react";
import { Link, Route } from 'react-router-dom';
import JumblePage from '../JumblePage/Jumblepage'

const Navlinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/" className="links">
          Home
        </Link>
      </li>

      <li>
        <Link to="/jumble" className="links">
          Jumble
        </Link>
      </li>

      <li>
        <Link to="/spelling" className="links">
          Spelling
        </Link>
      </li>
    </ul>
  )
}

export default Navlinks