import React from "react";

import styles from "./EmailDiv.module.scss";

function EmailDiv() {
  return (
    <div className={styles.container}>
      <a
        className={`pop-out ${styles.text}`}
        href={"mailto:aashu.1st@gmail.com"}
        style={{ animationDelay: "1s" }}
      >
        aashu.1st@gmail.com
      </a>
      <span className={`${styles.line}`} style={{ animationDelay: "1s" }} />
    </div>
  );
}

export default EmailDiv;
