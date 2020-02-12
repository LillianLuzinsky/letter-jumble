import React, { Component } from 'react';
import styled from 'styled-components';

const HomeButtonStyling = styled.body`
  width: 50px;
  background: red;
`

class HomeButton extends Component {
  render() {
    return (
      <HomeButtonStyling>Jumble</HomeButtonStyling>
    )
  }
}

export default HomeButton