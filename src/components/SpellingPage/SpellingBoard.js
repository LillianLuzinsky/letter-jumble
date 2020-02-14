import React from "react";
import styled from 'styled-components'

const SpellingBoardStyling = styled.section`
  height: 20vh;
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function SpellingBoard(props) {
  const drop = e => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const guessedLetter = props.letters[card_id.split('').pop()];
    const card = document.getElementById(card_id);
    // card.style.display = "block";
    e.target.appendChild(card);
    if (props.setGuessLetter) {
      props.setGuessLetter(guessedLetter, card_id.split('').pop());
    }
    if (props.removeGuessLetter) {
      props.removeGuessLetter(guessedLetter, card_id.split('').pop());
    }
  };

  const dragOver = e => {
    e.preventDefault();
  };

  return (
    <SpellingBoardStyling
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </SpellingBoardStyling>
  );
}

export default SpellingBoard;
