import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #y {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #60c0ea;
    transition: 2s;

    :hover {
      background-color: #60c0ea;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function Y() {
  return (
    <SVGContainer>
      <svg id="y"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path d="M73.5 114.1L43 73" className="y"></path>
        <path d="M103.8 73L73.5 114.1 73.5 155.9" className="y"></path>
      </g>
      <g>
        <path
          d="M129.4 97.1v31.4s-2.1 23.2 20.2 24.6c22.3 1.4 22.3-26.6 22.3-26.6"
          className="y"
        ></path>
        <path
          d="M171.9 97.1V150s.7 15.1-9.7 22.4c-8.6 6-17.9 6.1-28.2-.8"
          className="y"
        ></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default Y;
