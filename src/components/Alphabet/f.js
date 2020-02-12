import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #f {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #6392ff;
    transition: 1.5s;

    :hover {
      background-color: #6392ff;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function F() {
  return (
    <SVGContainer>
      <svg id="f"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path d="M71.5 73.5L71.5 157.5" className="f"></path>
        <path d="M69.5 75.5L115.5 75.5" className="f"></path>
        <path d="M70.5 114.5L111.5 114.5" className="f"></path>
      </g>
      <g>
        <path d="M166.5 74.5s-16-3-16 11v71" className="f"></path>
        <path d="M137.5 99.5L165.5 99.5" className="f"></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default F;
