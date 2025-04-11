import React from "react"
import { MdKeyboardArrowRight } from "react-icons/md"

function Card({icon, name}) {
  return (
    <div className="card">
      <p className="icon ">{icon}</p>
      <h2 className="cardTitle">{name}</h2>

      <div className="learn_more">  
      <p>LEARN MORE</p>
      <div className="arrow-icon">
        <MdKeyboardArrowRight />
      </div>
    </div>
    </div>
  )
}

export default Card
