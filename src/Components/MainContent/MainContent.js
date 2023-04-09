import React from "react";

import Hero from "Components/Hero/Hero";
import About from "Components/About/About";
import WorkExp from "Components/WorkExp/WorkExp";
import Projects from "Components/Projects/Projects";
import Contact from "Components/Contact/Contact";

import styles from "./MainContent.module.scss";

function MainContent({ isMobileView = false }) {
  return (
    <main className={styles.container}>
      <Hero isMobileView={isMobileView} />
      <About isMobileView={isMobileView} />
      <WorkExp isMobileView={isMobileView} />
      <Projects isMobileView={isMobileView} />
      <Contact isMobileView={isMobileView} />
    </main>
  );
}

export default MainContent;
