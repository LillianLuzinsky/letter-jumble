import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../Navigation/Navbar'

const JumblepageStyling = styled.body`
  width: 100%;
  height:90vh;
  display: block;
  background: red
`

class JumblePage extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <JumblepageStyling>
        Jumblepage
        </JumblepageStyling>
        
      </div>
    )
  }
}

export default JumblePage