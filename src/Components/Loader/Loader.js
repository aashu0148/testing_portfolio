import React, { useEffect, useState } from "react";

import styles from "./Loader.module.scss";

function Loader({ big = false, staticLogo = false, onClick, timeout }) {
  const [timesUp, setTimesUp] = useState(false);

  useEffect(() => {
    if (big && timeout > 1000) {
      setTimeout(() => setTimesUp(true), timeout - 300);
    }
  }, []);

  return (
    <div
      className={`${styles.outer} ${big ? styles.bigOuter : ""} ${
        staticLogo ? styles.staticOuter : ""
      }`}
      onClick={() => (onClick ? onClick() : "")}
      style={
        big
          ? {
              transform: timesUp ? `scale(0.1)` : "",
              opacity: timesUp ? `0.3` : "1",
            }
          : {}
      }
    >
      <div className={`${styles.container}`}>
        <div className={styles.circle}>
          <span className={`${styles.line} ${styles.line1}`} />
          <span className={`${styles.line} ${styles.line2}`} />
          <span className={`${styles.line} ${styles.line3}`} />
        </div>
      </div>
    </div>
  );
}

export default Loader;
