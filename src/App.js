import React from 'react';
import Navbar from './components/Navigation/Navbar'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './components/Home/Homepage'
import Jumblepage from './components/JumblePage/Jumblepage'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HomePage/>
      <Jumblepage/>
    </BrowserRouter>
  );
}

export default App;
