import React from 'react'
import projectImg from '../../../public/projects screenshots/e-commerce website.png'
import './projects.css'
import '../../Styles/App.css'
export const Project = () => {
  return (
    <div className='project'>
        <img src={projectImg} className='dark-white-effect' />
        <h1>E-commerce website</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis odit doloremque aliquam corrupti maxime tempora dolorum dignissimos eius aliquid sed fuga asperiores quia totam deserunt magnam, suscipit modi quam! Sed placeat molestias fugit excepturi eius maiores rem dolores ullam? Beatae aut cupiditate, mollitia dicta reiciendis consequuntur modi ipsum ut ratione!</p>
        <div className='project-btns'>
            <button>Live</button>
            <button>Code</button>
        </div>

    </div>
  )
}
