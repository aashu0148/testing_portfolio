import React from "react";

import styles from "./Projects.module.scss";

function Projects() {
  const projects = [
    {
      thumbnail: "/images/comparable.png",
      title: "Comparbale",
      tech: ["Next.js", "Node.js", "CSS", "RabbitMQ", "puppeteer"],
      github: "https://github.com/aashu0148/portfolio",
      desc: "This is some description. This is some description. This is some description. This is some description. This is some description. This is some description. This is some description. This is some description. This is some description. This is some description",
    },
    {
      thumbnail: "/images/comparable.png",
      title: "Comparbale.",
      tech: ["Next.js", "Node.js", "CSS", "RabbitMQ", "puppeteer"],
      github: "https://github.com/aashu0148/portfolio",
      desc: "This is some description. This is some description. This is some description. This is some description. This is some description. This is some description. This is some description. This is some description. This is some description. This is some description",
    },
    {
      thumbnail: "/images/comparable.png",
      title: "Comparbale..",
      tech: ["Next.js", "Node.js", "CSS", "RabbitMQ", "puppeteer"],
      github: "https://github.com/aashu0148/portfolio",
      desc: "This is some description. This is some description. This is some description. This is some description. This is some description. This is some description. This is some description. This is some description. This is some description. This is some description",
    },
    {
      thumbnail: "/images/comparable.png",
      title: "Comparbale...",
      tech: ["Next.js", "Node.js", "CSS", "RabbitMQ", "puppeteer"],
      github: "https://github.com/aashu0148/portfolio",
      desc: "This is some description. This is some description. This is some description. This is some description. This is some description. This is some description. This is some description. This is some description. This is some description. This is some description",
    },
  ];

  return (
    <div className={styles.container} id="project">
      <div className={styles.heading}>
        <span>03.</span>
        <p>Some of my Projects</p>
        <span className={styles.line} />
      </div>

      <div className={styles.body}>
        {projects.map((project, i) => (
          <div
            key={project.title + i}
            className={`${styles.project} ${i % 2 == 0 ? "" : styles.invert}`}
          >
            <div
              className={`animate-up ${styles.left}`}
              style={{ animationDelay: "200ms" }}
            >
              <div className="image">
                <img src={project.thumbnail} alt={project.title} />
              </div>
            </div>

            <div className={styles.right}>
              {/* <p className={styles.label}>Featured Project</p> */}
              <p
                className={`animate-up ${styles.title}`}
                style={{ animationDelay: "100ms" }}
              >
                {project.title}
              </p>
              <p
                className={`animate-up ${styles.box}`}
                style={{ animationDelay: "200ms" }}
              >
                {project.desc}
              </p>

              <div
                className={`animate-up ${styles.tech}`}
                style={{ animationDelay: "300ms" }}
              >
                {project.tech.map((item) => (
                  <p className={styles.item} key={item + project.title}>
                    {item}
                  </p>
                ))}
              </div>

              <button
                className="button animate-up"
                style={{ animationDelay: "400ms" }}
              >
                View on Github
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
