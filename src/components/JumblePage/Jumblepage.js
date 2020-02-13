import React, { useState } from "react";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import styled from 'styled-components';
import { Letter, LetterContainer } from "../Alphabet/Letter";
import Navbar from '../Navigation/Navbar';
import JumbleToolbar from '../JumbleToolbar/JumbleToolbar';

const JumblePageStyling = styled.main`
  margin-top: 25vh;

    @media screen and (max-width: 768px) {
      margin-top: 40vh;
    }

`;

const SortableLetterContainer = sortableContainer(({ children }) => (
  <div className="letter-hover">{children}</div>
));
const SortableLetter = sortableElement(({ node, svg, selectedLetter }) => {
  return (
    <LetterContainer>
      <Letter key={svg} svg={svg} />
    </LetterContainer>
  );
});

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
]

const JumblePage = () => {
  const [svgs, setSvgs] = useState(alphabet);
  const [selectedLetter] = useState('');

  const handleJumble = (newArr) => {
    setSvgs(newArr);
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setSvgs(arrayMove(svgs, oldIndex, newIndex));
  };

  const reset = () => {
    setSvgs(alphabet);
  };

  return (
    <div className="App">
      <Navbar/>
      <JumbleToolbar  
        svgs={svgs}
        handleSetJumble={handleJumble}
        handleReset={reset}
      />
      <JumblePageStyling/>
      <SortableLetterContainer 
        style={{ cursor: "pointer" }}
        axis="xy"
        onSortEnd={onSortEnd}
        onSortStart={(node, event) => {
          event.preventDefault()
        }}
      >
        {svgs.map((svg, i) => {
          return (
            <SortableLetter index={i} selectedLetter={selectedLetter} letter={svgs[i]} key={svg} svg={svg} collection="letters" />
          )

        })}
      </SortableLetterContainer>
    </div>
  );
};

export default JumblePage;