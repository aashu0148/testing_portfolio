import React from "react";

import Hero from "Components/Hero/Hero";
import About from "Components/About/About";
import WorkExp from "Components/WorkExp/WorkExp";
import Projects from "Components/Projects/Projects";
import Contact from "Components/Contact/Contact";

import styles from "./MainContent.module.scss";

function MainContent() {
  return (
    <main className={styles.container}>
      <Hero />
      <About />
      <WorkExp />
      <Projects />
      <Contact />
    </main>
  );
}

export default MainContent;
