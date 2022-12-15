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
            <p>Hi 👋! I'm Manu, graduated from Henry and passionate about web development 😄 Since was  a child i have always like the world of TI, after finish a MySql course, i found that I am really passionate about, after that I decided to dedicate myself full time to the carrier to Full Stack Developer, currently finished and i have a lot desire to continue learning. . .
            In this moment i'm looking for my first job as a Developer!</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <h1>Technology's i know</h1>
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