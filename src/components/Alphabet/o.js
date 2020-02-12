import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #o {
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

function O() {
  return (
    <SVGContainer>
      <svg id="o"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <ellipse
          cx="76.8"
          cy="111.5"
          className="o"
          rx="37.4"
          ry="39.6"
        ></ellipse>
      </g>
      <g>
        <ellipse
          cx="164.7"
          cy="124.4"
          className="o"
          rx="25.2"
          ry="26.7"
        ></ellipse>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default O;