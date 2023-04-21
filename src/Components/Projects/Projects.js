import React from "react";

import styles from "./Projects.module.scss";

function Projects({ isMobileView }) {
  const projects = [
    {
      thumbnail: "/images/comparable.png",
      title: "Comparbale",
      tech: ["Next.js", "Node.js", "CSS", "RabbitMQ", "puppeteer"],
      github: "https://github.com/aashu0148/comparable",
      desc: "Comparable is a web app that compares prices of hotels and e-commerce products across multiple sites. It uses web scraping to collect pricing data from popular sites like Myntra, Goibibo, Amazon and 14 more. The app enables real-time communication between the server and client via a socket connection and employs RabbitMQ messaging queue to allow parallel processing of requests across 3 consumer servers, ensuring fast response times.",
      // desc: "Comparable is a web application that allows users to compare prices of hotels and e-commerce products across multiple websites. The app utilizes web scraping to collect pricing data from popular websites like Goibibo, Amazon, Myntra and 14 more. The frontend is designed using Next.js and pure CSS based on Figma wireframes, creating a visually appealing and user-friendly interface. The app establishes real-time communication between the server and client via a socket connection, enabling users to receive instant feedback. Additionally, the app implements RabbitMQ messaging queue to allow parallel processing of requests across 3 consumer servers, ensuring fast and efficient response times. Overall, Comparable provides users with a seamless and efficient way to compare prices across multiple websites, helping them find the best deals possible.",
    },
    {
      thumbnail: "/images/grocery-store.png",
      title: "Grocery Store",
      tech: ["React.js", "Node.js", "CSS", "Firebase", "Mongodb"],
      github: "https://github.com/aashu0148/grocery-store",
      desc: "Grocery Store is an e-commerce platform for purchasing groceries online. I developed the platform using React for the frontend and Firebase for mobile and email authentication. The backend utilizes Node.js and MongoDB for data management, with an admin panel to help merchants analyze their sales. Grocery Store includes features such as user profiles, wishlists, orders, and a shopping cart, offering a seamless and convenient shopping experience.",
    },
    {
      thumbnail: "/images/rich-text-editor.gif",
      title: "Rich text editor",
      link: "https://www.npmjs.com/package/cuvette-text-editor",
      tech: ["CSS", "React", "draft.js"],
      desc: "I developed a React-based rich text editor with a minimalist design, which is now available for use by other developers and startups via npm. The editor is built on top of the Draft.js library, providing a flexible foundation for text editing. It has already been integrated into Cuvette, a hire-tech startup, and has proven to be reliable and easy to use. This text editor can help streamline the content creation process for a variety of use cases, including blogging and social media platforms.",
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
            {isMobileView ? (
              ""
            ) : (
              <div
                className={`animate-up ${styles.left}`}
                style={{ animationDelay: "200ms" }}
              >
                <div className="image">
                  <img src={project.thumbnail} alt={project.title} />
                </div>
              </div>
            )}

            <div className={styles.right}>
              {/* <p className={styles.label}>Featured Project</p> */}
              <p
                className={`animate-up ${styles.title}`}
                style={{ animationDelay: "100ms" }}
              >
                {project.title}
              </p>
              <div className={styles.boxOuter}>
                <p
                  className={`animate-up ${styles.box}`}
                  style={{ animationDelay: "200ms" }}
                >
                  {project.desc}
                </p>
                {isMobileView ? (
                  <div className={styles.bg}>
                    <div className="image">
                      <img src={project.thumbnail} alt={project.title} />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

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

              {project.github ? (
                <a href={project.github} target="_blank">
                  <button
                    className="button animate-up"
                    style={{ animationDelay: "400ms" }}
                  >
                    View on Github
                  </button>
                </a>
              ) : (
                <a href={project.link} target="_blank" className="link">
                  Check it out
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <p className={styles.title}>It's not the end!</p>
        <p className={styles.desc}>
          I do have a lot more project, its my hobby to create something in free
          time. I keep on building new and interesting stuff as i get time,
          checkout out my{" "}
          <a
            className="link"
            href={"https://github.com/aashu0148"}
            target="_blank"
          >
            github
          </a>{" "}
          for more
        </p>
      </div>
    </div>
  );
}

export default Projects;
