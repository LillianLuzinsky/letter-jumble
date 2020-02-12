import React, { Component } from 'react';
import styled from 'styled-components';
import HomeButton from './HomeButton'

const HomeStyling = styled.body`
  width: 100%;
  height:100vh;
  display: block;
  
`

const TopBarStyling = styled.section`
  height: 60vh;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background:url("https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-double-twelve-purple-gradient-e-commerce-promotion-geometry-banner-image_183414.jpg") no-repeat center;
  background-size:cover;
  
  
  h1{
    font-weight: 700;
    font-size: 6rem;
    color: white;
    margin: 0;
    letter-spacing: 3px;
    border: solid white 5px;
    border-radius: 300px;
    padding: 50px;
    background: rgba(0,0,0,.3);
    margin-top: 50px;
  }

    h2{
    color: #6392FF;
    color: white;
    font-weight: 400;
    font-size: 3rem;
    margin: 0;
  }

`
const BottomBarStyling = styled.section`
  height: 40vh;
  color: #FF0067;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  letter-spacing: 2px;
  background: #171717;

  p{
    color: #777777;
    font-size: 1.5rem;
    /* margin-bottom: 50px; */
  }
  
`

class Homepage extends Component {
  render(){
    return(
      <HomeStyling>
        <TopBarStyling>
          <h1>Letter-Jumble</h1>
          <h2>for parents with little kids</h2>
          
        </TopBarStyling>

        <BottomBarStyling>
          
          <p>Choose a game to play with your child</p>
          <HomeButton/>
        </BottomBarStyling>
        
      </HomeStyling>
    )
  }
}

export default Homepage;