import React from 'react'
import './skills.css'
import '../../Styles/App.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";


export const Skills = () => {
  return (
    <div className='skills' >
        <h1>Technical Skills:</h1>
        <div className='skills-container'>
            <img src='../../../public/Logos/html5-logo-10.png' className='logo dark-white-effect'/>
            <img src='../../../public/Logos/css-logo.png' className='logo css dark-white-effect'/>
            <img src='../../../public/Logos/javascript-logo-big.png' className='logo dark-white-effect'/>
            <img src='../../../public/assets/react.svg' className='logo dark-white-effect'/>
            <img src='../../../public/Logos/node-js.png' className='logo dark-white-effect'/>
            <img src='../../../public/Logos/Github-Logo-PNG-4091917246.png' className='logo github dark-white-effect'/>
            <img src='../../../public/Logos/python-logo-452175197.png' className='logo dark-white-effect'/>
            <img src='../../../public/Logos/java-logo-1-574885533.png' className='logo java dark-white-effect'/>
            
            
        </div>
    </div>
  )
}
