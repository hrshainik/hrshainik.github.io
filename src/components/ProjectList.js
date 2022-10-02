import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import * as styles from "../styles/projectList.module.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ProjectList = ({ projects }) => {
  console.log(projects)
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
            <h5 className="cardTitle">{project.frontmatter.title}</h5>
            <div
              className={`cardImgCon cardImgCon${
                project.frontmatter.id % 2 === 0 ? "Even" : "Odd"
              }`}
            >
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
