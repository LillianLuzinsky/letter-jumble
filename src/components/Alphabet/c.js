import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #c {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #a0f500;
    transition: 1.5s;

    :hover {
      background-color: #a0f500;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function C() {
  return (
    <SVGContainer>
      <svg
        id="c"
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
            d="M112 82.6c-7.5-6.5-17.6-10.4-28.5-10.1-22.6.6-40.5 18.8-40 40.6.6 21.8 19.4 39 42 38.4 10.2-.3 19.4-4.1 26.4-10.2"
            className="c"
          ></path>
        </g>
        <g>
          <path
            d="M183 104.9c-5.1-4.4-12-7-19.5-6.8-15.5.4-27.7 12.7-27.3 27.5s13.3 26.4 28.7 26c6.9-.2 13.2-2.8 18-6.9"
            className="c"
          ></path>
        </g>
      </svg>
    </SVGContainer>
  );
}

export default C;
