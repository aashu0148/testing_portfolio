import React, { useState } from "react";

import styles from "./WorkExp.module.scss";
import { getDateFormatted } from "util.js";

function WorkExp({ isMobileView = false }) {
  const experiences = [
    {
      company: "Hushl",
      position: "Frontend Engineer Intern",
      certificate: "https://hushl.in",
      companyLink: "https://hushl.in",
      duration: {
        start: "07/15/2022", // mm/dd/yyyy
        end: Date.now(),
      },
      points: [
        "Created powerful chrome extensions for Twitter and LinkedIn with AI features for content creators",
        "Developed AI powered tools for content creation in a small team environment",
        "Focused on design to produce aesthetically pleasing and delightful interfaces with pure CSS",
        "Built an MVP product in record time of 20 days in a fast-paced environment",
      ],
    },
    {
      company: "Cuvette",
      position: "Product developer Intern",
      certificate:
        "https://drive.google.com/file/d/1UNF5avIURMEEULbnVqNqAkX1GSBt0Pht/view?usp=drivesdk",
      companyLink: "https://cuvette.tech",
      duration: {
        start: "06/08/2021", // mm/dd/yyyy
        end: "06/08/2022",
      },
      points: [
        "Collaborated with a team of 4 to successfully launch a product with over 450k users in just a year.",
        // "Worked closely with designers to accurately translate Figma wireframes into functional interfaces.",
        "Led the implementation of a client-side notification system using Firebase.",
        "Developed a Progressive Web App (PWA) for a React application, improving user experience and engagement.",
        <li className="list-item" key="one-c">
          Created a feature-rich text editor on top of DraftJS, which is now
          available on{" "}
          <a
            href="https://www.npmjs.com/package/cuvette-text-editor"
            target="_blank"
            className="link"
          >
            npm
          </a>{" "}
          for other developers to use.
        </li>,
      ],
    },
    {
      company: "NinjaSalary",
      position: "Frontend developer",
      certificate:
        "https://drive.google.com/file/d/1jh1seLahT6f0lSh0ByDBF-yPh9W_GFFa/view",
      duration: {
        start: "03/17/2021", // mm/dd/yyyy
        end: "05/22/2021",
      },
      points: [
        "Developed and maintained the entire frontend of a web application, ensuring seamless integration with the backend.",
        "Successfully managed and presented a large amount of tabular data using the DataTable library.",
        "Created a full user authentication system on the frontend, utilizing tokens for secure and efficient user management.",
      ],
    },
  ];

  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);

  const selectedExp = experiences[selectedCompanyIndex];

  return (
    <div className={styles.container} id="exp">
      <div className={styles.heading}>
        <span>02.</span>
        <p>Work Experience</p>
        <span className={styles.line} />
      </div>

      <div className={styles.body}>
        <div
          className={`animate-up ${styles.companyList}`}
          style={{ animationDelay: `200ms` }}
        >
          <span
            className={styles.indicator}
            style={{ "--active-index": selectedCompanyIndex }}
          />
          {experiences.map((e, i) => (
            <div
              className={`${styles.item} ${
                i == selectedCompanyIndex ? styles.active : ""
              }`}
              key={e.company}
              onClick={() => setSelectedCompanyIndex(i)}
            >
              {e.company}
            </div>
          ))}
        </div>

        <div className={styles.explanation}>
          <div className={styles.detail}>
            <p
              className={`animate-up ${styles.title}`}
              style={{ animationDelay: `200ms` }}
            >
              {selectedExp.position}{" "}
              <a
                className="link"
                href={selectedExp.companyLink || selectedExp.certificate}
                target="_blank"
              >
                @ {selectedExp.company}
              </a>{" "}
            </p>

            <p
              className={`animate-up ${styles.desc}`}
              style={{ animationDelay: `300ms` }}
            >
              {getDateFormatted(selectedExp.duration.start, false, true)} -{" "}
              {getDateFormatted(selectedExp.duration.end, false, true)}
            </p>
          </div>

          <ul
            className={`animate-up ${styles.list}`}
            style={{ animationDelay: `300ms` }}
          >
            {selectedExp.points.map((point, i) =>
              typeof point == "string" ? (
                <li className="list-item" key={point}>
                  {point}
                </li>
              ) : (
                point
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkExp;
