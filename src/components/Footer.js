import React from "react"

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="collab">
          <div class="row">
            <div class="col-lg-12">
              <p>Got an interesting project? I can help you.</p>
            </div>
          </div>
        </div>

        <div class="hr">
          <div class="row"></div>
        </div>

        <div class="info">
          <div class="row">
            <div class="col" id="personal">
              <p>connect with me</p>
              <h4>ig @traveloperhabib</h4>
            </div>

            <div class="col" id="media">
              <p>follow me</p>
              <ul>
                <li id="fb">fb</li>
                <li id="ig">ig</li>
                <li id="tw">tw</li>
                <li id="yt">yt</li>
              </ul>
            </div>

            <div class="col" id="address">
              <p>say hello</p>
              <h4>hrsshainik@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
