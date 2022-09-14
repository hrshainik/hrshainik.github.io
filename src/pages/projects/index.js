import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import Img from "gatsby-image"

const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <div className={styles.projects}>
        <div className="container">
          <div className="hero-content">
            <h3 className="wow fadeInUp pageTitle" data-wow-delay="1s">
              work.
            </h3>
            <p className="wow fadeInUp" data-wow-delay="1.2s">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
              accusantium sint quod voluptatem dolorum, quaerat, ut iusto cumque
              magni ab repudiandae, quasi minus unde temporibus nulla eum eaque!
              Placeat praesentium sunt suscipit laboriosam deserunt commodi
              atque corporis, iure maiores dicta, fugit similique.
            </p>
          </div>
        </div>

        <div className={styles.vertical}></div>

        <div className="whitespace"></div>
        <div className="whitespace"></div>

        {projects.map(project => {
          if (project.frontmatter.id % 2 === 0) {
            return (
              <div className={styles.projectThumb} key={project.id}>
                <div className={styles.colL}></div>

                <Link
                  className={`${styles.colR} ${styles.project}`}
                  to={`/project/${project.frontmatter.slug}`}
                >
                  <h5>{project.frontmatter.title}</h5>
                  <Img
                    fluid={project.frontmatter.thumb.childImageSharp.fluid}
                  />
                </Link>
              </div>
            )
          } else if (project.frontmatter.id % 2 === 1) {
            return (
              <div className={styles.projectThumb} key={project.id}>
                <Link
                  className={`${styles.colL} ${styles.project}`}
                  to={`/project/${project.frontmatter.slug}`}
                >
                  <h5>{project.frontmatter.title}</h5>
                  <Img
                    fluid={project.frontmatter.thumb.childImageSharp.fluid}
                  />
                </Link>

                <div className={styles.colR}></div>
              </div>
            )
          }
        })}
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query ProjectsPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          stack
          slug
          date
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id
        }
        id
      }
    }
  }
`
