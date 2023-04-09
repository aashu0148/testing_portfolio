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
        start: "07-15-2022", // mm-dd-yyyy
        end: Date.now(),
      },
      points: [
        "Working in a small team to build AI powered tools that will change the future of content creation.",
        "Working in a fast pace environment and we have build a product in a record time of 20 days (MVP)",
        "Developed complex CSS designs with perfection.",
      ],
    },
    {
      company: "Cuvette",
      position: "Product developer Intern",
      certificate:
        "https://drive.google.com/file/d/1UNF5avIURMEEULbnVqNqAkX1GSBt0Pht/view?usp=drivesdk",
      companyLink: "https://cuvette.tech",
      duration: {
        start: "06-08-2021", // mm-dd-yyyy
        end: "06-08-2022",
      },
      points: [
        "With a team of 4 people managed to deliver a product that is used by over 4.5 lakh users per month within just 1 year.",
        "Worked closely with designer to delivery exact Figma wireframes into development.",
        "This is point number 3",
        "Implemented the whole client side of Notification system using firebase.",
      ],
    },
    {
      company: "NinjaSalary",
      position: "Frontend developer",
      certificate:
        "https://drive.google.com/file/d/1jh1seLahT6f0lSh0ByDBF-yPh9W_GFFa/view",
      duration: {
        start: "03-17-2021", // mm-dd-yyyy
        end: "05-22-2021",
      },
      points: [
        "I have developed the whole frontend keeping sync with backend for ninjasalary.",
        "Worked with a lot of tabular data and used Data Table library to do so.",
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
            {selectedExp.points.map((point, i) => (
              <li className="list-item" key={point}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkExp;
