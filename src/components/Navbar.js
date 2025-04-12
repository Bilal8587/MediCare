import React, { useState } from "react"
import "../styles/navbar.css"
import { Link } from "gatsby"
import Button from "./Button"
import { IoMdMenu } from "react-icons/io"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="navbar_section">
      <div className=" inner-navbar ">
        <div className="first_circle"></div>
        <div className="second_circle"></div>
        <div className="navbar">
          <div className="logo">
            Medi<span>Care+</span>
          </div>
          <div className={`${isOpen ? "links active" : "links"}`}>
            {/* links */}
            <Link to="/">Home</Link>
            <Link to="/">About </Link>
            <Link to="/">Service</Link>
            <Link to="/">News </Link>
            <Button name={"Contact"} />
          </div>

          <div className="sidebar_icon" onClick={toggleMenu}>
            <IoMdMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
