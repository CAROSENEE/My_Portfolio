import { useEffect, useState } from "react";
import logo from "../assets/carosine-emblem.png";
import CircuitAnimation from "./CircuitAnimation";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Contact", href: "#contact" },
  ];

  /* ========================================
     TOP / SCROLL DETECTION
  ======================================== */

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY <= 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ========================================
     ACTIVE SECTION DETECTION
  ======================================== */

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        root: null,

        // Navbar area বাদ দিয়ে section detect করবে
        rootMargin: "-25% 0px -55% 0px",

        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* ========================================
     NAVIGATION CLICK
  ======================================== */

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`navbar ${
        menuOpen ? "menu-open" : ""
      } ${
        isAtTop
          ? "navbar-top"
          : "navbar-scrolled"
      }`}
    >
      {/* ======================================
          IDENTITY / LOGO
      ====================================== */}

      <div className="identity-panel">
        <CircuitAnimation active={isAtTop} />

        <a
          href="#home"
          className="navbar-logo"
          aria-label="Go to home"
          onClick={handleNavClick}
        >
          <img
            src={logo}
            alt="CAROSINE Logo"
            className="logo-image"
          />

          <span className="logo-text">
            <span className="logo-name">
              Md. Moshiur Rahman Sajol
            </span>

            <span className="logo-sub">
              CAROSINE
            </span>
          </span>
        </a>
      </div>

      {/* ======================================
          DESKTOP NAVIGATION
      ====================================== */}

      <nav className="navbar-links">
        {navItems.map((item) => {
          const sectionId = item.href.substring(1);

          return (
            <a
              key={item.label}
              href={item.href}
              className={
                activeSection === sectionId
                  ? "active"
                  : ""
              }
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* ======================================
          STATUS + MOBILE BUTTON
      ====================================== */}

      <div className="navbar-right">
        <div className="navbar-status">
          <span className="navbar-status-dot"></span>
          ONLINE
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* ======================================
          MOBILE MENU
      ====================================== */}

      <div
        className={`mobile-menu ${
          menuOpen ? "show" : ""
        }`}
      >
        <div className="mobile-menu-header">
          <span>ACCESS_MENU</span>
          <span>STATUS: ACTIVE</span>
        </div>

        {navItems.map((item, index) => {
          const sectionId = item.href.substring(1);

          return (
            <a
              key={item.label}
              href={item.href}
              className={
                activeSection === sectionId
                  ? "active"
                  : ""
              }
              onClick={handleNavClick}
            >
              <span className="mobile-menu-number">
                0{index + 1}
              </span>

              <span className="mobile-menu-label">
                {item.label}
              </span>

              <b>↗</b>
            </a>
          );
        })}
      </div>
    </header>
  );
}

export default Navbar;