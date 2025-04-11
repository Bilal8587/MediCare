import React from "react"

function SpeCard({ name, position, image }) {
  return (
    <div className="splCard">
      <div className="uper_section">
        <img src={image} className="" />
      </div>

      <div className="lower_section">
        <h2 className="">{name}</h2>
        <p className="">{position}</p>
      </div>
    </div>
  )
}

export default SpeCard
