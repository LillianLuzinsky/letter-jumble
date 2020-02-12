import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #q {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #ae7fff;
    transition: 2s;

    :hover {
      background-color: #ae7fff;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function Q() {
  return (
    <SVGContainer>
      <svg id="q"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <circle cx="73.8" cy="111.5" r="39.2" className="q"></circle>
        <path d="M77.9 118.9L109.1 157.6" className="q"></path>
      </g>
      <g>
        <ellipse
          cx="162.7"
          cy="123.9"
          className="q"
          rx="25.3"
          ry="25.9"
        ></ellipse>
        <path d="M187.9 94.9L187.9 178.3" className="q"></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default Q;
