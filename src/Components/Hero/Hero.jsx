import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>UVA HooRaas</h1>
            <p>The University of Virginia's Garba-Raas Team</p>
            {/* <button className='btn'>Explore more</button> */}
            <a href='/season' className='btn'>
              Explore more
            </a>
        </div>
    </div>
  )
}

export default Hero