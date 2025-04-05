import * as React from "react"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"
import Services from "./Services"
import Clinic from "./Clinic"
import Specialist from "./Specialist"
import Customer from "./Customer"
import NewsLetter from "./NewsLetter"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="max-w-full bg-[#f8fdff] px-32 overflow-x-hidden ">
      <div className="h-[482px] w-[482px] mt-[-13rem] ml-[-18rem] rounded-full border-[100px] border-white"></div>
      <Navbar />
      <div className="h-[771px] w-[771px] mt-[-36em] ml-[49rem] rounded-full bg-white  overflow-x-hidden"></div>
      <HeroSection />
      <Services />
      <Clinic />
      <Specialist />
      <Customer />
      <NewsLetter />
      <Footer/>
    </div>
  )
}

export default Layout
