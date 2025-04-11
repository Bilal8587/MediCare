// import React, { useState } from "react"
// import "../styles/navbar.css"
// import { Link } from "gatsby"
// import Button from "./Button"
// import { RiMenuFold3Fill } from "react-icons/ri"
// import { RiMenuFold4Fill } from "react-icons/ri"

// function Navbar() {
//   const [active, setActive] = useState("Home")

//   const sideBarFun = () => {
//     setSideBarMenu(!sideBarMenu)
//   }
//   const activeBar = value => {
//     setActive(value)
//   }
//   return (
//     <div className="navbar_section">
//       <div className=" inner-navbar ">
//         <div className="first_circle"></div>
//         <div className="second_circle"></div>
//         <div className="navbar">
//           <div className="logo">
//             Medi<span>Care+</span>
//           </div>
//           <div className="links">
//             <Link
//               to=""
//               onClick={e => activeBar(e.target.text)}
//               className={active === "Home" ? "font-bold" : ""}
//             >
//               Home
//             </Link>
//             <Link
//               to=""
//               onClick={e => activeBar(e.target.text)}
//               className={active === "About" ? "font-bold" : ""}
//             >
//               About
//             </Link>
//             <Link
//               to=""
//               onClick={e => activeBar(e.target.text)}
//               className={active === "Services" ? "font-bold" : ""}
//             >
//               Services
//             </Link>
//             <Link
//               to=""
//               onClick={e => activeBar(e.target.text)}
//               className={active === "News" ? "font-bold" : ""}
//             >
//               News{" "}
//             </Link>
//             <Button name={"Contact"} />
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

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
