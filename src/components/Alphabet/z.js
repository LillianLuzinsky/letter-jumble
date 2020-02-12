import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #z {
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

function Z() {
  return (
    <SVGContainer>
      <svg id="z"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path
          d="M44.6 75.4L104.2 75.4 47.7 152.9 107.1 152.9"
          className="z"
        ></path>
      </g>
      <g>
        <path
          d="M130 100.4L170.3 100.4 132.1 152.9 172.3 152.9"
          className="z"
        ></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default Z;
