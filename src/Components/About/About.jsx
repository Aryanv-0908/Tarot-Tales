import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
        </div>
        <div className="about-right">
            <h3>About</h3>
            <p>Welcome to Tarot Tales by Naincy – where intuition meets insight.</p>
            <p>Founded with a deep passion for helping others find clarity, healing, and purpose, Tarot Tales by Naincy is a safe space for self-discovery through the ancient art of tarot reading. Every card pulled tells a story—your story—and Naincy is here to guide you through it with compassion, wisdom, and authenticity.</p>
            <p>Whether you're seeking answers about love, career, personal growth, or spiritual direction, Naincy's readings offer more than predictions—they offer perspective. Each session is designed to empower you, helping you navigate life’s crossroads with confidence and peace of mind.</p>
            <p>With a warm and intuitive approach, Naincy believes that tarot is not just about fortune-telling—it’s about reflecting on your present, understanding your past, and shaping your future. Through personalized readings, workshops, and healing sessions, Tarot Tales by Naincy aims to support your journey with empathy, clarity, and trust.</p>
            <p>✨ Let the cards speak. Let your path unfold.</p>
        </div>
    </div>
  )
}

export default About
