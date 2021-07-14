import React from 'react'
import './About.css';
import {Images} from './Images';

const About = () => {

    const images = Images.map(({src},index)=>{
        return (
            <div className="pics" key={index}>
            <img src = {src} alt='perez'/>
            </div>
        
        )
        
    });
    
    return (
        <>
        <div className='about-section'>
           <h3>Come Experience with us the beauty of nature </h3>
        </div>
        
        <div className='about-gallery'>
         {images}
        </div>
        </>
    )
}

export default About
