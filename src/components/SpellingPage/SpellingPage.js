import React, { Component } from 'react';
import Navbar from '../Navigation/Navbar'
import CongratsModal from '../CongratsModal/CongratsModal';
import SpellingBoard from "../SpellingPage/SpellingBoard";
import SpellingCard from '../SpellingPage/SpellingCard';
import SpellingPageStyling from './SpellingPageStyling';
import SpellingToolbar from '../SpellingToolbar/SpellingToolbar';

class SpellingPage extends Component {
  words = [
    {
      word: "bee",
      letters: "xebptde",
      image: "https://media0.giphy.com/media/QXJa2uAa44fYRSats0/giphy.gif"
    },
    {
      word: "cat",
      letters: "avdtcth",
      image:
        "https://cdn.dribbble.com/users/2289040/screenshots/5511661/dribbble.gif"
    },
    {
      word: "dog",
      letters: "dgdtzol",
      image: "https://media1.giphy.com/media/9El4QawNPfeBW/source.gif"
    },

    {
      word: "fox",
      letters: "xdftodh",
      image:
        "https://i.pinimg.com/originals/5e/3a/69/5e3a6925e67a8e7f6293c09f2cc9f4f7.gif"
    },
    {
      word: "mum",
      letters: "mudfmai",
      image:
        "https://lh3.googleusercontent.com/proxy/Ped4WeqmI7KCK5ozPzMK4DuXo_aTf73_EgTd7wTAe-YFei_XL1EvydK04UAx_7uWLez-UIy403Ow8glBbLAwSRni_4NB1Vsn9_JIrS8KyMz1IR3yUl8"
    },
    {
      word: "dad",
      letters: "apdpwad",
      image:
        "https://cdn.dribbble.com/users/2834752/screenshots/6195752/mar_16.gif"
    },
    {
      word: "pig",
      letters: "ipwagyh",
      image:
        "https://i.pinimg.com/originals/76/24/87/762487cf2f31160eea07c39426d6e639.gif"
    },
    {
      word: "hat",
      letters: "dthadzv",
      image:
        "https://i.pinimg.com/originals/16/5f/8f/165f8f106e386ecdd36e5b3a07ceff37.gif"
    },
    {
      word: "egg",
      letters: "dgweptg",
      image: "https://media1.giphy.com/media/biwEneuqbSpM5HDiM2/giphy.gif"
    },
    {
      word: "sun",
      letters: "unhsxwy",
      image:
        "https://media1.tenor.com/images/0620fecdd6795972cfa1d7777803e068/tenor.gif?itemid=14419210"
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
  };

  render() {
    return (
      <div>
        <Navbar />
        <SpellingToolbar />
        <SpellingPageStyling>
          <header>
            <img src={this.state.image} />
            {this.state.word}
          </header>
          <SpellingBoard>
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
          <SpellingBoard>
            {this.state.guess.map((letter, i, self) => (
              <SpellingCard key={"guess_" + i} id="card_id" draggable="true">
                <button id="letter">{letter}</button>
              </SpellingCard>
            ))}
          </SpellingBoard>

          {this.isWin() && <CongratsModal></CongratsModal>}
        </SpellingPageStyling>
      </div>
    );
  }
}

export default SpellingPage;



