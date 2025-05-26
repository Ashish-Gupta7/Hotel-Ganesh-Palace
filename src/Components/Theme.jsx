import React, { useEffect, useState } from "react";
import "../Stylesheets/Theme.css";

const Theme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="toggle-switch relative w-[70px] h-[32px] max-[850px]:w-[64px] max-[850px]:h-[27px]">
      <label className="switch-label absolute w-full h-full rounded-[25px] cursor-pointer">
        <input
          type="checkbox"
          className="checkbox hidden"
          checked={theme}
          onChange={() => setTheme(!theme)}
        />
        <span className="slider absolute w-full h-full rounded-[25px] transition-all duration-300 before:content-[''] before:absolute before:top-1 before:left-1 before:w-5 before:h-5 before:rounded-[50%] before:bg-[var(--dark)] before:transition-all before:duration-300 before:shadow-[inset_12px_-4px_0px_0px_var(--light)] max-[850px]:before:w-[16px] max-[850px]:before:h-[15px] max-[850px]:before:top-[3.5px] max-[850px]:before:left-[3px]"></span>
      </label>
    </div>
  );
};

export default Theme;
