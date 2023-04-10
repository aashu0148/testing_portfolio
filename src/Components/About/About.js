import React from "react";

import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.container} id="about">
      <div className={styles.heading}>
        <span>01.</span>
        <p>About me</p>
        <span className={styles.line} />
      </div>

      <div className={styles.body}>
        <div className={styles.about}>
          <p
            className={`animate-up ${styles.text}`}
            style={{ animationDelay: `${100}ms` }}
          >
            Hi, my name is Anshul and I am a web developer with 2 years of
            experience working in startups. {"I'm"} passionate about building
            web applications that are both user-friendly and aesthetically
            pleasing.{" "}
          </p>

          <p
            className={`animate-up ${styles.text}`}
            style={{ animationDelay: `${200}ms` }}
          >
            My web development experience includes building efficient and
            visually appealing user interfaces for various applications. My
            focus is mainly on frontend development, and I am particularly proud
            of my skills in this area. In addition to my frontend development
            skills, I have an eye for design and strive to create visually
            appealing and user-friendly web applications.{" "}
          </p>

          <p
            className={`animate-up ${styles.text}`}
            style={{ animationDelay: `${300}ms` }}
          >
            I have experience in working with backend from making normal Api
            calls to database to building backend systems like queuing and
            scrapers to scrape data from eCommerce websites such as Amazon,
            Flipkart, and Myntra. Recently, I built a Chrome extension using
            React, which was a fun and challenging project.
          </p>

          <p
            className={`animate-up ${styles.text}`}
            style={{ animationDelay: `${400}ms` }}
          >
            Here are a few technologies I’ve been working with recently:
          </p>

          <ul
            className={`animate-up ${styles.list}`}
            style={{ animationDelay: `${500}ms` }}
          >
            <li className="list-item">CSS</li>
            <li className="list-item">React.js</li>
            <li className="list-item">Chrome extension</li>
            <li className="list-item">Next.js</li>
            <li className="list-item">Node.js</li>
          </ul>
        </div>
        <div
          className={`${styles.photoDiv} animate-up`}
          style={{ animationDelay: "400ms" }}
        >
          <div className={`image ${styles.image}`}>
            <img
              src="https://cdn.pixabay.com/photo/2022/10/12/00/17/woman-7515384__340.jpg"
              alt="Anshul"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
