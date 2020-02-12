import React from "react";
import styled from "styled-components";

const SVGContainer = styled.div`
  #s {
    width: 100%;
    height: 100%;
    fill: none;
    stroke-width: 8;
    stroke: #ff00c6;
    transition: 2s;

    :hover {
      background-color: #ff00c6;
      stroke: #1c1c1c;
      stroke-width: 9;
      transition: 0s;
    }
  }
`;

function S() {
  return (
    <SVGContainer>
      <svg id="s"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 230 230"
      viewBox="0 0 230 230"
    >
      <g>
        <path
          d="M102.5 80.1s-14.2-20.3-31.8-5.9c0 0-9.7 8.1-4.5 19.5 3.6 7.9 9.3 10.2 19.5 14.7s21.8 8.7 19.5 24.3c-2 13.6-12.9 18.9-23.6 17.8-10.8-1.1-18.5-8.5-22-16.5"
          className="s"
        ></path>
      </g>
      <g>
        <path
          d="M165.9 106.7S156.6 94 145 103c0 0-6.4 5-3 12.1 2.3 4.9 6.1 6.3 12.8 9.2 6.7 2.8 14.3 5.4 12.8 15.1-1.3 8.5-8.5 11.8-15.5 11.1-7.1-.7-12.1-5.3-14.4-10.2"
          className="s"
        ></path>
      </g>
    </svg>
    </SVGContainer>
    
  );
}

export default S;
