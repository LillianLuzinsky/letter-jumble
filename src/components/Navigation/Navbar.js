import React, { Component } from 'react'
import DesktopNavbar from  './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import styled from 'styled-components'

const NavbarStyling = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
`

class Navbar extends Component {
  render() {
    return (
      <NavbarStyling>
        <DesktopNavbar/>
        <MobileNavbar/>
      </NavbarStyling>
    )
  }
}

export default Navbar
