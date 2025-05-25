import React, { useEffect, useState } from "react";
import "../Stylesheets/Nav.css";
import Theme from "./Theme";

const Nav = ({ aboutRef, servicesRef, offersRef, scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`navbar h-[11vh] sticky z-40 top-0 ${
        scrolled ? "" : "dark:bg-[#262221] bg-[#e6dcd9]"
      }`}
    >
      <nav className="flex justify-between items-center font-[kingred] px-3 pt-1 pb-1 pr-4">
        <div className="logo">
          <img src="/Images/Logo/logo.svg" alt="" />
        </div>
        <div className="nav-links flex items-center uppercase text-[13px] gap-24 text-[#262221] dark:text-[#e6dcd9] max-[1200px]:gap-20 max-[1024px]:gap-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="tracking-wider uppercase"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="tracking-wider uppercase"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(servicesRef)}
            className="tracking-wider uppercase"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection(offersRef)}
            className="tracking-wider uppercase"
          >
            Offers
          </button>
        </div>
        <a
          href="https://wa.me/917748883352"
          target="_blank"
          className="flex gap-10 items-center"
        >
          <button className="px-4 py-1 uppercase bg-[#262221] text-[#e6dcd9] dark:bg-[#e6dcd9] dark:text-[#262221]">
            Book Now
          </button>
          <Theme />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
