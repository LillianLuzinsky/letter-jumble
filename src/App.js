import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './components/Home/Homepage'
import JumblePage from './components/JumblePage/Jumblepage';
import SpellingPage from './components/SpellingPage/SpellingPage'



function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/jumble">
        <JumblePage />
      </Route>
      <Route exact path="/spelling">
        <SpellingPage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
