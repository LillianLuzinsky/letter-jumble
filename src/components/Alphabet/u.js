import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #u {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #f4cb00;
    transition: 2s;

    :hover {
      background-color: #f4cb00;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function U() {
  return (
    <SVGContainer>
      <svg id="u"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path
          d="M44.9 73.7V121s-.6 33.5 30.3 34c32.2.5 32.2-33.2 32.2-33.2V73.7"
          className="u"
        ></path>
      </g>
      <g>
        <path
          d="M140.2 96.1v36.3s-.4 22.6 20.1 22.6c21.4 0 21.4-22.5 21.4-22.5V96.1"
          className="u"
        ></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default U;