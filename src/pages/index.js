import React, { useEffect, useState } from "react";
import Head from "next/head";

import Loader from "Components/Loader/Loader";
import MainContent from "Components/MainContent/MainContent";
import Navbar from "Components/Navbar/Navbar";
import Socials from "Components/Socials/Socials";
import EmailDiv from "Components/EmailDiv/EmailDiv";

let trailingElement, mouseMoveTimeout;
export default function Home() {
  const [pageLoading, setPageLoading] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleObserver = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const classes = Array.from(entry.target.classList);
      const isAnimateUp = classes.includes("animate-up");

      if (isAnimateUp) entry.target.classList.toggle("pop-out", true);
      else entry.target.classList.toggle("pop-down", true);
    });
  };

  const handleMouseMove = (event) => {
    if (!trailingElement || window.outerWidth < 768) return;

    const x = event.clientX;
    const y = event.clientY;

    clearTimeout(mouseMoveTimeout);
    mouseMoveTimeout = setTimeout(
      () => (trailingElement.style.opacity = "0"),
      500
    );

    trailingElement.style.opacity = "1";
    trailingElement.style.top = `${y - 10}px`;
    trailingElement.style.left = `${x - 10}px`;
  };

  const handleUrlAnchorScroll = () => {
    const anchor = window.location.href.split("#")[1];
    if (!anchor) return;

    const elem = document.querySelector(`div[id=${anchor}]`);
    if (!elem) return;

    elem.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleWindowResize = () => {
    const width = window.innerWidth;

    setIsMobileView(width < 770);
  };

  useEffect(() => {
    if (pageLoading) return;

    handleUrlAnchorScroll();

    const popOutElems = Array.from(document.querySelectorAll(".animate-up"));
    const popDownElems = Array.from(document.querySelectorAll(".animate-down"));
    const allElems = [...popDownElems, ...popOutElems];

    const observer = new IntersectionObserver(handleObserver);

    allElems.forEach((elem) => observer.observe(elem));

    trailingElement = document.querySelector("#trail");

    if (trailingElement) window.addEventListener("mousemove", handleMouseMove);

    return () => {
      allElems.forEach((elem) => observer.unobserve(elem));

      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [pageLoading]);

  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    setTimeout(() => {
      setPageLoading(false);
    }, 3000);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Anshul</title>
        <meta
          name="description"
          content="Portfolio website developed by and for Anshul"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logox512.png"></link>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#121d32" />
        <meta name="title" content="Anshul" />
      </Head>
      {pageLoading ? (
        <div className={"loader-container"}>
          <Loader big timeout={3000} />
        </div>
      ) : (
        <>
          <div id="trail" />
          <Navbar isMobileView={isMobileView} />
          <MainContent isMobileView={isMobileView} />

          {isMobileView ? (
            ""
          ) : (
            <>
              <Socials isMobileView={isMobileView} />
              <EmailDiv isMobileView={isMobileView} />
            </>
          )}
        </>
      )}
    </>
  );
}
