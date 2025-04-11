import React from "react"
import Card from "./Card"
import "../styles/service.css"
import { PiToothThin } from "react-icons/pi"
import { BsLungs } from "react-icons/bs"
import { PiBrainThin } from "react-icons/pi"
import { BsClipboardPulse } from "react-icons/bs"

const icons = [
  {
    id: 1,
    icon: <PiToothThin />,
    name: "Dental Care",
  },
  {
    id: 2,
    icon: <BsLungs />,
    name: "Pulmonary",
  },
  {
    id: 3,
    icon: <PiBrainThin />,
    name: "Neurological",
  },
  {
    id: 4,
    icon: <BsClipboardPulse />,
    name: "Prediatrics",
  },
]

function Services() {
  return (
    <div className="service_sectin">
      <div className="service">
        <h2>Our Services</h2>
        <p>
          We provide the most full medical services, so every person could{" "}
          <br />
          heave the oppurtunity to receive qualitative medical help.
        </p>
        <div className="cards">
          {icons.map(item => (
            <Card key={item.id} name={item.name} icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
