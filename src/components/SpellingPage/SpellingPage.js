import React, { Component } from 'react';
import Navbar from '../Navigation/Navbar'

class SpellingPage extends Component {

  words = {
    level_1: [
      { word: "cat", letters: "abcdefghijklmnopqrstuvwxyz", image: "https://www.purina.com/sites/g/files/auxxlc196/files/AmericanBobtail_body_6.jpg" },
      { word: "doc", letters: "abcdefghijklmnopqrstuvwxyz", image: "https://www.purina.com/sites/g/files/auxxlc196/files/AmericanBobtail_body_6.jpg" },
      { word: "ant", letters: "abcdefghijklmnopqrstuvwxyz", image: "https://www.purina.com/sites/g/files/auxxlc196/files/AmericanBobtail_body_6.jpg" },
      { word: "mum", letters: "abcdefghijklmnopqrstuvwxyz", image: "https://www.purina.com/sites/g/files/auxxlc196/files/AmericanBobtail_body_6.jpg" },
      { word: "dad", letters: "abcdefghijklmnopqrstuvwxyz", image: "https://www.purina.com/sites/g/files/auxxlc196/files/AmericanBobtail_body_6.jpg" },
    ]
  }


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
    let level = "level_1"; // get this from route parameter
    let index = Math.floor(Math.random() * this.words[level].length);


    let word = this.words[level][index].word.split('');
    let letters = this.words[level][index].letters.split('');
    let image = this.words[level][index].image
    let guess = [];

    // update state
    this.setState((state) => ({ word, letters, guess, image }));
  }

  render() {
    return (
      <div>
        <Navbar/>
        <img src={this.state.image} width="100" />
        <h1>Guess</h1>
        <ul>
          {this.state.guess.map((c, i) => (<li key={'guess_' + i}>{c}</li>))}
        </ul>

        <h1>Letters</h1>
        <ul>
          {this.state.letters.map((c, i) => (<li key={'letter_' + i}>{c}</li>))}
        </ul>
      </div>
    );
  }
}

export default SpellingPage;



