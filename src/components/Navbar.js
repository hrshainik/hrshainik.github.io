import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return (
    <nav>
      <span id="brand">
        <Link to="/">habibur rahman</Link>
      </span>

      <ul id="menu">
        <li>
          <Link to="/">
            home<span>.</span>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            work<span>.</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            about<span>.</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            contact<span>.</span>
          </Link>
        </li>
      </ul>

      <div id="toggle">
        <span>menu</span>
      </div>
    </nav>
  )
}

export default Navbar
