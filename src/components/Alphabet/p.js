import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #p {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #6392ff;
    transition: 2s;

    :hover {
      background-color: #6392ff;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function P() {
  return (
    <SVGContainer>
      <svg id ="p"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path d="M55.5 69.7L55.5 153.4" className="p"></path>
        <path
          d="M52.9 71.8h22.5s25.5-1.3 25.5 20.8c0 21.1-16.6 22.3-25.9 22.3H52.9"
          className="p"
        ></path>
      </g>
      <g>
        <path d="M127.4 94.9L127.4 178.1" className="p"></path>
        <ellipse
          cx="153"
          cy="123.3"
          className="p"
          rx="25.5"
          ry="26.2"
        ></ellipse>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default P;
