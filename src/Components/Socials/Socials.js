import React from "react";
import { Codepen, GitHub, Linkedin } from "react-feather";

import styles from "./Socials.module.scss";

function Socials() {
  const links = [
    {
      link: "https://github.com/aashu0148",
      value: "github",
      label: "GitHub",
      icon: <GitHub />,
    },
    {
      link: "https://www.linkedin.com/in/aashu0148",
      value: "linkedin",
      label: "Linkedin",
      icon: <Linkedin />,
    },
    {
      link: "https://codepen.io/aashu0148",
      value: "codepen",
      label: "Codepen",
      icon: <Codepen />,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        {links.map((item, index) => (
          <a
            key={item.value}
            href={item.link}
            target="_blank"
            className={`pop-out ${styles.icon}`}
            style={{ animationDelay: `${index * 50 + 1000}ms` }}
          >
            {item.icon}
          </a>
        ))}
      </div>

      <span className={`${styles.line}`} style={{ animationDelay: "1s" }} />
    </div>
  );
}

export default Socials;
