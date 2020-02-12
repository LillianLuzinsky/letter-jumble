import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #v {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #f2f200;
    transition: 2s;

    :hover {
      background-color: #f2f200;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function V() {
  return (
    <SVGContainer>
      <svg id="v"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path d="M43.4 71.4L77.2 151.6 111 71.4" className="v"></path>
      </g>
      <g>
        <path d="M130.3 97.2L155.2 151.6 177.7 97.2" className="v"></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default V;
