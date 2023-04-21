import React, { useEffect, useRef, useState } from "react";

import Loader from "Components/Loader/Loader";

import styles from "./Navbar.module.scss";
import { Menu, X } from "react-feather";
import Backdrop from "Components/Backdrop/Backdrop";

let previousScrollTop = 0;
function Navbar({ isMobileView = false }) {
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

  const [showBackdrop, setShowBackdrop] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const navbar = navRef.current;
    if (!navbar) return;

    if (scrollTop < 50) {
      navbar.style.top = 0;
      previousScrollTop = scrollTop;
      navbar.style.boxShadow = `none`;
      navbar.style.backgroundColor = `transparent`;
      return;
    }

    if (previousScrollTop < scrollTop) {
      // scrolling down
      navbar.style.top = "-100px";
    } else {
      // scrolling up
      navbar.style.top = "0";
      navbar.style.boxShadow = `0 1px 20px rgba(0, 0, 0, 0.2)`;
      navbar.style.backgroundColor = `#162236ba`;
    }

    previousScrollTop = scrollTop;
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const rightSection = (
    <div className={styles.right}>
      {isMobileView ? (
        <div
          className={styles.closeIcon}
          onClick={() => setShowBackdrop(false)}
        >
          <X />
        </div>
      ) : (
        ""
      )}
      <ul>
        {navLinks.map((item, index) => (
          <li
            key={item.value}
            onClick={() => {
              window.location.href = item.value;
              setShowBackdrop(false);
            }}
            className={"pop-down"}
            style={{ animationDelay: `${index * 50 + 200}ms` }}
          >
            <span>0{index + 1}.</span>
            <p>{item.label}</p>
          </li>
        ))}
      </ul>

      <a
        href="/anshul-resume.pdf"
        download
        style={{ width: "fit-content", margin: "0 auto" }}
      >
        <button
          className={`button pop-down`}
          style={{ animationDelay: "500ms" }}
        >
          Resume
        </button>
      </a>
    </div>
  );

  return (
    <nav ref={navRef} className={`${styles.container}`}>
      {showBackdrop ? (
        <Backdrop
          onClose={() => setShowBackdrop(false)}
          className={styles.backdrop}
        >
          {rightSection}
        </Backdrop>
      ) : (
        ""
      )}

      <div className={`pop-out ${styles.logo}`}>
        <Loader staticLogo onClick={() => window.location.replace("/")} />
      </div>

      {isMobileView ? (
        <div
          className={styles.burger}
          onClick={() => setShowBackdrop((prev) => !prev)}
        >
          <Menu />
        </div>
      ) : (
        rightSection
      )}
    </nav>
  );
}

export default Navbar;
