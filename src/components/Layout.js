import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
