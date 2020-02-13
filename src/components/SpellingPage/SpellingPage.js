import React, { Component } from 'react';
import Navbar from '../Navigation/Navbar'
import SpellingBoard from "../SpellingPage/SpellingBoard";
import SpellingCard from '../SpellingPage/SpellingCard';
import './SpellingPage.css';
import CongratsModal from '../CongratsModal/CongratsModal'

class SpellingPage extends Component {
  words =[
      {
        word: "cat",
        letters: "jadksljfchkdfht",
        image:
          "https://www.purina.com/sites/g/files/auxxlc196/files/AmericanBobtail_body_6.jpg"
      },
      {
        word: "dog",
        letters: "hlaflkkjadfog",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5_yFCdVuUOuEtEE_Y54MApOgGH_70SA8zYaa-8X3y3u0nbSMN"
      },
      {
        word: "ant",
        letters: "actcnc",
        image:
          "https://image.shutterstock.com/image-vector/cute-ant-cartoonvector-illustration-260nw-480060628.jpg"
      },
      {
        word: "mum",
        letters: "dmmus",
        image:
          "https://www.thesun.co.uk/wp-content/uploads/2017/04/image001-e1491233492226.png"
      },
      {
        word: "dad",
        letters: "dpwad",
        image:
          "https://lekgh.com/wp-content/uploads/2018/06/467554208.jpg"
      }
    ];
  

  constructor() {
    super();
    this.state = {
      guess: [],
      letters: [],
      word: [],
      image: ""
    };
  }

  componentDidMount() {
    // get a random word
    let index = Math.floor(Math.random() * this.words.length);

    let word = this.words[index].word.split("");
    let letters = this.words[index].letters.split("");
    let image = this.words[index].image;
    let guess = [];

    // update state
    this.setState(state => ({ word, letters, guess, image }));
  }

  isWin = () => {
    return false;
  }

  render() {
    return (
      <div>
        <Navbar />
        <main className="flexbox">
          <SpellingBoard id="board1" className="board">
            <h1 style={{ marginTop: "400", color: "black" }}>
              {this.state.word}
            </h1>
            <img src={this.state.image} />
            <h1>Guess</h1>
            {this.state.guess.map((letter, i, self) => (
                <SpellingCard key={"guess_" + i} id="card_id" draggable="true">
                  <button>{letter}</button>
                </SpellingCard>
              )
            )}
          </SpellingBoard>

          <SpellingBoard id="board2" className="board">
            <h1>Letters</h1>
            {this.state.letters.map((c, index) => (
              <SpellingCard
                key={"letter_" + index}
                id={"letter_" + index}
                draggable="true"
              >
                <button>{c}</button>
              </SpellingCard>
            ))}
          </SpellingBoard>
          {this.isWin() && <CongratsModal></CongratsModal>}
        </main>
      </div>
    );
  }
}

export default SpellingPage;



