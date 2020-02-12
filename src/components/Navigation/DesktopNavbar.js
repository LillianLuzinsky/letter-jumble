import React from 'react'
import styled from 'styled-components'
import Navlinks from './Navlinks';
import { Link } from 'react-router-dom'
import HomePage from '../Home/Homepage'

const DesktopNavStyling = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: #1c1c1c;
  color: white;
  
  #logo {
    margin-left: 3rem;
    font-size: 2rem;
    font-weight: 500;
    list-style: none;
    text-decoration: none;
    letter-spacing: 1px;
    color: white;
  }

  .nav-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    width: 35vw;
    list-style: none;
    letter-spacing: 2px;
    font-weight: 300;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .links {
    color: white;
    font-size: 1.2rem;
    padding: 5px 10px;
    text-decoration: none;

    :hover {
      color: black;
      background: white;
      border-radius: 50px;
      transition: 1s;
      font-weight: 500;
    }
  }
`;

const MobileNavButton = styled.button`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 6vh;
    width: 6vh;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    box-sizing: border-box;
    margin-right: 2rem;
  }

  .toggle-button-line {
    width: 40px;
    height: 3px;
    border-radius: 20px;
    background: white;
  }
`;

const DesktopNavbar = props => {
  return (
    <div>
      <DesktopNavStyling>
        <Link id="logo" to="/">Letter-Jumble</Link>
        <Navlinks />
        <MobileNavButton onClick={props.toggleMobileNavbar}>
          <div className="toggle-button-line"></div>
          <div className="toggle-button-line"></div>
          <div className="toggle-button-line"></div>
        </MobileNavButton>
      </DesktopNavStyling>
      <HomePage />
    </div>
  
  );
}

export default DesktopNavbar