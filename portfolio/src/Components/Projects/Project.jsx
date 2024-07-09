import React from 'react'
import './projects.css'
import '../../Styles/App.css'
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

export const Project = ({project}) => {
  return (
    <div className='project'>
        <img src={project.img} className='dark-white-effect' />
        {project.isWorking ? null:<div className='not-working'>Currently Not Working</div>}
        <h1>{project.title}</h1>
        
        <div className='project-info'>
            <a  href={project.demoUrl} className='project-links zoom-effect'>
            <FaArrowLeft size={20}/>Live Demo </a>
            <a  href={project.codeUrl} className='project-links zoom-effect'>Code <FaArrowRight size={20}/></a>
        </div>

    </div>
  )
}
