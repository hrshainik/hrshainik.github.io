import { Link } from "gatsby"
import React, { useState } from "react"

const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  return (
    <>
      <nav>
        <div className="container">
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

          <div id="toggle" onClick={() => setClicked(!clicked)}>
            <span>menu</span>
          </div>
        </div>
      </nav>

      <div id="resize" className={`${clicked ? "active" : ""}`}>
        <div className="close-btn" onClick={() => setClicked(!clicked)}>
          close
        </div>

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
      </div>
    </>
  )
}

export default Navbar
