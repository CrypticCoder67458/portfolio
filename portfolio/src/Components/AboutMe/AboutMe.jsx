import React from 'react'
import myImg from '../../../public/assets/profile-pic-normal.jpeg'
import './about-me.css'
export const AboutMe = () => {
  return (
    <div className='about-me-container'>
      <h1>About Me</h1>
      <div className='about-me-content'>
        <img src={myImg} alt="Profile Picture" className='about-me-profile-img' />

        <div className='about-me-text'>
          <div className='about-me-highlights'>
            <div className='about-me-highlight'>
              <div className='highlight'>
                <img src='../../../public/assets/education.png' alt="Education Icon" />
                <b>Education:</b> 
              </div>
              <p>Tu Darmstadt (BSc Informatics)</p>
            </div>

            <div className='about-me-highlight'>
              <div className='highlight'>
                <img src='../../../public/assets/experience.png' alt="Experience Icon" />
                <b>Experience:</b>
              </div>
              <p>Bootcamp JS & React</p>
            </div>
          </div>

          <p className='about-me-paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut obcaecati rerum similique maiores sit voluptatibus consequatur, architecto perspiciatis unde, provident error perferendis. Quaerat, ab laudantium. Cum ipsum nemo dolor sit nihil expedita, officia tempore nulla, dolores pariatur explicabo! Laudantium facilis officia, quisquam perferendis quis alias voluptatum excepturi ratione in?
          </p>
          
        </div>
      </div>
    </div>
  )
}
