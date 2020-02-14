import React from 'react'
import styled from 'styled-components';

const SpellingToolbarStyling = styled.div`
  position: absolute;
  top: 10vh;
  width: 100%;
  height: 15vh;
  background: blue;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;

  h3 {
    margin-left: 1.2rem;
    font-weight: 400;
    font-size: 1.5rem;
    color: #888888;
  }
`;

function SpellingToolbar() {
  return (
    <SpellingToolbarStyling>
      <h3>Drag these letters to spell the above word</h3>
      <div className="spacer" />
      <button>Next Word</button>
    </SpellingToolbarStyling>
  );
}

export default SpellingToolbar

