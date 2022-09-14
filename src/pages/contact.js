import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/contact.module.css"

const Contact = () => {
  return (
    <Layout>
      <div className={`container ${styles.contact}`}>
        <div className={`${styles.form} hero-content`}>
          <h3 className="wow fadeInUp pageTitle" data-wow-delay="1s">
            say hello 👋
          </h3>
          <p className="wow fadeInUp" data-wow-delay="1.2s">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
            accusantium sint quod voluptatem dolorum, quaerat, ut iusto cumque
            magni ab repudiandae, quasi minus unde temporibus nulla eum eaque!
            Placeat praesentium sunt suscipit laboriosam deserunt commodi atque
            corporis, iure maiores dicta, fugit similique.
          </p>
        </div>
      </div>

      <div className="whitespace"></div>

      <div className="container">
        <div className={styles.form}>
          <form
            name="contact-form"
            className={styles.contactForm}
            id="contact-form"
            method="post"
            action=""
          >
            <ul>
              <li className="wow fadeInUp" data-wow-delay="1.4s">
                <label htmlFor="contact-name">Name :</label>
                <div className={styles.textarea}>
                  <input
                    type="text"
                    name="contact-name"
                    id="contact-name"
                    // value=""
                    required
                  />
                </div>
              </li>

              <li className="wow fadeInUp" data-wow-delay="1.6s">
                <label htmlFor="contact-email">Email :</label>
                <div className={styles.textarea}>
                  <input
                    type="email"
                    name="contact-email"
                    id="contact-email"
                    // value=""
                    required
                  />
                </div>
              </li>

              <li className="wow fadeInUp" data-wow-delay="1.6s">
                <label htmlFor="contact-project">Message :</label>
                <div className={styles.textarea}>
                  <textarea
                    type="email"
                    name="contact-project"
                    id="contact-project"
                    rows="6"
                    // value=""
                    required
                  ></textarea>
                </div>
              </li>
            </ul>

            <button
              type="submit"
              name="contact-submit"
              id="contact-submit"
              className={styles.send}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="whitespace"></div>
    </Layout>
  )
}

export default Contact
