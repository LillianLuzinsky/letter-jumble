import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeButtonStyling = styled.button`
  color: white;
  text-decoration: none;
  background: none;
  border: 2px solid white;
  border-radius: 50px;
  font-size: 2rem;
  width: 200px;
  letter-spacing: 2px;
  text-align: center;
  margin: 0 50px;
  transition: 0s;

  :hover{
    background: purple;
    border: 2px solid purple;
    transition: 1s;
  }

  .home-links{
    text-decoration: none;
    color: hotpink;

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