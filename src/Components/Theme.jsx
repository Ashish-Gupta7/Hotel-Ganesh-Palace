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
    <div className="toggle-switch">
      <label className="switch-label">
        <input
          type="checkbox"
          className="checkbox"
          checked={theme}
          onChange={() => setTheme(!theme)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Theme;
