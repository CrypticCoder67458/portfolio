import React from 'react'
import myImg from '../../../public/assets/side-pic-profile-youssef-mlika2.jpeg'
import './about-me.css'
import '../../Styles/App.css'
import { FaBook } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { Highlight } from './Highlight';
import { FaFileDownload } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
export const AboutMe = ({isEnglish}) => {

  return (
    <div className="about-me-container" 
    id='about'>
      <h1 className='section-title'>{isEnglish ? 'About Me' : 'Über mich'}</h1>
      <div className="about-me-content">
        <img
          src={myImg}
          alt="Profile Picture"
          className="about-me-profile-img  dark-white-effect"
        />

        <div className="about-me-text">
          <div className="about-me-highlights">
            <Highlight
              element={<FaBook size={20} />}
              title={isEnglish ? 'Education' : 'Bildung'}
              text={isEnglish ? 'Tu Darmstadt (BSc Informatics)' : 'TU Darmstadt (BSc Informatik)'} 
            />
            <Highlight
              element={<MdWorkspacePremium size={25} />}
              title={isEnglish ? 'Experience' : 'Erfahrung'}
              text={'Bootcamp JS & React'} 
            />
          </div>

          <p className="about-me-paragraph">
            {isEnglish ? 
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut obcaecati rerum similique maiores sit voluptatibus consequatur, architecto perspiciatis unde, provident error perferendis. Quaerat, ab laudantium. Cum ipsum nemo dolor sit nihil expedita, officia tempore nulla, dolores pariatur explicabo! Laudantium facilis officia, ' :
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut obcaecati rerum similique maiores sit voluptatibus consequatur, architecto perspiciatis unde, provident error perferendis. Quaerat, ab laudantium. Cum ipsum nemo dolor sit nihil expedita, officia tempore nulla, dolores pariatur explicabo! Laudantium facilis officia, die ich studierte und einige Erfahrungen gesammelt habe. '}
          </p>
          <div className='about-me-btns'>

            <button >{isEnglish ? 'See my grades' : 'Meine Noten anzeigen'}
              <FaEye size={20}/>
            </button>
            <button >{isEnglish ? 'Download CV' : 'Mein Lebenslauf herunterladen'}
              <FaFileDownload size={20}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
