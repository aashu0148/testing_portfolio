import React from "react";

import styles from "./Hero.module.scss";

function Hero() {
  return (
    <div className={styles.container}>
      <p
        className={` animate-up ${styles.greetings}`}
        style={{ animationDelay: `${700}ms` }}
      >
        Hey, My name is{" "}
      </p>

      <div className={styles.detail}>
        <p
          className={` animate-up ${styles.title}`}
          style={{ animationDelay: `${700 + 200}ms` }}
        >
          Anshul
        </p>
        <p
          className={` animate-up ${styles.subTitle}`}
          style={{ animationDelay: `${700 + 200}ms` }}
        >
          I build apps for the Web
        </p>
      </div>

      <p
        className={` animate-up ${styles.desc}`}
        style={{ animationDelay: `${700 + 400}ms` }}
      >
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at{" "}
        <a className="link">hushl</a>.
      </p>

      <button
        className="button  animate-up"
        style={{ animationDelay: `${700 + 600}ms` }}
      >
        Explore more about me
      </button>
    </div>
  );
}

export default Hero;
