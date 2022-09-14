import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/about.module.css"

const About = () => {
  return (
    <Layout>
      <div className={`container ${styles.about}`}>
        <div data-wow-delay="1s">
          <img src="/about.jpg" alt="about" className={styles.aboutImg} />
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <h3 className="wow fadeInUp pageTitle" data-wow-delay="1.2s">
            about me.
          </h3>

          <p className="wow fadeInUp">
            Living with passion is what I strictly adhere to. “Always do what
            you love” how much ever hackneyed this sounds it holds absolutely
            true. That's why I travel a lot. Not for the sole reason of “loving”
            to travel but it helps me to get rid of the world and escape into a
            different dimension of my own. As I am a travel freak I love
            freezing the moments I relish. The art of capturing photos is
            something I am always fascinated by.
          </p>

          <p className="wow fadeInUp" data-wow-delay="0.2s">
            I am a continuous learner. Learning for me equates to exploring new
            ideas and growing as an individual. I just cannot imagine my life
            devoid of designing. I freely express my creativity and imagination
            by designing. And to give my passion of designing a platform I have
            a YouTube channel named, Codegrid.
          </p>
        </div>
      </div>

      <div className="whitespace"></div>
    </Layout>
  )
}

export default About
