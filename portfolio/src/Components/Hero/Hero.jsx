import React from 'react'
import heroImg from '../../../public/assets/profile-pic.png'
import { FaGithub } from "react-icons/fa";
import './hero.css'
import '../../Styles/App.css'

export const Hero = () => {
  return (
    <div className='hero'>
        
        <div className='hero-text'>
            <p>Hello, I'm</p>
            <h2>Youssef Mlika</h2>
            <h3>Frontend Developer</h3>
            <div className='hero-btns'>
                <button className='cv-btn'>Download CV</button>
                <button className='contact-btn'>Contact Me</button>
            </div>
            <div className='links'>
                <FaGithub size={40}/>
            </div>
        </div>
        <img  src={heroImg} 
        alt="profile-pic " 
        className='hero-profile-img dark-white-effect'/>
    </div>
  )
}
