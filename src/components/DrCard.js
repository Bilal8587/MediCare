import React from 'react'

function DrCard({image, name}) {
  return (
    <div className="bg-white w-44 h-40 rounded-2xl relative  px-3 Cliimg ">
      <img src={image} className="abs mt-[-4rem] ml-[1rem] h-32 absolute" />
      <h3 className="text-lg font-semibold mt-20 ">{name}</h3>
    </div>
  )
}

export default DrCard
