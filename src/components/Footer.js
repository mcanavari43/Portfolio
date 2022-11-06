import './FooterStyles.css'

import React from 'react'

import { FaGithub, FaHome,FaLinkedin,FaMailBulk,FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                    <div>
                        <p>Argentina.</p>
                        <p>Escobar</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />11-2251-9874</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />manuel.canavari43@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>Sobre mi</h4>
                <p>Soy un desarrollador que le gusta trabajar en equipo, aprender de sus compañeros y cuento con la capacidad de resolver los problemas que se me presenten con las herramientas que conozco o encontrar otras de ser necesario. Puedo desempeñarme tanto en el Backend como en el FrontEnd.</p>
                <div className='social'>
                    <a href="https://www.linkedin.com/in/manuel-canavari/" target="_blank" rel="noreferrer">
                <FaLinkedin className="linkedin" size={50} style={{color: "#fff", marginRight: "1rem"}} />
                </a>
                
                <a href="https://www.github.com/mcanavari43/" target="_blank" rel="noreferrer">
                <FaGithub className="github" size={50} style={{color: "#fff", marginRight: "1rem"}} />
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer