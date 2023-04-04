import React, { useState } from 'react';
import Home from '../Home/Home'
import Characters from '../Characters/Characters';
import Episodes from '../Episodes/Episodes';

const Body = (props) => {
  return (
    <>
    {props.isTrueHome ? <Home/> : <div></div>}
    {props.isTrueCharacters ? <Characters/> : <div></div>}
    {props.isTrueEpisodes ? <Episodes/> : <div></div>}
    </>
  )
}

export default Body