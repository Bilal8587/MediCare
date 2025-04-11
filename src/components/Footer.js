import { Link } from "gatsby"
import React, { useState } from "react"
import { FaFacebookF } from "react-icons/fa6"
import { FaGoogle } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import "../styles/footer.css"
import { RiMenuFold3Fill } from "react-icons/ri"
import { RiMenuFold4Fill } from "react-icons/ri"

function Footer() {
  const [active, setActive] = useState("Home")
  const [sideBarMenu, setSideBarMenu] = useState(false)

  const sideBarFun = () => {
    setSideBarMenu(!sideBarMenu)
  }

  const activeBar = value => {
    setActive(value)
  }

  return (
    <div className="footer_section">
      <div className="upper_footer">
        <div className="footer_logo">
          Medi<span>Care+</span>
        </div>
        <div className="footer_links">
          <Link
            to={"/"}
            onClick={e => activeBar(e.target.text)}
            className={active === "Home" ? "font-bold" : ""}
          >
            Home
          </Link>
          <Link
            to={"/"}
            onClick={e => activeBar(e.target.text)}
            className={active === "About" ? "font-bold" : ""}
          >
            About
          </Link>
          <Link
            to={"/"}
            onClick={e => activeBar(e.target.text)}
            className={active === "Services" ? "font-bold" : ""}
          >
            Services
          </Link>
          <Link
            to={"/"}
            onClick={e => activeBar(e.target.text)}
            className={active === "News" ? "font-bold" : ""}
          >
            News
          </Link>
        </div>
        <div onClick={sideBarFun} className="footer_sidebar_icon">
          {sideBarMenu ? <RiMenuFold4Fill /> : <RiMenuFold3Fill />}
        </div>
      </div>
      <div className="lower_footer">
        <div>
          <div className="footer_icon">
            <FaFacebookF />
          </div>
          <div className="footer_icon">
            <FaGoogle />
          </div>
          <div className="footer_icon">
            <FaTwitter />
          </div>
        </div>
        <p className="copyright ">©2023 - 011BQ </p>
      </div>
    </div>
  )
}

export default Footer
