import React from 'react'
import { projects } from '../../../public/assets/projects'
import { Project } from './Project'
export const Projects = () => {
  return (
    <div>
      <div className='projects-section-title'>
        <h2>My Portfolio</h2>
        <p>most recent projects</p>
      </div>
      <div className='projects-container'>
        {projects.map((project)=><Project project={project}
        key={project.number}/>)}
      </div>

    
      
    </div>
  )
}
