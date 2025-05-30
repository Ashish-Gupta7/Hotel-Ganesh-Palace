import React, { useRef } from "react";
import Nav from "./Components/Nav";
import Main from "./Components/Main";

const App = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const offersRef = useRef(null);

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="h-full flex flex-col text-[#262221] dark:text-[#e6dcd9] transition duration-300">
        <Nav
          aboutRef={aboutRef}
          servicesRef={servicesRef}
          offersRef={offersRef}
          scrollToSection={scrollToSection}
        />
        <Main
          aboutRef={aboutRef}
          servicesRef={servicesRef}
          offersRef={offersRef}
        />
      </div>
    </>
  );
};

export default App;
