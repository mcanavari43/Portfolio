import "./WorkCardStyles.css"

import React from 'react'

function WorkCard(props) {
  return (
    <div className="project-card">
    <h2 className="project-title">{props.title}</h2>
      <a href="https://font-pf.vercel.app/" target="_blank" rel="noreferrer">
    <img src={props.imgsrc} alt="" />
    </a>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <a href={props.view} target="_blank" rel="noreferrer" className="btn">Ver</a>
        </div>
    </div>
</div>
  )
}

export default WorkCard