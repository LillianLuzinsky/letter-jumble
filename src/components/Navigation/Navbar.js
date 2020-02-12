import React, { Component } from 'react'
import DesktopNavbar from  './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import styled from 'styled-components'

const NavbarStyling = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  overflow-x: hidden;
`

class Navbar extends Component {

  state = {
    displayMobileNavbar: false
  }

  toggleMobileNavbar = ()  => {
    this.setState( prevState => {
      return { displayMobileNavbar: !prevState.displayMobileNavbar }
    })
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.checkAndAutoHideMobileNavabar)
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.checkAndAutoHideMobileNavabar)
  }

  checkAndAutoHideMobileNavabar = () => {
    const screenWidth = window.innerWidth

    if (this.state.displayMobileNavbar && screenWidth > 768){
      this.setState({
        displayMobileNavbar: false
      })
    }
  }

  render() {
    return (
      <NavbarStyling>
        <DesktopNavbar toggleMobileNavbar = { this.toggleMobileNavbar } />
        <MobileNavbar displayMobileNavbar={ this.state.displayMobileNavbar } />
      </NavbarStyling>
    );
  }
}

export default Navbar
