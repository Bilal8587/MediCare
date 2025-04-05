import React from "react"

function Card({icon, name}) {
  return (
    <div className="bg-white p-6 w-64 h-72 rounded-xl hover:bg-[#007EF3] hover:text-white  shadow-xl hover:h-80 ">
      <p className="text-[#007DF2] text-[8rem] hover:text-white ">{icon}</p>
      <h2 className="font-bold text-xl mt-7">{name}</h2>
    </div>
  )
}

export default Card
