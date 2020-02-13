import React, { Component } from 'react';
import styled from 'styled-components';
import HomeButton from './HomeButton'

const HomeStyling = styled.body`
  width: 100%;
  height: 100vh;
  display: block;
  background: url("https://www.schemecolor.com/wallpaper?i=28824&desktop")
    no-repeat center;
  background-size: 100%;
`;

const TopBarStyling = styled.section`
  height: 60vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  /* background: url("https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-double-twelve-purple-gradient-e-commerce-promotion-geometry-banner-image_183414.jpg")
    no-repeat center; */

  header {
    width: 70vw;
    border: solid white 5px;
    border-radius: 300px;
    padding: 10px;
    background: rgba(0, 0, 0, 0.5);
    text-align: center;
  }

  h1 {
    font-weight: 700;
    font-size: 7rem;
    color: white;
    margin: 0;
    letter-spacing: 3px;

    /* background: url("https://www.schemecolor.com/wallpaper?i=28824&desktop") no-repeat center;
    background-size: 190%; */
  }

  h2 {
    color: #171717;
    color: white;
    font-weight: 400;
    font-size: 3rem;
    margin: 0;
  }
`;
const BottomBarStyling = styled.section`
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  letter-spacing: 2px;
  background: rgba(0, 0, 0, 0.9);

  p {
    color: aquamarine;
    font-size: 2rem;
    /* margin-bottom: 50px; */
  }
`;

class Homepage extends Component {
  render(){
    return (
      <HomeStyling>
        <TopBarStyling>
          <header>
            <h1>Letter-Jumble</h1>
            <h2>for parents with little kids</h2>
          </header>
        </TopBarStyling>

        <BottomBarStyling>
          <p>Choose a game to play with your child</p>
          <HomeButton />
        </BottomBarStyling>
      </HomeStyling>
    );
  }
}

export default Homepage;