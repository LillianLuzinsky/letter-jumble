import React from "react";
import { Link } from 'react-router-dom'

const Navlinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/" className="links">
          Home
        </Link>
      </li>

      <li>
        <Link to="/" className="links">
          Jumble
        </Link>
      </li>

      <li>
        <Link to="/" className="links">
          Spelling
        </Link>
      </li>
    </ul>
  )
}

export default Navlinks