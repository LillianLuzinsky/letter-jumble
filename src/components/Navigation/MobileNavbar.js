import React from 'react'
import styled from 'styled-components'
import Navlinks from './Navlinks'

const MobileNavStyling = styled.nav`
  width: 50vw;
  background: #1c1c1c;
  align-self: flex-end;

  .nav-links {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 60vh;
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

const MobileNavbar = () => {
  return (
    <MobileNavStyling>
      <Navlinks />
    </MobileNavStyling>
  )
}

export default MobileNavbar