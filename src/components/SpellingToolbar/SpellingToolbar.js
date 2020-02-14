import React from 'react'
import styled from 'styled-components';

const SpellingToolbarStyling = styled.div`
  margin-top: 10vh;
  width: 100%;
  height: 15vh;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 2rem;
  background: black;

  h3 {
    margin-left: 1.2rem;
    font-weight: 400;
    font-size: 1.5rem;
    color: #888888;
  }

  button {
    background: none;
    border: none;
    width: 170px;
    border-radius: 50px;
    font-size: 1.5rem;
    letter-spacing: 2px;
    margin-right: 2rem;
    cursor: pointer;
    color: aquamarine;
    border: aquamarine solid 1.5px;
    transition: 1s;

    :hover {
      color: white;
      background: aquamarine;
      border: aquamarine solid 1.5px;
    }
  }
`;

  // const reloadMyPage =  
function reloadMyPage() {
  window.location.reload();
  }


function SpellingToolbar() {
  return (
    <SpellingToolbarStyling>
      <h3>Spell this word by dragging the letters to the bottom of the page</h3>
      <div className="spacer" />
      <button onClick={reloadMyPage}>Next Word</button>
    </SpellingToolbarStyling>
  );
}

export default SpellingToolbar

