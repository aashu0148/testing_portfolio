import React from "react";

import styles from "./Contact.module.scss";
import Socials from "Components/Socials/Socials";

function Contact({ isMobileView }) {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.body}>
        <div className={styles.detail}>
          <div className={styles.heading}>
            <span>04.</span>
            {"What's"} Next?
          </div>
          <p
            className={`animate-up ${styles.title}`}
            style={{ animationDelay: "100ms" }}
          >
            {"Let's"} Connect
          </p>
        </div>

        <p
          className={`animate-up ${styles.desc}`}
          style={{ animationDelay: "200ms" }}
        >
          I am currently seeking a fully remote frontend engineer position. If
          you have any available opportunities or would only like to connect,
          feel free to reach out to me. I am always open to answering any
          questions or simply saying hello, so don't hesitate to get in touch!
        </p>

        <a
          href="mailto:aashu.1st@gmail.com"
          className="animate-up"
          style={{ animationDelay: "400ms" }}
        >
          <button className="button">Say Hi</button>
        </a>
      </div>

      <div className={styles.bottom}>
        <Socials isMobileView={isMobileView} />

        <p
          className={`animate-up ${styles.footerText}`}
          style={{ animationDelay: "400ms" }}
        >
          Coded with ❤️ by Anshul
        </p>
      </div>
    </div>
  );
}

export default Contact;
