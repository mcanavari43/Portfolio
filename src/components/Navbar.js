import "./NavbarStyles.css"

import EN from "../assets/CvE Manuel Ignacio Canavari.pdf";
import ES from "../assets/CvS Manuel Ignacio Canavari.pdf";

import React, { useState } from 'react'
import { Link } from "react-router-dom"

import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    // const [cv, setCv] = useState('')
    
    // const type = value => {
    //     setCv(value);
    // }

    // const download = () => {
    //     if(value){
    //         setCv(input)
    //     }
    // }



    const [color,setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true);
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor);


  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Portfolio.</h1>
        </Link>
        
        <ul className={click?"nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
            <a 
            href={EN}
            target="_blank"
            rel="noreferrer"
            download="CvE Manuel Ignacio Canavari.pdf">
                Download Cv
            </a>
            </li>
            <li>
            <a 
            href={ES}
            target="_blank"
            rel="noreferrer"
            download="CvS Manuel Ignacio Canavari.pdf">
                Descargar Cv
            </a>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click?( <FaTimes size={20} style={{color: '#fff'}}/>
            ) : (<FaBars size={20} style={{color: '#fff'}}/>)}
        </div>
    </div>
  )
}

export default Navbar