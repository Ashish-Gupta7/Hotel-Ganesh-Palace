import React from "react";

const Offers = ({ offersRef }) => {
  return (
    <div
      ref={offersRef}
      className="w-full flex items-center justify-center flex-col gap-24"
    >
      <div className="flex flex-col items-center justify-center text-center pt-28">
        <h1 className="text-8xl font-semibold tracking max-[1025px]:text-6xl max-[685px]:text-4xl">
          Exclusive Offers
        </h1>
        <h3 className="text-xl pt-4 tracking-wider max-[685px]:text-lg max-[685px]:pt-2">
          Enjoy in hotel rooms and awesome facilities.
        </h3>
      </div>
      <div className="flex items-center justify-center gap-60 py-2 max-[1200px]:gap-40 max-[1025px]:gap-32 max-[685px]:gap-20 max-[576px]:gap-10 max-[404px]:gap-6">
        <div className="w-max h-[114px] flex items-center justify-center">
          <a
            href="https://www.tripadvisor.in/HotelHighlight-g27418978-d27415142-Reviews-Ganesh_Palace_Hotel-Khusarwah_Shahdol_District_Madhya_Pradesh.html"
            target="_blank"
            className="w-full h-full block dark:hidden"
          >
            <img
              className="max-[1025px]:h-[60px] relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] max-[404px]:h-[40px]"
              src="/Images/Offers-logo/LightBG_Tripadviser.svg"
              alt=""
            />
          </a>
          <a
            href="https://www.tripadvisor.in/HotelHighlight-g27418978-d27415142-Reviews-Ganesh_Palace_Hotel-Khusarwah_Shahdol_District_Madhya_Pradesh.html"
            target="_blank"
            className="w-full h-full hidden dark:block"
          >
            <img
              className="max-[1025px]:h-[60px] relative top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] max-[404px]:h-[40px]"
              src="/Images/Offers-logo/DarkBG_Tripadviser.svg"
              alt=""
            />
          </a>
        </div>
        <a
          href="https://www.makemytrip.com/hotels/ganesh_palace_hotel-details-jaisinghnagar.html"
          target="_blank"
          className=""
        >
          <img
            className="text-black max-[1025px]:h-[60px] max-[404px]:h-[44px]"
            src="/Images/Offers-logo/Makemytrip.svg"
            alt=""
          />
        </a>
      </div>
      <div className="py-14 text-center text-xl flex items-center justify-center gap-2 max-[1025px]:flex-col max-[404px]:py-10">
        <button className="text-xs font-semibold font-sans px-3 py-1 bg-[#262221] dark:bg-[#e6dcd9] text-[#e6dcd9] dark:text-[#262221] rounded-full border-2 border-[#e6dcd9] dark:border-[#262221] transition duration-300">
          AWESOME
        </button>
        <p className="font-semibold max-[685px]:text-base">
          Get 20% discount on hotels booking with above websites.
        </p>
      </div>
    </div>
  );
};

export default Offers;
