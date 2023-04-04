import React from 'react'
import './Footer.css'
import gitLogo from '../Multimedia/githubLogo.png'
import waLogo from '../Multimedia/waLogo.png'
import senaLogo from '../Multimedia/logoSena.png'

const Footer = () => {
  return (
    <div className='mainFooter'>
      <div className='DivLeft'> 
        <p>Desing making for Dhaniel-Ramcrack</p>
        <img src={gitLogo} alt="" />
        <img src={waLogo} alt="" />
      </div>
      <div className='DivRigth'>
        <img src={senaLogo} alt="" />
      </div>
    </div>
  )
}

export default Footer