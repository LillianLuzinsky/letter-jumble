import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeButtonStyling = styled.button`
  color: white;
  text-decoration: none;
  background: #ff00c6;
  border: 2px solid #ff00c6;
  border-radius: 50px;
  font-size: 2rem;
  width: 200px;
  letter-spacing: 2px;
  text-align: center;
  margin: 0 50px;
  transition: 0s;

  :hover{
    color: #ff00c6;
    background: white;
    border: 2px solid white;
    transition: 1s;
  }

  .home-links{
    text-decoration: none;
    color: white;

    :hover{
    color: #ff00c6;
  }
`
const HomeButton = () => {
  return (
    <div>
      <HomeButtonStyling>
        <Link className="home-links" to="/jumble" className="links">
          Jumble
        </Link>
      </HomeButtonStyling>
        <HomeButtonStyling>
        <Link className="home-links" to="/spelling" className="links">
            Spelling
        </Link>
          </HomeButtonStyling>
    </div>
  )
}

export default HomeButton;