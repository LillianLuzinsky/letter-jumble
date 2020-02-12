import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #b {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #f2f200;
    transition: 1.5s;

    :hover {
      background-color: #f2f200;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function B() {
  return (
    <SVGContainer>
      <svg
        id="b"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 230 230"
        version="1.1"
        viewBox="0 0 230 230"
        xmlSpace="preserve"
      >
        <g>
          <path
            d="M54.5 152.5v-80h18s19 0 19 20c0 0-1 16-15 16h-20"
            className="b"
          ></path>
          <path
            d="M55.5 108.5h21s24 1 24 22c0 20-22 21-24 21H52"
            className="b"
          ></path>
        </g>
        <g>
          <path d="M125.5 71L125.5 153" className="b"></path>
          <ellipse
            cx="151"
            cy="125"
            className="b"
            rx="25.5"
            ry="26.5"
          ></ellipse>
        </g>
      </svg>
    </SVGContainer>
  );
}

export default B;
