import React, { Component } from 'react';
import styled from 'styled-components';
import HomeButton from './HomeButton'

const HomeStyling = styled.body`
  width: 100%;
  height:100vh;
  display: block;
  
`

const TopBarStyling = styled.section`
  height: 50vh;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  }
`
const BottomBarStyling = styled.section`
  height: 50vh;
  color: #FF0067;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background:url("https://images.squarespace-cdn.com/content/v1/5d0d172e2f89550001cdbbdd/1564014407402-0UCJNTMTJO8CNXBYATTZ/ke17ZwdGBToddI8pDm48kD8UNA5htNZzJ2nXG_t3_YFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI-k1SNpg2egVLuszOr666hzy7jB5vo7ET0iyk0--iRPcKMshLAGzx4R3EDFOm1kBS/23579fec434a601.jpg?format=2500w") no-repeat center;
  background-size: cover;
  letter-spacing: 2px;
  background: #171717;

  h2{
    color: #6392FF;
    color: white;
    font-weight: 400;
    font-size: 3rem;
    margin: 0;
    margin-top: 20px;
  }

  p{
    color: #555555;
    font-size: 1.5rem;
    margin-bottom: 50px;
  }
  
`

class Homepage extends Component {
  render(){
    return(
      <HomeStyling>
        <TopBarStyling>
          <h1>Letter-Jumble</h1>
          
        </TopBarStyling>

        <BottomBarStyling>
          <h2>for parents with little kids</h2>
          <p>Choose a game to play with your child</p>
          <HomeButton/>
        </BottomBarStyling>
        
      </HomeStyling>
    )
  }
}

export default Homepage;