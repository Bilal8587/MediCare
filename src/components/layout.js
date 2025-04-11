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
    <div className="layout">
      <Navbar />
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
