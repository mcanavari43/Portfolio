import './AboutContentStyles.css'

import st from "./Skills.module.css";

import skills from './Skills';

import React from 'react'
import { Link } from 'react-router-dom'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>¿Who i am?</h1>
            <p>Hi 👋! I'm Manu, graduated from Henry and passionate about web development 😄 Since i was a child i have always like the world of IT, after finishing a MySql course, i found that i am really passionate about it, after that i have decided to dedicate myself full time to the carrier to be come a Full Stack Developer, i have already finish my training and i'm really interested in to learning more...
            In this moment i'm looking foward to getting my first job as a Developer!</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <h1>Technologyes i handle</h1>
                    <section id="skills">
        <div className={st.skills}>
          {skills.skills &&
            skills.skills.map((item, index) => {
              return (
                <div key={index} className={st.sk}>
                  <img src={item.img} width="90" alt=""/>
                  <span className="text">{item.skillname}</span>
                </div>
              );
            })}
        </div>
    </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent