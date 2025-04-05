import React from 'react'
import Button from './Button'
import DrCard from './DrCard'
import img1 from '../images/image1.png'
import img2 from '../images/image2.png'
import img3 from '../images/image3.png'

function  Clinic() {
  return (
    <div className="h-screen bg-white w-screen ml-[-8rem] px-32 flex  ">
      <div className=" h-full w-full py-40">
        <h2 className="text-5xl font-semibold text-[#003B79] mb-12">
          Clinic With Innovative
        </h2>
        <p className="text-lg tracking leading-9 text-[#002348] mb-10">
          We provide the most full medical services, so every person could heave
          the oppurtunity to receive qualitative medical help.
        </p>
        <Button name={"Learn More"} />
      </div>
      <div className="h-full w-full flex   ">
        <div className="  w-full flex flex-col gap-32 py-28 pl-20">
          <DrCard image={img1} name={"Qualified Doctors"} />
          <DrCard image={img3} name={"24 Hours Service"} />
        </div>
        <div className=" h-full w-full flex py-60 ">
          <DrCard image={img2} name={"Emergency Care"} />
        </div>
      </div>
    </div>
  )
}

export default  Clinic