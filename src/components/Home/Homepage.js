import React, { Component } from 'react';
import styled from 'styled-components';

const HomeStyling = styled.body`
  width: 100%;
  height:100vh;
  background: red;
  color: black;
  display: block;
`

const TopBarStyling = styled.section`
  margin-top: 10vh;
  height: 50vh;
  background: blue;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BottomBarStyling = styled.section`
  height: 50vh;
  background: pink;
  color: black;
`

class Homepage extends Component {
  render(){
    return(
      <HomeStyling>
        <TopBarStyling>
          <h1>Hello</h1>
        </TopBarStyling>
        <BottomBarStyling/>
        
      </HomeStyling>
    )
  }
}

export default Homepage