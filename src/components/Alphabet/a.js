import React from "react";
import styled from 'styled-components';

const SVGContainer = styled.div`
  #a {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #f4cb00;
    transition: 1.5s;

    :hover {
      background-color: #f4cb00;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function A() {
  return (
    <SVGContainer>
      <svg id="a"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 230 230"
        viewBox="0 0 230 230"
      >
        <g>
          <path d="M43.5 153.5L74.5 71.5 104.5 153.5" className="a"></path>
          <path d="M52.5 129.5L94.5 129.5" className="a"></path>
        </g>
        <g>
          <ellipse
            cx="151"
            cy="125"
            className="a"
            rx="25.5"
            ry="26.5"
          ></ellipse>
          <path d="M176.5 97.5L176.5 152.5" className="a"></path>
        </g>
      </svg>
    </SVGContainer>
  );
}

export default A;

