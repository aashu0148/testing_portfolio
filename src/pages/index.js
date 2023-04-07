import React, { useEffect, useState } from "react";
import Head from "next/head";

import Loader from "Components/Loader/Loader";
import MainContent from "Components/MainContent/MainContent";
import Navbar from "Components/Navbar/Navbar";
import Socials from "Components/Socials/Socials";
import EmailDiv from "Components/EmailDiv/EmailDiv";

export default function Home() {
  const [pageLoading, setPageLoading] = useState(true);

  const handleObserver = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const classes = Array.from(entry.target.classList);
      const isAnimateUp = classes.includes("animate-up");

      if (isAnimateUp) entry.target.classList.toggle("pop-out", true);
      else entry.target.classList.toggle("pop-down", true);
    });
  };

  useEffect(() => {
    if (pageLoading) return;

    const popOutElems = Array.from(document.querySelectorAll(".animate-up"));
    const popDownElems = Array.from(document.querySelectorAll(".animate-down"));
    const allElems = [...popDownElems, ...popOutElems];

    const observer = new IntersectionObserver(handleObserver);

    allElems.forEach((elem) => observer.observe(elem));

    return () => {
      allElems.forEach((elem) => observer.unobserve(elem));
    };
  }, [pageLoading]);

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Portfolio website developed by and for Anshul"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logox512.png"></link>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8dfba0" />
        <meta name="title" content="Anshul" />
      </Head>
      {pageLoading ? (
        <div className={"loader-container"}>
          <Loader big timeout={3000} />
        </div>
      ) : (
        <>
          <Navbar />
          <Socials />
          <EmailDiv />
          <MainContent />
        </>
      )}
    </>
  );
}
