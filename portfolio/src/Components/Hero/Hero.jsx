import React from 'react'
import heroImg from '../../../public/assets/Designer.png'
import { FaGithub } from "react-icons/fa";
import './hero.css'
import '../../Styles/App.css'

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
  const handleCVDownload = (e) => {
    e.preventDefault()
    const link = document.createElement('a')
    link.download = 'Youssef-Mlika-FlowCV-Lebenslauf-20240710.pdf'
    link.href = e.target.getAttribute('download')
    link.click()
  }
  return (
    <div className='hero'>
        <div className='hero-text'>
            <p>{text.firstP}</p>
            <h2>Youssef Mlika</h2>
            <h3>{text.secondP}</h3>
            <div className='hero-btns'>
                <button className='cv-btn' onClick={(e) => handleCVDownload(e)}>Download CV</button>
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
