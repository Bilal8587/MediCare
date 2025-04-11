import React from "react"
import Button from "./Button"
import "../styles/clinic.css"
import img1 from "../images/image1.png"
import img2 from "../images/image2.png"
import img3 from "../images/image3.png"

function Clinic() {
  return (
    <div className="clinic_section">
      <div className="clinic">
        <div className="left_clinic">
          <h2 className="heading">Clinic With Innovative</h2>
          <p className="descriptin">
            We provide the most full medical services, so every person could{" "}
            <br />
            heave the oppurtunity to receive qualitative medical help.
          </p>
          <Button name={"Learn More"} />
        </div>
        <div className="right_clinic">
          <div className=" clinic_cards">
            <div className="card">
              <img src={img1} />
              <p className="position">Qualified Doctors</p>
            </div>
            <div className="card abm_card">
              <img src={img2} />
              <p className="position">24 Hours Service</p>
            </div>
          </div>
          <div className="last_card">
            <img src={img3} />
            <p className="position">Emergency Care</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clinic
