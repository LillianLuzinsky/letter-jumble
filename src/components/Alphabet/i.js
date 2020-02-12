import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #i {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #ff00c6;
    transition: 2s;

    :hover {
      background-color: #ff00c6;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function I() {
  return (
    <SVGContainer>
      <svg id="i"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path d="M91 71.5L91 153.5" className="i"></path>
      </g>
      <g>
        <path d="M137.5 94.5L137.5 153.5" className="i"></path>
        <path d="M137.5 74.5L137.5 84.5" className="i"></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default I;
