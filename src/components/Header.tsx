import React, { useEffect, useRef } from "react";


const Header: React.FC = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navlistRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle("sticky", window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    if (menuRef.current && navlistRef.current) {
      menuRef.current.classList.toggle("bx-x");
      navlistRef.current.classList.toggle("open");
    }
  };

  useEffect(() => {
    const handleWindowScroll = () => {
      if (menuRef.current && navlistRef.current) {
        menuRef.current.classList.remove("bx-x");
        navlistRef.current.classList.remove("open");
      }
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return (
    <header ref={headerRef}>
  
      {/* Your header content */}
      <div id="menu-icon" ref={menuRef} onClick={handleMenuClick}>
        {/* Menu icon content */}
      </div>
      <ul id="navlist" ref={navlistRef}>
        {/* Nav list content */}
      </ul>
    </header>
  );
};

export default Header;