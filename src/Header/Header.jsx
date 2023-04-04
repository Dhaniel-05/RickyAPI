import React, { useState } from 'react';
import logoBlack from '../Multimedia/logo-black 1.png'
import './Header.css'

const Header = (props) => {


  const OpenHome = () => {
    if (!props.isTrueHome) {
      props.setIsTrueHome(!props.isTrueHome);
      props.setTrueCharacters(false);
      props.setTrueEpisodes(false);
    }
  };

  const OpenCharacters = () => {
    if (!props.isTrueCharacters) {
      props.setTrueCharacters(!props.isTrueCharacters);
      props.setIsTrueHome(false);
      props.setTrueEpisodes(false);
    }
  };

  const OpenEpisodes = () => {
    if (!props.isTrueEpisodes) {
      props.setTrueEpisodes(!props.isTrueEpisodes);
      props.setTrueCharacters(false);
      props.setIsTrueHome(false);
    }
  };
  
  return (
    <nav>
    <div className="navbar-left">
      <img src={logoBlack} alt="Logo" />
    </div>
    <div className="navbar-right">
        <div onClick={OpenHome}><h2>Home</h2></div>
        <div onClick={OpenCharacters}><h2>Characters</h2></div>
        <div onClick={OpenEpisodes}><h2>Episodes</h2></div>
    </div>
  </nav>
  )
}

export default Header