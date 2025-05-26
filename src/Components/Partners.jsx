import React from "react";

const Partners = () => {
  const data = [
    {
      name: "SS Motors",
      img: {
        dark: "DarkBG_SS_Motors.png",
        light: "LightBG_SS_Motors.png",
      },
      link: "https://www.justdial.com/Shahdol/S-S-Motors-Jaisinghnagar/9999P7652-7652-190815211228-N3T4_BZDET",
    },
    {
      name: "New SS Motors",
      img: "New_SS_Motors.png",
      link: "https://www.justdial.com/Shahdol/New-Ssmotors-Near-Near-Ganesh-Palace-Jaisinghnagar/9999P7652-7652-240210124605-V1N7_BZDET",
    },
    {
      name: "Gupta Motors",
      img: {
        dark: "DarkBG_Gupta_Motors.png",
        light: "LightBG_Gupta_Motors.png",
      },
      link: "https://www.justdial.com/Shahdol/S-S-Motors-Jaisinghnagar/9999P7652-7652-190815211228-N3T4_BZDET",
    },
    {
      name: "Shrasti Online",
      img: {
        dark: "DarkBG_Shrasti_Online.png",
        light: "LightBG_Shrasti_Online.png",
      },
      link: "#",
    },
  ];

  return (
    <div className="w-full flex items-center justify-center flex-col gap-24">
      <div className="flex flex-col items-center justify-center gap-4 text-center pt-4 max-[1025px]:pt-1">
        <h1 className="text-8xl font-semibold tracking max-[1025px]:text-6xl max-[685px]:text-4xl">
          Supporting partners
        </h1>
        <h3 className="text-xl pt-4 tracking-wider max-[685px]:text-lg max-[685px]:pt-0">
          The power of unity. The strength of support.
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-36 py-6 px-4 max-[1200px]:gap-20 max-[1025px]:gap-14">
        {data.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`h-[114px] flex items-center justify-center max-[1025px]:h-[80px] max-[685px]:h-[60px]`}
          >
            {typeof partner.img === "string" ? (
              <img
                src={`/Images/Partners/${partner.img}`}
                alt={partner.name}
                className="object-contain h-full"
              />
            ) : (
              <>
                <img
                  src={`/Images/Partners/${partner.img.dark}`}
                  alt={`${partner.name} dark`}
                  className="hidden dark:block h-full object-contain"
                />
                <img
                  src={`/Images/Partners/${partner.img.light}`}
                  alt={`${partner.name} light`}
                  className="block dark:hidden h-full object-contain"
                />
              </>
            )}
          </a>
        ))}
      </div>
      <div className="py-14 text-center text-xl flex items-center justify-center gap-2 max-[1025px]:flex-col">
        <button className="text-xs font-semibold font-sans px-3 py-1 bg-[#262221] dark:bg-[#e6dcd9] text-[#e6dcd9] dark:text-[#262221] rounded-full border-2 border-[#e6dcd9] dark:border-[#262221] transition duration-300">
          AWESOME
        </button>
        <p className="font-semibold max-[685px]:text-base">
          Unlock amazing deals through our trusted partners — stronger together,
          better offers!
        </p>
      </div>
    </div>
  );
};

export default Partners;
