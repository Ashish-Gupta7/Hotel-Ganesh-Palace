import React from "react";
import SheryImg from "./SheryImg";
import Offers from "./Offers";
import Ratings from "./Ratings";
import Partners from "./Partners";
import Services from "./Services";
import About from "./About";
import SwiperImg from "./SwiperImg";

const Main = ({ aboutRef, offersRef, servicesRef }) => {
  return (
    <>
      <SheryImg />
      <SwiperImg />
      <div className="bg-[#e6dcd9] dark:bg-[#262221] dark:text-[#e6dcd9] text-[#262221] flex flex-col items-center justify-center text-center gap-20">
        <Services servicesRef={servicesRef} />
        <Offers offersRef={offersRef} />
        <Partners />
        <Ratings />
        <About aboutRef={aboutRef} />
      </div>
    </>
  );
};

export default Main;
