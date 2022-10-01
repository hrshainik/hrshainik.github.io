import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import * as styles from "../styles/projectList.module.css"

const ProjectList = ({ projects }) => {
  return (
    <>
      {projects.map(project => {
        if (project.frontmatter.id === 1) {
          return (
            <div className={styles.projectThumb} key={project.id}>
              <div className={styles.colL}></div>

              <Link
                className={`${styles.colR} ${styles.project}`}
                to={`/project/${project.frontmatter.slug}`}
              >
                <h5>{project.frontmatter.title}</h5>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
              </Link>
            </div>
          )
        } else if (project.frontmatter.id === 2) {
          return (
            <div className={styles.projectThumb} key={project.id}>
              <Link
                className={`${styles.colL} ${styles.project}`}
                to={`/project/${project.frontmatter.slug}`}
              >
                <h5>{project.frontmatter.title}</h5>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
              </Link>

              <div className={styles.colR}></div>
            </div>
          )
        } else if (project.frontmatter.id === 3) {
          return (
            <div className={styles.projectThumb} key={project.id}>
              <div className={styles.colL}></div>

              <Link
                className={`${styles.colR} ${styles.project}`}
                to={`/project/${project.frontmatter.slug}`}
              >
                <h5>{project.frontmatter.title}</h5>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
              </Link>
            </div>
          )
        } else if (project.frontmatter.id === 4) {
          return (
            <div className={styles.projectThumb} key={project.id}>
              <Link
                className={`${styles.colL} ${styles.project}`}
                to={`/project/${project.frontmatter.slug}`}
              >
                <h5>{project.frontmatter.title}</h5>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
              </Link>

              <div className={styles.colR}></div>
            </div>
          )
        } else if (project.frontmatter.id === 5) {
          return (
            <div className={styles.projectThumb} key={project.id}>
              <div className={styles.colL}></div>

              <Link
                className={`${styles.colR} ${styles.project}`}
                to={`/project/${project.frontmatter.slug}`}
              >
                <h5>{project.frontmatter.title}</h5>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
              </Link>
            </div>
          )
        }
      })}
    </>
  )
}

export default ProjectList
