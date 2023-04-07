import React from "react";

import Hero from "Components/Hero/Hero";
import About from "Components/About/About";
import WorkExp from "Components/WorkExp/WorkExp";

import styles from "./MainContent.module.scss";

function MainContent() {
  return (
    <main className={styles.container}>
      <Hero />
      <About />
      <WorkExp />
    </main>
  );
}

export default MainContent;
