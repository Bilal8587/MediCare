import React from 'react'
import '../styles/navbar.css'

function Button({name}) {
  return (
    <div>
      <button className="btn_component">
        {name}
      </button>
    </div>
  )
}

export default Button