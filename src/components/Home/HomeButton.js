import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeButtonStyling = styled.button`
  color: white;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.3);
  /* background:url("https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-double-twelve-purple-gradient-e-commerce-promotion-geometry-banner-image_183414.jpg") no-repeat center;
  background-size: cover; */
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

  :hover {
    background: darkcyan;
    border: 2px solid aquamarine;
    transition: 1s;
  }
`;
const HomeButton = () => {
  return (
    <div>
      <Link
        className="home-links"
        to="/jumble"
        className="links"
      >
        <HomeButtonStyling>Jumble</HomeButtonStyling>
      </Link>
      <Link
        className="home-links"
        to="/spelling"
        className="links"
      >
        <HomeButtonStyling>Spelling</HomeButtonStyling>
      </Link>
    </div>
  );
}

export default HomeButton;