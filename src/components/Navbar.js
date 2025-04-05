import React, { useState } from 'react'
import {Link} from 'gatsby'
import Button from './Button'

function Navbar() {
    const [active, setActive] = useState('Home')

    const activeBar = value => {
      setActive(value)
    }

  return (
      <div className="flex items-center py-8 absolute mt-[-16.3rem] ">
        <div className="text-3xl font-bold text-[#0073ff] ">
          Medi<span className="text-[#ff9f6a]">Care+</span>
        </div>
        <div className="pl-[24rem] flex justify-between items-center gap-28">
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
          <Button name={'Contact'}/>
        </div>
      </div>
  )
}

export default Navbar