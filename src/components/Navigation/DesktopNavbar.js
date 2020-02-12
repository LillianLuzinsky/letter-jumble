import React from 'react'
import styled from 'styled-components'
import Navlinks from './Navlinks';

const DesktopNavStyling = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: #1c1c1c;
  color: white;
  height: 10vh;

  #logo {
    margin-left: 3rem;
    font-size: 2rem;
    font-weight: 500;
    list-style: none;
    text-decoration: none;
    letter-spacing: 1px;
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
  }
`;

const MobileNavButton = styled.button`
  background: transparent;
  height: 6vh;
  width: 6vh;
  color: white;
  margin-right: 2rem;
  border: none;
  font-size: 2rem;
  border-radius: 50px;
  border: solid 2px white;
  font-weight: 300;
  display: none;

  @media screen and (max-width: 768px) {
    display: block; 
  }
`;

const DesktopNavbar = () => {
  return (
    <DesktopNavStyling>
      <div id="logo">Letter-Jumble</div>

      <Navlinks/>


      <MobileNavButton>X</MobileNavButton>
    </DesktopNavStyling>
  )
}

export default DesktopNavbar