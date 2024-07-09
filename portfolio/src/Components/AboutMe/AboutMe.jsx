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

  const handleCVDownload = (e) => {
    e.preventDefault()
    const link = document.createElement('a')
    link.download = 'Youssef-Mlika-FlowCV-Lebenslauf-20240710.pdf'
    link.href = e.target.getAttribute('download')
    link.click()
  }

  const handleGradesDownload = (e) => {
    e.preventDefault()
    const link = document.createElement('a')
    link.download = 'Leistungspiegel.png'
    link.href = e.target.getAttribute('download')
    link.click()
  }

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
              'I am currently studying informatics at TU Darmstadt and am looking for a part-time position as a frontend web developer. With a solid foundation in HTML, CSS, and JavaScript, and a familiarity with frameworks like React , I am eager to apply my skills in a dynamic company environment, ' :
              'Ich studiere derzeit Informatik an der TU Darmstadt und suche eine Teilzeitstelle als Frontend-Webentwickler. Mit einer soliden Grundlage in HTML, CSS und JavaScript sowie Vertrautheit mit Frameworks wie React, bin ich bestrebt, meine Fähigkeiten in einem dynamischen Unternehmensumfeld einzusetzen.'}
          </p>
          <div className='about-me-btns'>

            <a download='Leistungspiegel.png' href='../../../public/assets/Leistungspiegel.png' onClick={handleGradesDownload}>
              <button >{isEnglish ? 'See my grades' : 'Meine Noten anzeigen'}
                <FaEye size={20}/>
              </button>
            </a>
            <a download='Youssef-Mlika-FlowCV-Lebenslauf-20240710.pdf' href='../../../public/assets/Youssef-Mlika-FlowCV-Lebenslauf-20240710.pdf' onClick={handleCVDownload}>
              <button >{isEnglish ? 'Download CV' : 'Mein Lebenslauf herunterladen'}
                <FaFileDownload size={20}/>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
