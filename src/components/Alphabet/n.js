import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #n {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #73ffa5;
    transition: 2s;

    :hover {
      background-color: #73ffa5;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function N() {
  return (
    <SVGContainer>
      <svg id="n"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path
          d="M47.7 154L47.7 75.6 104.2 148.4 104.2 70.8"
          className="n"
        ></path>
      </g>
      <g>
        <path d="M138.5 95.3L138.5 154" className="n"></path>
        <path
          d="M138.5 123.1s-.5-25 21-25c23.4 0 21.1 25 21.1 25V154"
          className="n"
        ></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default N;