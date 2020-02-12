import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #w {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #a0f500;
    transition: 2s;

    :hover {
      background-color: #a0f500;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function W() {
  return (
    <SVGContainer>
      <svg id="w"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path
          d="M16.7 71.6L50.8 151.2 74.8 93.3 99.4 151.2 132.8 71.6"
          className="w"
        ></path>
      </g>
      <g>
        <path
          d="M136.4 96.8L160 151.2 176 111.4 192.3 151.2 215.6 96.8"
          className="w"
        ></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default W;
