import React, { useEffect, useRef, useState } from "react";

import Loader from "Components/Loader/Loader";

import styles from "./Navbar.module.scss";

let previousScrollTop = 0;
function Navbar() {
  const navLinks = [
    {
      value: "/#about",
      label: "About",
    },
    {
      value: "/#exp",
      label: "Experience",
    },
    {
      value: "/#project",
      label: "Projects",
    },
    {
      value: "/#contact",
      label: "Contact",
    },
  ];

  const navRef = useRef();

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const navbar = navRef.current;
    if (!navbar) return;

    if (scrollTop < 50) {
      navbar.style.top = 0;
      previousScrollTop = scrollTop;
      navbar.style.boxShadow = `none`;
      return;
    }

    if (previousScrollTop < scrollTop) {
      // scrolling down
      navbar.style.top = "-100px";
    } else {
      // scrolling up
      navbar.style.top = "0";
      navbar.style.boxShadow = `0 1px 20px rgba(0, 0, 0, 0.2)`;
    }

    previousScrollTop = scrollTop;
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav ref={navRef} className={`${styles.container}`}>
      <div className={`pop-out ${styles.logo}`}>
        <Loader staticLogo onClick={() => window.location.replace("/")} />
      </div>

      <div className={styles.right}>
        <ul>
          {navLinks.map((item, index) => (
            <li
              key={item.value}
              onClick={() => (window.location.href = item.value)}
              className={"pop-down"}
              style={{ animationDelay: `${index * 50 + 200}ms` }}
            >
              <span>0{index + 1}.</span>
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
        <button
          className={`button pop-down`}
          style={{ animationDelay: "500ms" }}
        >
          Resume
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
