import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <div className={styles.header}>
          <h1 className={`${styles.line} ${styles.animTypewriter}`}>
            I make brands matter in culture.
          </h1>
        </div>
      </div>

      <div className={styles.scrollDown}></div>

      <div class="container-fluid">
        <h6>Selected projects</h6>

        <div class="vertical"></div>

        <div class="whitespace"></div>
        <div class="whitespace"></div>

        <div class="row">
          <div class="col-lg-8"></div>

          <div class="col-lg-4 project project1 wow fadeInUp"></div>
        </div>

        <div class="whitespace"></div>

        <div class="row">
          <div class="col-lg-6 project project2 wow fadeInUp"></div>

          <div class="col-lg-6"></div>
        </div>

        <div class="whitespace"></div>

        <div class="row">
          <div class="col-lg-7"></div>

          <div class="col-lg-4 project project3 wow fadeInUp"></div>

          <div class="col-lg-1"></div>
        </div>

        <div class="whitespace"></div>

        <div class="row">
          <div class="col-lg-1"></div>

          <div class="col-lg-5 project project4 wow fadeInUp"></div>

          <div class="col-lg-6"></div>
        </div>

        <div class="whitespace"></div>
      </div>
    </Layout>
  )
}
