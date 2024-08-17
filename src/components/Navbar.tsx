import React, { useRef, useEffect, useState } from "react";
import "./navbar.css";

const Navbar: React.FC = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navlistRef = useRef<HTMLUListElement | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (headerRef.current) {
  //       headerRef.current.classList.toggle("sticky", window.scrollY > 100);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleMenuClick = () => {
  //   if (menuRef.current && navlistRef.current) {
  //     menuRef.current.classList.toggle("bx-x");
  //     navlistRef.current.classList.toggle("open");
  //   }
  // };

  // useEffect(() => {
  //   const handleWindowScroll = () => {
  //     if (menuRef.current && navlistRef.current) {
  //       menuRef.current.classList.remove("bx-x");
  //       navlistRef.current.classList.remove("open");
  //     }
  //   };

  //   window.addEventListener("scroll", handleWindowScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleWindowScroll);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleWindowScroll = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <>
      {/* navbar */}
      <header className={isSticky ? "sticky" : ""}>
      <a href="#" className="logo">
        Pr<span>e</span>m.
      </a>
      <ul className={`navlist ${isMenuOpen ? "open" : ""}`} id="navlist">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#mySkills">My skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contactMe">Contact Me</a>
        </li>
      </ul>
      <div
        className={`bx bx-menu ${isMenuOpen ? "bx-x" : ""}`}
        id="menu-icon"
        onClick={handleMenuClick}
      ></div>
    </header>
    </>
  );
};

export default Navbar;
