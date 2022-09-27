import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import Img from "gatsby-image"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import ProjectList from "../components/ProjectList"

gsap.registerPlugin(TextPlugin)

let tl = gsap.timeline()

export default function Home({ data }) {
  const projects = data.allMarkdownRemark.nodes

  const words = [
    "Habibur Rahman.",
    "A Developer.",
    "A Biochemist.",
    "A Traveler.",
  ]

  tl.to(".cursor", {
    opacity: 0,
    ease: "power2.inOut",
    repeat: -1,
  })
    .to(".box", {
      duration: 1,
      width: "20.5vw",
      delay: 0.5,
      ease: "power4.inOut",
    })
    .from(".hi", {
      duration: 1,
      y: "7vw",
      ease: "power3.out",
      onComplete: () => masterTl.play(),
    })
    .to(".box", { height: "2.5vw", duration: 1, ease: "elastic.out" })
    .to(".box", { duration: 2, autoAlpha: 0.7, yoyo: true, repeat: -1 })

  let masterTl = gsap.timeline({ repeat: -1 }).pause()

  words.forEach(word => {
    let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
    tl.to(".text", { duration: 1, text: word })

    masterTl.add(tl)
  })

  return (
    <Layout>
      <div className={styles.hero}>
        <div>
          <h1 className="typewriter">
            <span className="box"></span>
            <span className="hi">Hi, I'm&nbsp;</span>
            <span className="text"></span>
            <span className="cursor">_</span>
          </h1>
        </div>
      </div>

      <div className={styles.scrollDown}></div>

      <div className={styles.projects}>
        <h6>Selected projects</h6>

        <div className={styles.vertical}></div>

        <div className="whitespace"></div>
        <div className="whitespace"></div>

        {projects && <ProjectList projects={projects} />}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomePage {
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
