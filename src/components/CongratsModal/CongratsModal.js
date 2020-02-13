import React from "react";
import styled from "styled-components";

const ModalButton = styled.button`
  background: turquoise;
  border-radius: 40px;
  border: 3px solid white;
  color: white;
  font-weight: 400;
  font-size: 1.5rem;
  margin: 0 1rem 1rem 1rem;
  padding: 0.25em 1em;
  box-shadow: 4px 4px #222;
  width: 300px;

  &:hover {
    box-shadow: none;
    background: #f2e266;
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: white solid 5px;
  border-radius: 300px;
  background: #9bf2d7;
  text-align: center;
  width: 650px;
  height: 280px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  transition: all 0.8s;
  position: absolute;
  z-index: 3;

  @media (min-width: 500px) and (max-width: 1000px) {
    margin: 0 10%;
    width: 600px;
  }
`;

const ModalText = styled.div`
  margin: 1rem;
`;

const CongratsModal = props => {
  return (
    <ModalWrapper
      style={{
        transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      <ModalText>
        <h1 id="modalTitle">Congrats!!!!</h1>
        <p id="modalParr">That was great work &#x1F600;</p>
      </ModalText>

      <ModalButton onClick={props.close}>Close</ModalButton>
    </ModalWrapper>
  );
};

export default CongratsModal;