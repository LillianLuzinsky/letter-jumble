import styled from "styled-components";

const SpellingPageStyling = styled.section`
  margin-top: 10vh;
  width: 100%;
  height: 75vh;
  margin: 0;
  padding: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 30px;
  }

  section {
    justify-content: center;
    color: #3e3e3e;
    font-size: 3rem;
    margin-bottom: 5vh;
    width: 80vw;
    background: #1c1c1c;
  }

  header {
    width: 550px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    font-size: 10rem;
  }

  button {
    width: 10vw;
    height: 10vw;
    background: transparent;
    color: #0f0;
    border: none;
    font-weight: 400;
    font-size: 5rem;
    transition: 1.5s;
    /* animation: animate 4s linear infinite; */

    :hover {
      background: #0f0;
      color: black;
      animation: animate 4s linear infinite;
    }
  }

  @keyframes animate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

export default SpellingPageStyling;
