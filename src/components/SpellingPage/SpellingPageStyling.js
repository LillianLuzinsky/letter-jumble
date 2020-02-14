import styled from "styled-components";

const SpellingPageStyling = styled.section`
  margin-top: 10vh;
  width: 100%;
  height: 75vh;
  background: red;
  margin: 0;
  padding: 0;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 50px;
  }

  section {
    font-weight: 700;
    color: #3e3e3e;
    font-size: 3rem;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 10rem;
    background: hotpink;
  }
`;

export default SpellingPageStyling;
