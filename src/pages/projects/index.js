import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"
import * as styles from "../../styles/projects.module.css"

const Projects = () => {
  return (
    <Layout>
      <div className={styles.projects}>
        <div class="container">
          <div class="hero-content">
            <div class="row">
              <div class="col-lg-8">
                <h3 class="wow fadeInUp" data-wow-delay="1s">
                  work.
                </h3>
                <p class="wow fadeInUp" data-wow-delay="1.2s">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque, accusantium sint quod voluptatem dolorum, quaerat, ut
                  iusto cumque magni ab repudiandae, quasi minus unde temporibus
                  nulla eum eaque! Placeat praesentium sunt suscipit laboriosam
                  deserunt commodi atque corporis, iure maiores dicta, fugit
                  similique.
                </p>
              </div>
            </div>
          </div>
        </div>

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
