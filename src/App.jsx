import React, { useState } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import './App.css';

function App() {
  const [TrueHome, setTrueHome] = useState(true);
  const [TrueCharacters, setTrueCharacters] = useState(false);
  const [TrueEpisodes, setTrueEpisodes] = useState(false);
  return (
    <div className="App">
      <Header 
      isTrueHome={TrueHome} setIsTrueHome={setTrueHome} 
      isTrueCharacters={TrueCharacters} setTrueCharacters={setTrueCharacters} 
      isTrueEpisodes={TrueEpisodes} setTrueEpisodes={setTrueEpisodes} />

      <Body isTrueHome={TrueHome} isTrueCharacters={TrueCharacters} isTrueEpisodes={TrueEpisodes}/>

      <Footer/>
    </div>
  );
}

export default App;
