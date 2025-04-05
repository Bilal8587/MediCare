import { Link } from "gatsby"
import React, { useState } from "react"
import { FaFacebookF } from "react-icons/fa6"
import { FaGoogle } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"

function Footer() {
  const [active, setActive] = useState("Home")

  const activeBar = value => {
    setActive(value)
  }

  return (
    <div className="w-screen ml-[-8rem] h-80">
      <div className="bg-[#F7FBFF] px-32 py-12 flex items-center justify-between ">
        <div className="text-3xl font-bold text-[#0073ff] ">
          Medi<span className="text-[#ff9f6a]">Care+</span>
        </div>
        <div className="flex gap-12 text-sm text-[#0073ff]">
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
      </div>
      <div className="bg-[#ECF4FF] px-32 h-[11.3rem] py-10">
        <div className="flex  gap-3">
          <div className="bg-white p-4 rounded-full text-[#7F7F7F] text-lg">
            <FaFacebookF />
          </div>
          <div className="bg-white p-4 rounded-full text-[#7F7F7F] text-lg">
            <FaGoogle />
          </div>
          <div className="bg-white p-4 rounded-full text-[#7F7F7F] text-lg">
            <FaTwitter />
          </div>
        </div>
        <p className="text-[#667C94] text-sm mt-5">©2023 - 011BQ </p>
      </div>
    </div>
  )
}

export default Footer
