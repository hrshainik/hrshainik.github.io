import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import * as styles from "../styles/projectList.module.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect } from "react"
import SplitType from "split-type"

gsap.registerPlugin(ScrollTrigger)

const ProjectList = ({ projects }) => {
  useEffect(() => {
    const myText = new SplitType(".cardTitle")

    let masks = document.querySelectorAll(".cardImgCon")

    masks.forEach(mask => {
      let image = mask.querySelector(".cardImg")
      let text = mask.previousSibling

      let char = text.querySelectorAll(".char")

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
