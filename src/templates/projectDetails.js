import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import * as styles from "../styles/projectDetails.module.css"
import { SEO } from "../components/Seo"

const ProjectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, featuredImg, stack, prevProject, nextProject } =
    data.markdownRemark.frontmatter

  console.log(data.markdownRemark.frontmatter)

  return (
    <Layout>
      <div className={`container ${styles.projectDetails}`}>
        <div className="hero-content">
          <h1 className="wow fadeInUp pageTitle" data-wow-delay="1s">
            {title}
          </h1>

          <div className={styles.projectInfo}>
            <div className={styles.col}>
              <p className="wow fadeInUp" data-wow-delay="1.2s">
                service :
              </p>
              <h6 className="wow fadeInUp" data-wow-delay="1.3s">
                {stack}
              </h6>
            </div>

            <div className={styles.col}>
              <p className="wow fadeInUp" data-wow-delay="1.4s">
                started :
              </p>
              <h6 className="wow fadeInUp" data-wow-delay="1.5s">
                8 May 2019
              </h6>
            </div>

            <div className={styles.col}>
              <p className="wow fadeInUp" data-wow-delay="1.6s">
                completed :
              </p>
              <h6 className="wow fadeInUp" data-wow-delay="1.7s">
                15 May 2019
              </h6>
            </div>
          </div>
          <div
            className={styles.html}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <div className="container">
        <Img fluid={featuredImg.childImageSharp.fluid} />
      </div>
      <div className={`${styles.projectNav} container`}>
        <Link
          to={`/project/${prevProject}`}
          className={`${styles.prev} ${!prevProject && "disabled"}`}
        >
          <svg
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.5652 17.282H7.76746L26.7994 0.760842C27.1037 0.494548 26.9189 0 26.5168 0H21.7072C21.4952 0 21.2941 0.0760839 21.1365 0.211949L0.599235 18.032C0.411137 18.195 0.260284 18.3966 0.156895 18.623C0.0535072 18.8495 0 19.0955 0 19.3444C0 19.5933 0.0535072 19.8394 0.156895 20.0658C0.260284 20.2923 0.411137 20.4938 0.599235 20.6569L21.2561 38.5856C21.3376 38.6562 21.4354 38.6943 21.5387 38.6943H26.5114C26.9135 38.6943 27.0983 38.1943 26.794 37.9334L7.76746 21.4123H39.5652C39.8044 21.4123 40 21.2166 40 20.9775V17.7168C40 17.4776 39.8044 17.282 39.5652 17.282Z"
              fill="#808080"
            />
          </svg>
          <span>previous</span>
        </Link>
        <Link
          to={`/project/${nextProject}`}
          className={`${styles.next} ${!nextProject && "disabled"}`}
        >
          <span>next</span>
          <svg
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.434767 17.282H32.2325L13.2006 0.760842C12.8963 0.494548 13.0811 0 13.4832 0H18.2928C18.5048 0 18.7059 0.0760839 18.8635 0.211949L39.4008 18.032C39.5889 18.195 39.7397 18.3966 39.8431 18.623C39.9465 18.8495 40 19.0955 40 19.3444C40 19.5933 39.9465 19.8394 39.8431 20.0658C39.7397 20.2923 39.5889 20.4938 39.4008 20.6569L18.7439 38.5856C18.6624 38.6562 18.5646 38.6943 18.4613 38.6943H13.4886C13.0865 38.6943 12.9017 38.1943 13.206 37.9334L32.2325 21.4123H0.434767C0.195645 21.4123 1.6513e-07 21.2166 1.6513e-07 20.9775V17.7168C1.6513e-07 17.4776 0.195645 17.282 0.434767 17.282Z"
              fill="#808080"
            />
          </svg>
        </Link>
      </div>
    </Layout>
  )
}

export default ProjectDetails

export const Head = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter
  return <SEO title={`${title} - Habibur Rahman`} />
}

export const query = graphql`
  query Details($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        nextProject
        prevProject
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
