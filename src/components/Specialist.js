import React from "react"
import SpeCard from "./SpeCard"
import dr1 from '../images/dr2.jpg'
import dr2 from '../images/dr3.jpg'
import dr3 from '../images/dr1.jpg'
import dr4 from '../images/dr4.jpg'

const drData = [
  {
    id: 1,
    name: "Dr. Awaatif Al",
    position: "Dental Care",
    dr : dr1,
  },
  {
    id: 2,
    name: "Dr. Filipa Gaspar",
    position: "Cardiology",
    dr : dr2,
  },
  {
    id: 3,
    name: "Dr. Sukhmeet Gorae",
    position: "Neurological",
    dr: dr3,
  },
  {
    id: 4,
    name: "Dr. Siri Jakobsson",
    position: "Prediatrics",
    dr: dr4,
  },
]

function Specialist() {
  return (
    <div>
      <div className="h-[482px] w-[482px] mt-[-16rem] ml-[50rem] rounded-full border-[100px] shadow-lg border-white"></div>
      <div className=" text-center mt-[-7rem] relative">
        <h2 className="text-5xl font-semibold text-[#003B79]">
          We Have The Best Specialist
        </h2>
        <p className="text-lg font-normal mt-7 tracking leading-10 text-[#002348]">
          We have a wide experience in experience design and strategy,
          <br />
          with locally-rooted knowledge.
        </p>
      </div>
      <div className="flex justify-between">
        {
            drData.map((item) => (
                <SpeCard key={item.id} name={item.name} position={item.position} image={item.dr}/>
            ))
        }
      </div>
    </div>
  )
}

export default Specialist
