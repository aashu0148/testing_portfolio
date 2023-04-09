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
          Although I’m not currently looking for any new opportunities, my inbox
          is always open. Whether you have a question or just want to say hi,
          I’ll try my best to get back to you!
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
