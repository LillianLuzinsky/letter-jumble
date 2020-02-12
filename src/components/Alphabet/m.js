import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #m {
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

function M() {
  return (
    <SVGContainer>
      <svg id="m"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path
          d="M22.8 154L22.8 71.8 55.1 117.7 87.4 71.8 87.4 154"
          className="m"
        ></path>
      </g>
      <g>
        <path d="M122.5 95.3L122.5 154.9" className="m"></path>
        <path
          d="M122.5 119.5s.9-21.7 20.9-21.7 21.2 21.7 21.2 21.7l-.1 35.4"
          className="m"
        ></path>
        <path
          d="M164.6 121.9s.3-24.1 20.5-24.1c21 0 21.7 21.4 21.7 21.4v35.7"
          className="m"
        ></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default M;
