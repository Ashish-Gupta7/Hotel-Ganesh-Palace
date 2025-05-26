import React from "react";

const Services = ({ servicesRef }) => {
  const data = [
    {
      name: "Car on rent",
      img: "Car_on_rent.svg",
    },
    {
      name: "Free Wi-Fi",
      img: "Free_wifi.svg",
    },
    {
      name: "Parking Area",
      img: "Parking.svg",
    },
    {
      name: "Restaurent Comming Soon",
      img: "Restaurent.svg",
    },
  ];
  return (
    <div
      ref={servicesRef}
      className="w-full flex items-center justify-center flex-col gap-24 max-[685px]:gap-16"
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center pt-24 max-[685px]:pt-28">
        <h1 className="text-8xl font-semibold tracking max-[1025px]:text-6xl max-[685px]:text-4xl">
          Just for You
        </h1>
        <h3 className="text-xl pt-4 tracking-wider max-[685px]:text-lg max-[685px]:pt-0">
          More than a stay — it’s an experience.
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-52 py-6 px-4 max-[1200px]:gap-36 max-[1025px]:gap-20 max-[685px]:gap-10">
        {data.map((service, index) => (
          <div key={index} className="rounded-md flex flex-col">
            <div className="flex items-center">
              <div className="flex flex-col items-center justify-center gap-1 max-[685px]:gap-0">
                <div
                  className={`h-[100px] w-[100px] p-1 rounded-full overflow-hidden max-[1025px]:h-[80px] max-[1025px]:w-[80px] max-[769px]:h-[60px] max-[769px]:w-[60px] max-[685px]:h-[50px] max-[685px]:w-[50px]`}
                >
                  <img
                    src={`/Images/Services/${service.img}`}
                    alt={service.name}
                  />
                </div>
                <div>{service.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-14 text-center text-xl flex items-center justify-center gap-2 text-wrap max-[1025px]:w-[90%] max-[1025px]:flex max-[1025px]:flex-col max-[1025px]:gap-4 max-[685px]:gap-2">
        <button className="text-xs font-semibold font-sans px-3 py-1 bg-[#262221] dark:bg-[#e6dcd9] text-[#e6dcd9] dark:text-[#262221] rounded-full border-2 border-[#e6dcd9] dark:border-[#262221] transition duration-300">
          AWESOME
        </button>
        <p className="font-semibold max-[685px]:text-base">
          Thoughtfully chosen services and experiences — because you deserve
          nothing less than special.
        </p>
      </div>
    </div>
  );
};

export default Services;
