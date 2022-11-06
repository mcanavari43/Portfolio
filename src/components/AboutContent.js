import './AboutContentStyles.css'

import st from "./Skills.module.css";

import skills from './Skills';

import React from 'react'
import { Link } from 'react-router-dom'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>¿Quien soy?</h1>
            <p>Hola 👋! Soy Manuel, egresado de Henry y un apasionado por el Desarrollo Web 😄 Desde chico siempre me gusto el  mundo de la tecnologia, luego de realizar un curso de MySql me di cuenta que es algo que realmente me apasiona y decidi dedicarme a tiempo completo a la carrera Full Stack Developer de Henry, actualmente carrera ya finalizada  y con muchas ganas de seguir aprendiendo . . . ¡Estoy en busca de mi primer trabajo como Developer!</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <h1>Tecnologias utilizadas</h1>
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