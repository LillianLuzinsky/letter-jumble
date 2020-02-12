import React from 'react';
import Navbar from './components/Navigation/Navbar'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './components/Home/Homepage'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
    </BrowserRouter>
  );
}

export default App;
