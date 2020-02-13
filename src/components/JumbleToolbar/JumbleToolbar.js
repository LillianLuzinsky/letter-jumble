import React from 'react';
import './JumbleToolbar.css';
import JumbleToggleButton from './JumbleToggleButton'

const JumbleToolbar = ({ svgs, handleSetJumble, handleReset }) => {

  const jumbleArr = () => {
    const newArr = new Array(26).fill(null)
    const randomPos = () => Math.floor(Math.random() * 26);
    svgs.forEach(el => {
      let found = false;
      let random = randomPos();
      while (!found) {
        if (!newArr[random]) {
          newArr[random] = el;
          found = true;
        } else {
          random = randomPos();
        };
      };
    });
    handleSetJumble(newArr);
  };

  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div>
        </div>
        <div className="toolbar-header">
          <h3>Press the "Jumble" button and drag and drop the letters back in order</h3>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <button onClick={jumbleArr} id="jumble">Jumble</button>
            </li>
            <li>
              <button onClick={handleReset} id="reset">Reset</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default JumbleToolbar;