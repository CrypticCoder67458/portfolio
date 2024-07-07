import React from 'react'
import myImg from '../../../public/assets/profile-pic-normal.jpeg'
import './about-me.css'
import '../../Styles/App.css'
import { FaBook } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { Highlight } from './Highlight';
import { FaFileDownload } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
export const AboutMe = () => {

  return (
    <div className="about-me-container">
      <h1 className='section-title'>About Me</h1>
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
              title="Education"
              text="Tu Darmstadt (BSc Informatics)"
            />
            <Highlight
              element={<MdWorkspacePremium size={25} />}
              title="Experience"
              text="Bootcamp JS & React"
            />
          </div>

          <p className="about-me-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut
            obcaecati rerum similique maiores sit voluptatibus consequatur,
            architecto perspiciatis unde, provident error perferendis. Quaerat, ab
            laudantium. Cum ipsum nemo dolor sit nihil expedita, officia tempore
            nulla, dolores pariatur explicabo! Laudantium facilis officia,
          </p>
          <div className='about-me-btns'>

            <button >See my grades
              <FaEye size={20}/>
            </button>
            <button >Download CV <FaFileDownload size={20}/></button>
          </div>
        </div>
      </div>
    </div>
  );
}
