import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #j {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #f28400;
    transition: 2s;

    :hover {
      background-color: #f28400;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function J() {
  return (
    <SVGContainer>
      <svg id="j"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path
          d="M104.5 70.5v54s0 18.9-17 25c-14 5-29-2-35-18"
          className="j"
        ></path>
      </g>
      <g>
        <path d="M145.5 74.5L145.5 84.5" className="j"></path>
        <path d="M145.5 95.5v71s0 8-10 8" className="j"></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default J;
