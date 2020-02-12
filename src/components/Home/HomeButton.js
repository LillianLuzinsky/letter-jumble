import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeButtonStyling = styled.button`
  color: white;
  text-decoration: none;
  background: rgba(0, 0, 250, 0.3);
  background:url("https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-double-twelve-purple-gradient-e-commerce-promotion-geometry-banner-image_183414.jpg") no-repeat center;
  background-size: cover;
  border: 2px solid white;
  border-radius: 30px;
  font-size: 2rem;
  width: 150px;
  height: 150px;
  letter-spacing: 2px;
  text-align: center;
  margin: 0 50px;
  margin-bottom: 30px;
  transition: 0s;

  :hover{
    background: purple;
    border: 2px solid purple;
    transition: 1s;
  }

`
const HomeButton = () => {
  return (
    <div>
      <HomeButtonStyling>
        <Link className="home-links" id="jumble-link" to="/jumble" className="links">
          Jumble
        </Link>
      </HomeButtonStyling>
        <HomeButtonStyling>
        <Link className="home-links" id="spelling-link" to="/spelling" className="links">
            Spelling
        </Link>
          </HomeButtonStyling>
    </div>
  )
}

export default HomeButton;