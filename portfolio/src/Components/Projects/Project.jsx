import React from 'react'
import './projects.css'
import '../../Styles/App.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

export const Project = ({project,isEnglish}) => {
  return (
    <div className='project'>
        <img src={project.img} className='dark-white-effect' />
        <h1>{project.title}</h1>
        
        <div className='project-info'>
            <div className='project-links zoom-effect'>
            <FaArrowLeft size={20}/>Live Demo </div>
            <div  className='project-links zoom-effect'>Code <FaArrowRight size={20}/></div>
        </div>

    </div>
  )
}
