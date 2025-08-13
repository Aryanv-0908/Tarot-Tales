import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll'
const Hero = () => {
  return (
    <div className='hero conatiner'>
        <div className="hero-text">
            <h1>The cards tell a story.</h1>
            <h1>But you write the ending.</h1>
            <p>Tarot is a tool for confident decision-making, clear communication and timely, decisive action. With each Tarot reading, we can explore the pros + cons of different choices that you might make — creating the best possible plan for the future you want.</p>
            <Link to='about' smooth={true} offset={-170} spy={true} duration={500}><button className="btn">Explore More</button></Link>
        </div>
    </div>
  )
}

export default Hero
