import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #d {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #73ffa5;
    transition: 1.5s;

    :hover {
      background-color: #73ffa5;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function D() {
  return (
    <SVGContainer>
      <svg id="d"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path d="M47.5 70L47.5 155" className="d"></path>
        <path
          d="M46 72.5h11.5s40-2 45 37c0 0 3 40-42 43H45"
          className="d"
        ></path>
      </g>
      <g>
        <ellipse
          cx="154"
          cy="125"
          className="d"
          rx="25.5"
          ry="26.5"
        ></ellipse>
        <path d="M179.5 71.5L179.5 152.5" className="d"></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default D;
