import React, { useEffect, useState } from "react";
import "../Stylesheets/Nav.css";
import Theme from "./Theme";

const Nav = ({ aboutRef, servicesRef, offersRef, scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar h-[11vh] sticky z-40 top-0 max-[576px]:h-[9vh] ${
        scrolled ? "" : "dark:bg-[#262221] bg-[#e6dcd9]"
      }`}
    >
      <nav className="flex justify-between items-center font-[kingred] px-3 pt-1 pb-1 pr-4 max-[576px]:px-2">
        <div className="logo max-[576px]:h-16 max-[576px]:w-40">
          <img src="/Images/Logo/logo.svg" alt="" />
        </div>

        <div className="nav-links flex items-center uppercase text-[13px] gap-24 text-[#262221] dark:text-[#e6dcd9] max-[1200px]:gap-20 max-[1024px]:gap-10 max-[850px]:gap-8 max-[769px]:hidden">
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

        <div className="flex gap-10 items-center max-[850px]:gap-4">
          <a
            href="https://wa.me/917748883352"
            target="_blank"
            className="px-4 py-1 uppercase bg-[#262221] text-[#e6dcd9] dark:bg-[#e6dcd9] dark:text-[#262221] max-[850px]:px-3 max-[850px]:py-[3px] max-[850px]:text-sm max-[576px]:hidden"
          >
            Book Now
          </a>
          <Theme />
          <div className="max-[768px]:block hidden">
            <input
              type="checkbox"
              id="hamburgerToggle"
              className="visuallyHidden absolute overflow-hidden h-[1px] w-[1px] p-0"
              checked={menuOpen}
              onChange={() => setMenuOpen(!menuOpen)}
            />
            <label htmlFor="hamburgerToggle" className="cursor-pointer">
              <div
                className={`hamburger hamburger2 w-[26px] h-[30px] relative mt-0 flex flex-col gap-8`}
              >
                <span className="bar bar1 bg-[#262221] dark:bg-[#E6DCD9] absolute w-full h-[2px] transition-all duration-300 ease-in-out"></span>
                <span className="bar bar2 bg-[#262221] dark:bg-[#E6DCD9] absolute w-full h-[2px] transition-all duration-300 ease-in-out"></span>
                <span className="bar bar3 bg-[#262221] dark:bg-[#E6DCD9] absolute w-full h-[2px] transition-all duration-300 ease-in-out"></span>
                <span className="bar bar4 bg-[#262221] dark:bg-[#E6DCD9] absolute w-full h-[2px] transition-all duration-300 ease-in-out"></span>
              </div>
            </label>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="mobile-menu absolute w-48 top-[11vh] right-0 bg-[#e6dcd9] dark:bg-[#262221] flex flex-col items-center gap-4 py-4 z-30 text-sm font-semibold transition-all duration-300 ease-out animate-dropdown max-[576px]:top-[9vh]">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              setMenuOpen(false);
            }}
            className="uppercase tracking-wider text-[#262221] dark:text-[#e6dcd9]"
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection(servicesRef);
              setMenuOpen(false);
            }}
            className="uppercase tracking-wider text-[#262221] dark:text-[#e6dcd9]"
          >
            Services
          </button>
          <button
            onClick={() => {
              scrollToSection(offersRef);
              setMenuOpen(false);
            }}
            className="uppercase tracking-wider text-[#262221] dark:text-[#e6dcd9]"
          >
            Offers
          </button>

          <button
            onClick={() => {
              scrollToSection(aboutRef);
              setMenuOpen(false);
            }}
            className="uppercase tracking-wider text-[#262221] dark:text-[#e6dcd9]"
          >
            About
          </button>
          <a
            href="https://wa.me/917748883352"
            target="_blank"
            className="px-4 py-2 mt-2 uppercase bg-[#262221] text-[#e6dcd9] dark:bg-[#e6dcd9] dark:text-[#262221] max-[769px]:hidden max-[576px]:block"
          >
            Book Now
          </a>
        </div>
      )}
    </div>
  );
};

export default Nav;
