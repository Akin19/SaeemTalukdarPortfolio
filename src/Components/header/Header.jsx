import { useState, useEffect } from "react";

import "./Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navMenu = document.querySelector(".nav__menu");
      const navToggle = document.querySelector(".nav__toggle");

      // Close the menu if clicked outside and the toggle is open
      if (
        toggle &&
        navMenu &&
        !navMenu.contains(event.target) &&
        navToggle &&
        !navToggle.contains(event.target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggle]);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Saeem Talukdar
        </a>
        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {[
              { href: "#home", label: "Home", icon: "uil uil-estate" },
              { href: "#about", label: "About", icon: "uil uil-user" },
              { href: "#skills", label: "Skills", icon: "uil uil-file-alt" },
              {
                href: "#service",
                label: "Services",
                icon: "uil uil-briefcase",
              },
              {
                href: "#portfolio",
                label: "Portfolio",
                icon: "uil uil-scenery",
              },
              {
                href: "#testimonial",
                label: "Testimonials",
                icon: "uil uil-comments",
              },
              { href: "#contact", label: "Contact", icon: "uil uil-message" },
            ].map((item) => (
              <li className="nav__item" key={item.href}>
                <a
                  href={item.href}
                  onClick={() => {
                    setActiveNav(item.href);
                    setToggle(false); // Close menu
                  }}
                  className={
                    activeNav === item.href
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className={item.icon + " nav__icon"}></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="nav__close"
            aria-label="Close navigation menu"
            onClick={() => setToggle(false)}
          >
            <i className="uil uil-times"></i>
          </button>
        </div>
        <button
          className="nav__toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setToggle(!toggle)}
        >
          <i className="uil uil-apps"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
