import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "../../styles/home.module.css"

const Projects = () => {
  return (
    <Layout>
      <div className={styles.projects}>
        <h6>Selected projects</h6>

        <div className={styles.vertical}></div>

        <div className="whitespace"></div>
        <div className="whitespace"></div>

        <div className={styles.projectThumb}>
          <div className={styles.colL}></div>

          <Link className={`${styles.colR} ${styles.project}`} to="/projects">
            <h5>travel tale.</h5>
            <img src="/1.jpg" alt="product" />
          </Link>
        </div>

        <div className="whitespace"></div>

        <div className={styles.projectThumb}>
          <Link className={`${styles.colL} ${styles.project}`} to="/projects">
            <h5>turk kavaci.</h5>
            <img src="/2.jpg" alt="product" />
          </Link>

          <div className={styles.colR}></div>
        </div>

        <div className="whitespace"></div>

        <div className={styles.projectThumb}>
          <div className={styles.colL}></div>

          <Link className={`${styles.colR} ${styles.project}`} to="/projects">
            <h5>hoo bank.</h5>
            <img src="/3.jpg" alt="product" />
          </Link>
        </div>

        <div className="whitespace"></div>

        <div className={styles.projectThumb}>
          <Link className={`${styles.colL} ${styles.project}`} to="/projects">
            <h5>cozy cafe.</h5>
            <img src="/4.jpg" alt="product" />
          </Link>

          <div className={styles.colR}></div>
        </div>

        <div className="whitespace"></div>
      </div>
    </Layout>
  )
}

export default Projects
