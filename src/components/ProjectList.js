import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import * as styles from "../styles/projectList.module.css"

const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map(project => (
        <div className={styles.projectThumb} key={project.id}>
          <div className={styles.col}></div>

          <Link
            className={`${styles.col} ${styles.project}`}
            to={`/project/${project.frontmatter.slug}`}
          >
            <h5>{project.frontmatter.title}</h5>
            <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
          </Link>
        </div>
      ))}
    </>
  )
}

export default ProjectList
