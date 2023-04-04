import React from 'react'
import portal from '../Multimedia/Portal 1.png'
import gato from '../Multimedia/GatoRick 1.png'
import './Home.css'

const Home = () => {
  return (
    <div className='mainHome'>
        <div className='title'>
            <h1>The Rick and Morty API</h1>
        </div>
        <div className='info'>
            <div className='image'><img className='img1' src={portal} alt="Portal" /><img className='img2' src={gato} alt="gato" /></div>
            <div className='text'>
                <p>Do you know the origin of the talking cat in Rick and Morty?</p>
                <p>
                    I'll tell you: the cat is actually a Morty. The cat is a cosmic entity with indescribable evil.
                    The cat references the Garfield meme saying "Sorry, Jon." The cat was the victim of unspeakable violence
                </p>
            </div>
        </div>
    </div>
  )
}

export default Home