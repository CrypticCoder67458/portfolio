import React from 'react'
import heroImg from '../../../public/assets/Designer.png'
import { FaGithub } from "react-icons/fa";
import './hero.css'
import '../../Styles/App.css'
import cv from '../../../public/assets/Youssef-Mlika-FlowCV-Lebenslauf-20240710.pdf'
export const Hero = ({isEnglish}) => {
  const english = {
    firstP: 'Hello, I\'m',
    secondP: 'Frontend Web Developer'
  }
  const german = {
    firstP: 'Hallo, ich bin',
    secondP: 'Frontend Web Entwickler'
  }
  const text = isEnglish ? english : german
  
  return (
    <div className='hero'>
        <div className='hero-text'>
            <p>{text.firstP}</p>
            <h2>Youssef Mlika</h2>
            <h3>{text.secondP}</h3>
            <div className='hero-btns'>
                <a href='' download={cv}><button className='cv-btn'>Download CV</button></a>
                <a href='#contact'><button className='contact-btn'>Contact Me</button></a>
            </div>
            <a  href='https://github.com/CrypticCoder67458?tab=repositories' className='links'>
                <FaGithub size={40}/>
            </a>
        </div>
        <img  src={heroImg} 
        alt="profile-pic " 
        className='hero-profile-img dark-white-effect'/>
    </div>
  )
}
