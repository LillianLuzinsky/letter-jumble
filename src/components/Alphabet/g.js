import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #g {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #ae7fff;
    transition: 1.5s;

    :hover {
      background-color: #ae7fff;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function G() {
  return (
    <SVGContainer>
      <svg id="g"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path
          d="M107.9 82.5c-7.3-6.8-17.1-11-27.9-11-22.4 0-40.5 17.9-40.5 40s18.1 40 40.5 40c9.2 0 19.7-3 26.5-8.2v-30.8h-29"
          className="g"
        ></path>
      </g>
      <g>
        <ellipse
          cx="159"
          cy="124"
          className="g"
          rx="25.5"
          ry="26.5"
        ></ellipse>
        <path d="M184.5 96.5v47s1 17-9 24-23 5-29 3" className="g"></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default G;
