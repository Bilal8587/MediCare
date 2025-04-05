import React from 'react'

function Button({name}) {
  return (
    <div>
      <button className="bg-[#0073ff] text-white font-bold px-12 py-4 rounded-[2rem]">{name}</button>
    </div>
  )
}

export default Button