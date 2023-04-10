import React from "react";

import styles from "./Hero.module.scss";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.detail}>
        <p
          className={` animate-up ${styles.greetings}`}
          style={{ animationDelay: `${700}ms` }}
        >
          Hey, My name is{" "}
        </p>

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
        {/* Hi, I’m Anshul, a web developer with a passion for building
        user-friendly and visually pleasing web applications. Currently at
        <a className="link" href="https://hushl.in" target="_blank"> Hushl</a>, I specialize in frontend development and
        UI design. */}
        Hi, I’m Anshul, a web developer with 2 years of experience working in
        startups, currently at{" "}
        <a className="link" href="https://hushl.in" target="_blank">
          {" "}
          Hushl
        </a>
        . My passion lies in creating visually appealing and user-friendly web
        applications with efficient user interfaces. I specialize in frontend
        development, and I have a keen eye for design
      </p>

      <button
        className="button  animate-up"
        style={{ animationDelay: `${700 + 600}ms` }}
        onClick={() => (window.location.href = "/#about")}
      >
        Explore more about me
      </button>
    </div>
  );
}

export default Hero;
