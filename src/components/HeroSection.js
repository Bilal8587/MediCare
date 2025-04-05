import React from "react"
import Button from "./Button"
import image from '../images/poster.jpg'
function HeroSection() {
  return (
    <div className="flex  gap-10 relative mt-[-20rem]  h-[100%] mb-14">
      <div className="py-20">
        <h2 className="text-2xl font-bold mb-5">Welcome to MediCare+ Clinic</h2>
        <h1 className="text-6xl font-bold text-[#003B79] mb-5">
          Best Specialists
        </h1>
        <p className="text-xl tracking leading-10">
          We are on the leading edge of cancer care. Providing the full
          continuum of cancer treatments and supportive care services 
          <br />in a single convenient location.
        </p>

        <div className="mt-10 flex gap-4">
          <Button name={"Make an Appointment"} />
          <div className=" bg-[#e9f1f7] outline-none">
            <button className=" px-16 py-4 bg-white rounded-3xl">
              Departments
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#EBEEFF] w-full rounded-3xl image mr-[-2rem]">
      </div>
    </div>
  )
}

export default HeroSection
