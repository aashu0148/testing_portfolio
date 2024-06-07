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

      <button
        className="button  animate-up"
        style={{ animationDelay: `${700 + 600}ms` }}
        onClick={() => fetch("https://dummyjson.com/products")}
      >
        Make dummy products api call
      </button>

      <About isMobileView={isMobileView} />
      <WorkExp isMobileView={isMobileView} />
      <Projects isMobileView={isMobileView} />

      <button
        className="button  animate-up"
        style={{ animationDelay: `${700 + 600}ms` }}
        onClick={() => fetch("https://dummyjson.com/users")}
      >
        Make dummy users api call
      </button>

      <Contact isMobileView={isMobileView} />
    </main>
  );
}

export default MainContent;
