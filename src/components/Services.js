import React from "react"
import Card from "./Card"
import { PiToothThin } from "react-icons/pi"
import { BsLungs } from "react-icons/bs"
import { PiBrainThin } from "react-icons/pi"
import { BsClipboardPulse } from "react-icons/bs"

const icons = [
    {
        "id" : 1,
        "icon": <PiToothThin/>,
        "name" : "Dental Care"
    },
    {
        "id" : 2,
        "icon":   <BsLungs/>,
        "name" :"Pulmonary",
    },
    {
        "id" : 3,
        "icon":  <PiBrainThin/>,
        "name" : "Neurological",
    },
    {
        "id" : 4,
        "icon": <BsClipboardPulse/>,
        "name" : "Prediatrics"
    }
]



function Services() {
  return (
    <div className="h-screen w-full">
      <div className="py-12">
        <h2 className="text-[#003B79] text-5xl font-semibold text-center">
          Our Services
        </h2>
        <p className="text-lg tracking leading-10 text-center mt-10">
          We provide the most full medical services, so every person could{" "}
          <br />
          heave the oppurtunity to receive qualitative medical help.
        </p>
      </div>
      <div className=" flex gap-10">
        {
            icons.map((item)=>(
                <Card key={item.id} name={item.name} icon={item.icon}/>
            ))
        }
      </div>
    </div>
  )
}

export default Services