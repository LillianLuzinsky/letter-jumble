import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const DesktopNavbarStyling = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: #1c1c1c;
  color: white;
  height: 10vh;

  #logo {
    margin-left: 2rem;
    font-size: 2rem;
    font-weight: 500;
    list-style: none;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    width: 35vw;
    list-style: none;
  }

  .links {
    color: white;
    font-size: 1.2rem;
    padding: 5px 10px;
    text-decoration: none;
    /* border: 1px solid white;
    border-radius: 50px; */
  }
  
  
}
`;

const DesktopNavbar = () => {
  return (
    <DesktopNavbarStyling>

      <div id="logo">Letter-Jumble</div>
      <div id="spacer" />

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

      <button>Buttom</button>
    </DesktopNavbarStyling>
  );
}

export default DesktopNavbar