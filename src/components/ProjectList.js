import React, { useEffect } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import * as styles from "../styles/projectList.module.css"
import gsap from "gsap"
import CSSRulePlugin from "gsap/CSSRulePlugin"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
let tl = gsap.timeline()

const ProjectList = ({ projects }) => {
  let imgReveal = CSSRulePlugin.getRule(".cardImgCon:after")

  useEffect(() => {
    tl.to(imgReveal, 1.4, { width: "0%" }).to(".cardImg", {
      duration: 1.4,
      scale: 1.6,
      delay: -1.6,
    })
  }, [imgReveal])

  return (
    <>
      {projects.map(project => (
        <div
          className={`${styles.projectThumb} projectThumbTwo`}
          key={project.id}
        >
          <div className={styles.col}></div>

          <Link
            className={`${styles.col} ${styles.project}`}
            to={`/project/${project.frontmatter.slug}`}
          >
            <h5>{project.frontmatter.title}</h5>
            <div className="cardImgCon">
              <Img
                className="cardImg"
                fluid={project.frontmatter.thumb.childImageSharp.fluid}
              />
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default ProjectList
