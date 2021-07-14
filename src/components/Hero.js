import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="hero-section">
         
           <h2>Welcome to Paradise</h2> 
           <h4>Experience the freedom</h4>
           <button className="hero-button"><Link to='/Contacts'>Book now</Link></button>
        </div>
    )
}

export default Hero
