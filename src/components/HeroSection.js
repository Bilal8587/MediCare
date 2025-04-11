import React from "react"
import "../styles/hero.css"
import Button from "./Button"

function HeroSection() {
  return (
    <section className="hero-section">
      <div className=" hero">
        {/* hero section content */}
        <div className="hero_left">
          <h2>Welcome to MediCare+ Clinic</h2>
          <h1>Best Specialists</h1>
          <p>
            We are on the leading edge of cancer care. Providing the full
            continuum of cancer treatments and supportive care services in a
            single convenient location.
          </p>
          <div className="btns">
            <Button name="Make an Appointment" />
            <div className="btnDEP">
              <button>Departments</button>
            </div>
          </div>
        </div>

        {/* hero section right div */}
        <div className="hero_right image"></div>
      </div>
    </section>
  )
}

export default HeroSection
