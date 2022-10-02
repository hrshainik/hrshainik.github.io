import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import ProjectList from "../components/ProjectList"
import { useEffect } from "react"
import SplitType from "split-type"

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

  useEffect(() => {
    tl.to(".box", {
      duration: 1,
      width: "20.5vw",
      delay: 0.5,
      ease: "power4.inOut",
      visibility: "visible",
    })
      .to(".cursor", {
        opacity: 0,
        ease: "power2.inOut",
        repeat: -1,
        visibility: "visible",
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

    const myText = new SplitType(".cardTitle")

    let masks = document.querySelectorAll(".cardImgCon")

    masks.forEach(mask => {
      let image = mask.querySelector(".cardImg")
      let text = mask.previousSibling

      console.log(text)

      let char = text.querySelectorAll(".char")

      console.log(char)

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: mask,
          toggleActions: "restart none none reset",
        },
      })

      tl.set(mask, { autoAlpha: 1 })

      if (mask.classList.contains("cardImgConEven")) {
        tl.from(mask, 1.5, {
          xPercent: -100,
        })
        tl.from(image, 1.5, {
          xPercent: 100,
          scale: 1.3,
          delay: -1.5,
        })
        tl.to(char, 1, {
          ease: "power4.out",
          y: 0,
          stagger: 0.05,
          delay: -2,
        })
      } else if (mask.classList.contains("cardImgConOdd")) {
        tl.from(mask, 1.5, {
          xPercent: -100,
        })
        tl.from(image, 1.5, {
          xPercent: 100,
          scale: 1.3,
          delay: -1.5,
        })
        tl.to(char, 1, {
          ease: "power4.out",
          y: 0,
          stagger: 0.05,
          delay: -2,
        })
      }
    })
  }, [])

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
