import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #r {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #ff6fff;
    transition: 2s;

    :hover {
      background-color: #ff6fff;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function R() {
  return (
    <SVGContainer>
      <svg id="r"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path d="M59 70L59 153.7" className="r"></path>
        <path
          d="M56.4 72.1h22.5s25.5-1.3 25.5 20.8c0 21.1-16.6 22.3-25.9 22.3H56.4"
          className="r"
        ></path>
        <path d="M90.1 114.8L108.7 153.7" className="r"></path>
      </g>
      <g>
        <path d="M140.3 95.2L140.3 153.7" className="r"></path>
        <path d="M140.3 124.6s4.6-27.5 30-26.5" className="r"></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default R;
