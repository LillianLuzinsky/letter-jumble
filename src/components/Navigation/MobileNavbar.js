import React from 'react'
import styled from 'styled-components'
import Navlinks from './Navlinks'

const MobileNavStyling = styled.nav`
  width: 50vw;
  background: #1c1c1c;
  align-self: flex-end;
  transition: transform 1s;
  transform: translateX( ${props => props.displayMobileNavbar ? ("0%") : ("100%") } );

  .nav-links {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    list-style: none;
    letter-spacing: 2px;
    font-weight: 300;
  }

  .links {
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
  }
`;

const MobileNavbar = props => {
  return (
    <MobileNavStyling displayMobileNavbar = {props.displayMobileNavbar}>
      <Navlinks />
    </MobileNavStyling>
  );
}

export default MobileNavbar