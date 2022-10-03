import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"
import ProjectList from "../../components/ProjectList"
import { SEO } from "../../components/Seo"

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

        {projects && <ProjectList projects={projects} />}
      </div>
    </Layout>
  )
}

export default Projects

export const Head = () => <SEO title="Projects - Habibur Rahman" />

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
