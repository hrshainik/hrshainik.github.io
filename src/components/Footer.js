import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="collab">
          <div className="row">
            <div className="col-lg-12">
              <p>Got an interesting project? I can help you.</p>
            </div>
          </div>
        </div>

        <div className="hr">
          <div className="row"></div>
        </div>

        <div className="info">
          <div className="row">
            <div className="col" id="personal">
              <p>connect with me</p>
              <h4>
                ig{" "}
                <Link
                  target="_blank"
                  to="https://www.instagram.com/traveloperhabib/"
                >
                  @traveloperhabib
                </Link>
              </h4>
            </div>

            <div className="col" id="media">
              <p>follow me</p>
              <ul>
                <li id="fb">
                  <Link
                    target="_blank"
                    to="https://www.facebook.com/traveloperhabib"
                  >
                    fb
                  </Link>
                </li>
                <li id="ig">
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/traveloperhabib"
                  >
                    ig
                  </Link>
                </li>
                <li id="tw">
                  <Link
                    target="_blank"
                    to="https://twitter.com/traveloperhabib"
                  >
                    tw
                  </Link>
                </li>
                <li id="yt">
                  <Link
                    target="_blank"
                    to="https://www.youtube.com/channel/UCoQGW9rG4cFRAZPUfmPg4gw"
                  >
                    yt
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col" id="address">
              <p>say hello</p>
              <h4>
                <Link to="mailto:hrsshainik@gmail.com" target="_blank">
                  hrsshainik@gmail
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
