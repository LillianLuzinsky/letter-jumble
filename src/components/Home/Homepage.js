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
  background:url("https://images.squarespace-cdn.com/content/v1/5d0d172e2f89550001cdbbdd/1564014407402-0UCJNTMTJO8CNXBYATTZ/ke17ZwdGBToddI8pDm48kD8UNA5htNZzJ2nXG_t3_YFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI-k1SNpg2egVLuszOr666hzy7jB5vo7ET0iyk0--iRPcKMshLAGzx4R3EDFOm1kBS/23579fec434a601.jpg?format=2500w") no-repeat center;
  background:url("https://mrsponsorpants.typepad.com/.a/6a00e551f9630d883301bb08a0c568970d-pi") no-repeat center;
  background-size:cover;
  
  h1{
    font-size: 8rem;
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
  justify-content: flex-start;
  background: #171717;
  letter-spacing: 2px;

  h2{
    color: #6392FF;
    font-weight: 400;
    font-size: 4rem;
    margin: 0;
    margin-top: 20px;
  }

  p{
    color: #ae7fff;
    font-size: 2rem;
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