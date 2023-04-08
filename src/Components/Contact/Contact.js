import React from "react";

import styles from "./Contact.module.scss";

function Contact() {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.detail}>
        <div className={styles.heading}>
          <span>04.</span>
          What's Next?
        </div>
        <p className={styles.title}>Let's Connect</p>
      </div>

      <p className={styles.desc}>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>

      <a href="mailto:aashu.1st@gmail.com">
        <button className="button">Say Hi</button>
      </a>

      <p className={styles.footer}>Coded with ❤️ by Anshul</p>
    </div>
  );
}

export default Contact;
